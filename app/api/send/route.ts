import ContactEmailForm from "@/app/components/email-template";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email, subject, message } = await request.json();

        const { data } = await resend.emails.send({
            from: "JPDev Portfolio <onboarding@resend.dev>",
            to: ["jphillipdacallos@gmail.com", email],
            subject: subject,
            reply_to: email,
            react: React.createElement(ContactEmailForm, {
                message: message,
                senderEmail: email,
            }),
        });

        return NextResponse.json({ data });
    } catch (e) {
        return NextResponse.json({ status: "error", message: e });
    }
}
