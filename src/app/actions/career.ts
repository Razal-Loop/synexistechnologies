"use server";

import { Resend } from "resend";

// Removed top-level instantiation to ensure runtime access
export async function submitApplication(formData: FormData) {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const experience = formData.get("experience") as string;
    const gender = formData.get("gender") as string;
    const position = formData.get("position") as string;
    const cvLink = formData.get("cvLink") as string;
    const linkedin = formData.get("linkedin") as string;

    if (!process.env.RESEND_API_KEY) {
        console.error("CRITICAL: RESEND_API_KEY missing.");
        return { success: false, error: "Server error: Missing API configuration." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { error } = await resend.emails.send({
            from: "Synexis <onboarding@resend.dev>",
            to: ["official.razalali@gmail.com"],
            subject: `New Application: ${fullName} - ${position}`,
            html: `
                <h1>New Job Application</h1>
                <p><strong>Position:</strong> ${position}</p>
                <hr/>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>LinkedIn:</strong> ${linkedin || "Not provided"}</p>
                <p><strong>CV Link:</strong> ${cvLink || "Not provided"}</p>
            `,
        });

        if (error) {
            console.error("Career Application Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("Execution Error:", err);
        return { success: false, error: "System failure." };
    }
}
