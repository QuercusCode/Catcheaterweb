
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
                console.warn('RESEND_API_KEY is not set. Skipping email dispatch.');
                return NextResponse.json({ success: true, message: 'Survey received (Email skipped - No API Key)' });
            }

            const resend = new Resend(apiKey);
            const data = await resend.emails.send({
                from: 'Catcheater Survey <onboarding@resend.dev>', // Default Resend testing domain
                to: 'amir.mcheraghali81@gmail.com', // SENDING TO USER'S EMAIL
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
            console.log('Email sent successfully:', data);
        } catch (emailError) {
            console.error('Failed to send email:', emailError);
            // We don't want to fail the request if just the email fails, but we should log it.
            // In production, we might want to return a warning.
        }

        return NextResponse.json({ success: true, message: 'Survey received' });
    } catch (error) {
        console.error('Error processing survey:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process survey' },
            { status: 500 }
        );
    }
}
