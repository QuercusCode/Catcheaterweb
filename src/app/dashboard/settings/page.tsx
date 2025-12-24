'use client';

import { Save } from 'lucide-react';

export default function Settings() {
    return (
        <div className="max-w-2xl space-y-8">
            <div>
                <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground">Manage your lab profile and preferences.</p>
            </div>

            <div className="card p-6 space-y-6">
                <h3 className="font-bold text-lg text-foreground mb-4">Lab Profile</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase">Full Name</label>
                        <input type="text" defaultValue="Dr. Elena Vance" className="w-full p-2 border border-border rounded-lg bg-background" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase">Role</label>
                        <input type="text" defaultValue="Principal Investigator" className="w-full p-2 border border-border rounded-lg bg-background" />
                    </div>
                    <div className="col-span-1 md:col-span-2 space-y-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase">Institution / Lab Name</label>
                        <input type="text" defaultValue="Vance Synthetic Biology Lab, UCSF" className="w-full p-2 border border-border rounded-lg bg-background" />
                    </div>
                    <div className="col-span-1 md:col-span-2 space-y-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase">Email Address</label>
                        <input type="email" defaultValue="elena.vance@ucsf.edu" className="w-full p-2 border border-border rounded-lg bg-background" />
                    </div>
                </div>

                <div className="pt-4 border-t border-border">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm font-medium">
                        <Save size={16} /> Save Changes
                    </button>
                </div>
            </div>

            <div className="card p-6">
                <h3 className="font-bold text-lg text-foreground mb-4">Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">Order Updates</p>
                            <p className="text-sm text-muted-foreground">Receive emails about shipping status.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">Calibration Alerts</p>
                            <p className="text-sm text-muted-foreground">Notify when kits need maintenance.</p>
                        </div>
                        <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                </div>
            </div>
        </div>
    );
}
