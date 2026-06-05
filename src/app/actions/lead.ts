"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    try {
        const { data, error } = await resend.emails.send({
            from: "Synexis Leads <onboarding@resend.dev>",
            to: ["official.razalali@gmail.com"], // Updated to a likely email based on corpus name, or user can change
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
        console.error("Submission Error:", err);
        return { success: false, error: "Failed to send email" };
    }
}
