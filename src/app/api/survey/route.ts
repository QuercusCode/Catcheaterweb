
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialized inside handler to avoid build errors if key is missing

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Log the data for verification
        console.log('----- NEW SURVEY SUBMISSION -----');
        console.log(JSON.stringify(body, null, 2));
        console.log('---------------------------------');

        const { email, ...answers } = body;

        // Create a formatted HTML list of the answers
        const answersHtml = Object.entries(answers)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join('');

        try {
            const apiKey = process.env.RESEND_API_KEY;

            if (!apiKey) {
                console.error('RESEND_API_KEY is missing');
                return NextResponse.json(
                    { success: false, message: 'Server configuration error (Missing API Key)' },
                    { status: 500 }
                );
            }

            const resend = new Resend(apiKey);
            const { data, error } = await resend.emails.send({
                from: 'Catcheater Survey <onboarding@resend.dev>',
                to: 'amir.mcheraghali81@gmail.com',
                subject: 'New Market Survey Submission',
                html: `
                    <h1>New Survey Response</h1>
                    <p><strong>Contact Email:</strong> ${email || 'Not provided'}</p>
                    <h2>Answers:</h2>
                    <ul>
                        ${answersHtml}
                    </ul>
                `,
            });

            if (error) {
                console.error('Resend API Error:', error);
                return NextResponse.json(
                    { success: false, message: 'Failed to send email', error },
                    { status: 500 }
                );
            }

            console.log('Email sent successfully:', data);
            return NextResponse.json({ success: true, message: 'Survey received' });

        } catch (emailError) {
            console.error('Failed to execute email sending:', emailError);
            return NextResponse.json(
                { success: false, message: 'Failed to send email' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error processing survey:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process survey' },
            { status: 500 }
        );
    }
}
