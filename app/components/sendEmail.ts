"use server";

import { Resend } from "resend";
import ContactEmailForm from "./email-template";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email");
    const message = formData.get("message");
    const subject = formData.get("subject");

    if (!message || typeof message !== "string") {
        return {
            error: "Invalid message",
        };
    }

    resend.emails.send({
        from: "JPDev Contact Form <onboarding@resend.dev>",
        to: "jphillipdacallos@gmail.com",
        subject: subject as string,
        reply_to: senderEmail as string,
        react: React.createElement(ContactEmailForm, {
            message: message as string,
            senderEmail: senderEmail as string,
        }),
    });
};
