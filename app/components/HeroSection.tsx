"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-center sm:text-left"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Jan Phillip",
                                1000,
                                "Web Developer",
                                1000,
                                "Layout Artist",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-l">
                        Hello! I&apos;m Jan Phillip M. Dacallos, a passionate
                        and dedicated software engineer specializing in web
                        development. With a fresh perspective and a strong
                        foundation in modern technologies, I am excited to craft
                        innovative and
                        <br />
                        user-friendly web solutions. Let&apos;s create something
                        amazing together!
                    </p>

                    <div className="mb-3 lg:mb-0">
                        {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-700 via-orange-500 to-yellow-500 bg-white hover:bg-slate-200 text-white">
                            Hire Me
                        </button> */}
                        <button className="mr-7 mb-5 lg:mb-0 px-[2px] py-[2px] w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-700 via-orange-500 to-yellow-500 hover:bg-slate-800 text-white">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-2">
                                Hire Me
                            </span>
                        </button>

                        <button>
                            <Link
                                href="/dacallos-jan-phillip-resume.pdf"
                                download={true}
                                target="_blank"
                                className="text-white flex items-center gap-2 hover:text-orange-500 transition-all"
                            >
                                <ArrowDownTrayIcon width={20} height={20} />{" "}
                                Download CV
                            </Link>
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-5 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.webp"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
