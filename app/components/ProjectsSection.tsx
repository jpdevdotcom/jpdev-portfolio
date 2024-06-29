"use client";

import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "UEP Warehouse Management and Inventory System",
        description:
            "UEP WMIS is my capstone project wherein I single-handedly created the whole system. From the creation of WEB API using WEB API .NET Core into its frontend using Blazor Server.",
        image: "/images/projects/uep-wmis.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jpdevdotcom/UEP-Warehouse-Management-and-Inventory-System",
        previewUrl: "/",
        techStack: [
            "/images/tech-stack-logo/html.png",
            "/images/tech-stack-logo/css.png",
            "/images/tech-stack-logo/js.png",
            "/images/tech-stack-logo/csharp.png",
            "/images/tech-stack-logo/blazor.png",
            "/images/tech-stack-logo/dotnet.png",
            "/images/tech-stack-logo/ms-sql.png",
            "/images/tech-stack-logo/bootstrap.png",
            "/images/tech-stack-logo/snycfusion.png",
            "/images/tech-stack-logo/bold-reports.png",
        ],
        stackNames: [
            "HTML",
            "CSS",
            "JavaScript",
            "C#",
            "Blazor Server",
            "Microsoft .NET",
            "MS SQL Server",
            "Bootstrap",
            "Syncfusion Framework",
            "Bold Reports",
        ],
    },
    {
        id: 2,
        title: "UEP WMIS - API",
        description:
            "This was the API I created from the scratch for my capstone project. This served as my gateway to access the data of the other capstone group's database.",
        image: "/images/projects/wmis-api.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jpdevdotcom/wmis-api",
        previewUrl: "/",
        techStack: [
            "/images/tech-stack-logo/csharp.png",
            "/images/tech-stack-logo/dotnet-core.png",
            "/images/tech-stack-logo/rest-api.png",
            "/images/tech-stack-logo/dapper.png",
        ],
        stackNames: ["C#", "WEB API .NET CORE", "REST API", "Dapper"],
    },
    {
        id: 6,
        title: "Fish Information System",
        description:
            "FIS (Fish Information System) is a web application designed for my college student clients. It contains a database of various fish species and can classify fish by analyzing uploaded images.",
        image: "/images/projects/fish-info.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jpdevdotcom/fish-information-system",
        previewUrl: "https://fish-information.netlify.app/",
        techStack: [
            "/images/tech-stack-logo/html.png",
            "/images/tech-stack-logo/css.png",
            "/images/tech-stack-logo/js.png",
            "/images/tech-stack-logo/node.png",
            "/images/tech-stack-logo/react.png",
            "/images/tech-stack-logo/express.png",
            "/images/tech-stack-logo/mysql.png",
            "/images/tech-stack-logo/bootstrap.png",
            "/images/tech-stack-logo/netlify.png",
            "/images/tech-stack-logo/railway.png",
        ],
        stackNames: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "React.js",
            "Express.js",
            "MySQL",
            "Bootstrap",
            "Netlify",
            "Railway",
        ],
    },

    {
        id: 7,
        title: "Fish Information System - API",
        description:
            "A REST API created for Fish Information System. This API can be accessed anytime by anyone.",
        image: "/images/projects/wmis-api.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jpdevdotcom/fish-information-api",
        previewUrl:
            "https://fish-information-system-api-production.up.railway.app/",
        techStack: [
            "/images/tech-stack-logo/node.png",
            "/images/tech-stack-logo/express.png",
            "/images/tech-stack-logo/mysql.png",
            "/images/tech-stack-logo/railway.png",
        ],
        stackNames: ["Node.js", "Express.js", "MySQL", "Railway"],
    },
    {
        id: 3,
        title: "UEP ID Production Management System",
        description:
            "A system for managing all the walk-in university students and faculties for submitting a requirements for the creation of their identification cards.",
        image: "/images/projects/filler.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jpdevdotcom/wmis-api",
        previewUrl: "/",
        techStack: [
            "/images/tech-stack-logo/csharp.png",
            "/images/tech-stack-logo/dotnet-core.png",
            "/images/tech-stack-logo/rest-api.png",
            "/images/tech-stack-logo/dapper.png",
        ],
        stackNames: ["C#", "WEB API .NET CORE", "REST API", "Dapper"],
    },
    {
        id: 8,
        title: "JPDictionary",
        description:
            "An open-source dictionary that provides various features of typical dictionary. I used a third-party API to provide the needed requirements upon building this app.",
        image: "/images/projects/jpdictionary.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/jpdevdotcom/jpdictionary",
        previewUrl:
            "https://jpdictionary-cillxmgsl-jpdevdotcoms-projects.vercel.app/",
        techStack: [
            "/images/tech-stack-logo/typescript.png",
            "/images/tech-stack-logo/nextjs.png",
            "/images/tech-stack-logo/tailwind.png",
            "/images/tech-stack-logo/shadcn.png",
            "/images/tech-stack-logo/vercel.png",
        ],
        stackNames: [
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Shadcn UI",
            "Dictionary API",
            "Vercel",
        ],
    },
    {
        id: 4,
        title: "Payroll Management System",
        description:
            "This was our final project wherein I created a desktop application using C# Windows Forms.",
        image: "/images/projects/filler.jpg",
        tag: ["All", "Desktop"],
        gitUrl: "https://github.com/jpdevdotcom/Biometric-Attendance-and-Payroll-Management-System",
        previewUrl: "/",
        techStack: [
            "/images/tech-stack-logo/csharp.png",
            "/images/tech-stack-logo/bunifu.png",
            "/images/tech-stack-logo/ms-sql.png",
        ],
        stackNames: ["C#", "Bunifu Framework", "MS SQL Server"],
    },
    {
        id: 5,
        title: "Mobile Student Grade View Application",
        description:
            "Created a mobile application exclusively for University of Eastern Philippines (UEP), inteded for viewing students' grades.",
        image: "/images/projects/mobile-app.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/jpdevdotcom/mobile-student-grade-view-application",
        previewUrl: "/",
        techStack: [
            "/images/tech-stack-logo/java.png",
            "/images/tech-stack-logo/rest-api.png",
            "/images/tech-stack-logo/android-studio.png",
        ],
        stackNames: ["Java", "REST API", "Android Studio"],
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: any) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <div>
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-3">
                    My Projects
                </h2>

                <p className="text-slate-400 text-center">
                    I developed most of these projects during my college days.{" "}
                    <br />
                    Spending my spare time creating various applications.
                </p>

                <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag
                        onClick={handleTagChange}
                        name="All"
                        isSelected={tag === "All"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Web"
                        isSelected={tag === "Web"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Mobile"
                        isSelected={tag === "Mobile"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Desktop"
                        isSelected={tag === "Desktop"}
                    />
                </div>

                <ul ref={ref} className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                techStack={project.techStack}
                                stackNames={project.stackNames}
                            />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectsSection;
