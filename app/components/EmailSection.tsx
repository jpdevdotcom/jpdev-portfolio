"use client";

import React, { useState } from "react";
import GithubIcon from "@/public/images/socials/github.png";
import FacebookIcon from "@/public/images/socials/facebook.png";
import LinkedInIcon from "@/public/images/socials/linkedin.png";
import Link from "next/link";
import Image from "next/image";
import { NextResponse } from "next/server";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsSending(true);

        const formdata = new FormData(e.target as HTMLFormElement);

        const data = {
            email: formdata.get("email"),
            subject: formdata.get("subject"),
            message: formdata.get("message"),
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(data),
            });

            console.log(data);

            if (response.status === 200) {
                setEmailSubmitted(true);
            }
        } catch (e) {
            return NextResponse.json({ e });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

            <div>
                <h5 className="text-xl font-bold text-orange-400 my-2">
                    Let&apos;s Connect
                </h5>

                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox
                    is always open. Whether you have a question or just want to
                    say hi, I&apos;ll try my best to get back to you!
                </p>

                <div className="socials flex flex-row gap-2">
                    <Link href="/">
                        <Image src={GithubIcon} width={25} alt="Github Icon" />
                    </Link>
                    <Link href="/">
                        <Image
                            src={LinkedInIcon}
                            width={25}
                            alt="LinkedIn Icon"
                        />
                    </Link>
                    <Link
                        href="https://www.facebook.com/Jan.dacallos"
                        target="_blank"
                    >
                        <Image
                            src={FacebookIcon}
                            width={25}
                            alt="Facebook Icon"
                        />
                    </Link>
                </div>
            </div>

            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Enter your email..."
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Enter subject..."
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>

                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>

                    {emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email sent successfully!
                        </p>
                    )}

                    <div className={!isSending ? "hidden" : ""}>
                        {isSending && (
                            <p className="text-white text-sm mt-2">
                                Sending email...
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
