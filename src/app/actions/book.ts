"use server";

import { Resend } from "resend";

export async function submitBooking(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const date = formData.get("date") as string;
    const timeSlot = formData.get("timeSlot") as string;
    const details = formData.get("details") as string;

    if (!name || !email || !phone || !date || !timeSlot) {
        return { success: false, error: "Missing required fields." };
    }

    if (!process.env.RESEND_API_KEY) {
        console.error("CRITICAL: RESEND_API_KEY is not defined in the environment.");
        return { success: false, error: "Server configuration error: Missing Resend API key." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { error } = await resend.emails.send({
            from: "Web Axis Solutions <contact@webaxissolutions.com>",
            to: ["contact@webaxissolutions.com"],
            subject: `New Appointment Booked: ${name} on ${date} at ${timeSlot}`,
            html: `
                <h1>New Appointment Confirmed</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <hr />
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time Slot:</strong> ${timeSlot}</p>
                ${details ? `<p><strong>Additional Details:</strong> ${details}</p>` : ""}
                <hr />
                <p>This appointment was booked via the Web Axis Solutions interactive calendar.</p>
            `,
        });

        if (error) {
            console.error("Resend Booking Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error("Booking Action Failure:", err);
        return { success: false, error: "An unexpected system error occurred." };
    }
}

export async function cancelBooking(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const date = formData.get("date") as string;
    const timeSlot = formData.get("timeSlot") as string;

    if (!name || !email || !date || !timeSlot) {
        return { success: false, error: "Missing required fields." };
    }

    if (!process.env.RESEND_API_KEY) {
        console.error("CRITICAL: RESEND_API_KEY is not defined in the environment.");
        return { success: false, error: "Server configuration error: Missing Resend API key." };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { error } = await resend.emails.send({
            from: "Web Axis Solutions <contact@webaxissolutions.com>",
            to: ["contact@webaxissolutions.com"],
            subject: `Appointment CANCELLED: ${name} on ${date} at ${timeSlot}`,
            html: `
                <h1>Appointment Cancelled</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <hr />
                <p><strong>Original Date:</strong> ${date}</p>
                <p><strong>Original Time Slot:</strong> ${timeSlot}</p>
                <hr />
                <p>This appointment cancellation was requested via the Web Axis Solutions booking page.</p>
            `,
        });

        if (error) {
            console.error("Resend Cancellation Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch {
        return { success: false, error: "An unexpected system error occurred." };
    }
}
