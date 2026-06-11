"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_123");

export async function submitLead(formData: FormData) {
    const agencyName = formData.get("agencyName") as string;
    const contactName = formData.get("contactName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const serviceType = formData.get("serviceType") as string;
    const projectType = formData.get("projectType") as string;
    const campaignType = formData.get("campaignType") as string;
    const engagementType = formData.get("engagementType") as string;
    const mvpType = formData.get("mvpType") as string;
    const budget = formData.get("budget") as string;

    if (!process.env.RESEND_API_KEY) {
        console.error("CRITICAL: RESEND_API_KEY is not defined.");
        return { success: false, error: "Configuration missing." };
    }

    try {
        const { error } = await resend.emails.send({
            from: "Synexis <onboarding@resend.dev>",
            to: ["contact@synexisdigital.com"],
            subject: `New Lead: ${agencyName} (${serviceType})`,
            html: `
                <h1>New Lead Inquiry</h1>
                <p><strong>Agency:</strong> ${agencyName}</p>
                <p><strong>Contact:</strong> ${contactName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${serviceType}</p>
                ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
                ${campaignType ? `<p><strong>Campaign Type:</strong> ${campaignType}</p>` : ""}
                ${engagementType ? `<p><strong>Engagement:</strong> ${engagementType}</p>` : ""}
                ${mvpType ? `<p><strong>MVP Type:</strong> ${mvpType}</p>` : ""}
                <p><strong>Monthly Budget:</strong> $${budget}</p>
            `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("Execution Error:", err);
        return { success: false, error: "System failure." };
    }
}

export async function submitWaitlist(formData: FormData) {
    const email = formData.get("email") as string;

    if (!process.env.RESEND_API_KEY) {
        return { success: false, error: "Config missing." };
    }

    try {
        const { error } = await resend.emails.send({
            from: "Synexis <onboarding@resend.dev>",
            to: ["contact@synexisdigital.com"],
            subject: `New SaaS Waitlist Entry: ${email}`,
            html: `
                <h1>New Waitlist Entry</h1>
                <p><strong>Email:</strong> ${email}</p>
                <p>This user wants early access to Synexis SaaS Tools.</p>
            `,
        });

        if (error) {
            console.error("Waitlist Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("Waitlist Error:", err);
        return { success: false, error: "Failed to join waitlist" };
    }
}

export async function submitReferral(formData: FormData) {
    const referrerEmail = formData.get("referrerEmail") as string;
    const clientName = formData.get("clientName") as string;
    const clientContact = formData.get("clientContact") as string;
    const projectDetails = formData.get("projectDetails") as string;

    if (!process.env.RESEND_API_KEY) {
        console.error("CRITICAL: RESEND_API_KEY is not defined in environment variables.");
        return { success: false, error: "System configuration error. Please try again later." };
    }

    try {
        const { error } = await resend.emails.send({
            from: "Synexis <onboarding@resend.dev>",
            to: ["contact@synexisdigital.com"],
            subject: `New Referral from ${referrerEmail}`,
            html: `
                <h1>New Project Referral</h1>
                <p><strong>Referrer Email:</strong> ${referrerEmail}</p>
                <hr />
                <p><strong>Proposed Client:</strong> ${clientName}</p>
                <p><strong>Client Contact:</strong> ${clientContact}</p>
                <p><strong>Project Details:</strong> ${projectDetails}</p>
                <p>Status: Eligible for 20% commission upon project closure.</p>
            `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("Action Execution Error:", err);
        return { success: false, error: "An unexpected error occurred." };
    }
}
