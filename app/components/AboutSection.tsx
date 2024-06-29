"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc grid grid-cols-2 pl-2 lg:grid lg:grid-cols-3">
                <li>JavaScript</li>
                <li>Java</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Java Springboot</li>
                <li>Zustand</li>
                <li>React</li>
                <li>C#</li>
                <li>Prisma ORM</li>
                <li>Next.js</li>
                <li>Express</li>
                <li>MySQL</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>University of Eastern Philippines, UEP</li>
                <li>Global School for Technological Studies, GSTS</li>
                <li>Udemy</li>
                <li>Simplilearn</li>
                <li>DICT Modern Academics Convergence Hub</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Advance React Crash Course</li>
                <li>Getting Started with NodeJS</li>
                <li>Programming for Intermediate Users Using Python</li>
            </ul>
        ),
    },
    {
        title: "Awards",
        id: "academic_achievements",
        content: (
            <ul className="list-disc pl-2">
                <li>Cum Laude {`(GWA: 1.52%)`}</li>
                <li>Academic Excellence Awardee</li>
                <li>Dean&apos;s Lister</li>
                <li>Best Computer Programmer</li>
                <li>Best Mobile Developer</li>
                <li>Journalism Awardee {`The Pillar's Layout Artist`}</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about-me-image.jpeg"
                    alt="about-me-image"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-sm">
                        Hello! I&apos;m Jan Phillip M. Dacallos, a web developer
                        with a fresh perspective and a keen eye for design. I
                        recently graduated with a Bachelor of Science in
                        Information Technology from the University of Eastern
                        Philippines.
                        <br />
                        <br />
                        During my studies, I&apos;ve honed my skills in HTML,
                        CSS, JavaScript, TypeScript, Node.js, Java, and C#,
                        developing REST APIs. I&apos;m experienced with
                        frameworks like React, Next.js, and Java Springboot, and
                        I&apos;ve worked with databases including Microsoft SQL
                        Server, SQLite, and MySQL. My projects prioritize
                        responsive design for seamless cross-device experiences.
                        <br />
                        <br />I specialize in crafting intuitive user
                        experiences and functional designs for dynamic websites
                        and web applications. Beyond coding, I explore tech
                        trends, contribute to open-source projects, and enjoy
                        outdoor activities, always eager for new challenges and
                        innovative collaborations.
                    </p>

                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() =>
                                handleTabChange("academic_achievements")
                            }
                            active={tab === "academic_achievements"}
                        >
                            Awards
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            Certifications
                        </TabButton>
                    </div>

                    <div>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
