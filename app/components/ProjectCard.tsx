import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

type PropTypes = {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
    techStack: string[];
    stackNames: string[];
};

const ProjectCard = ({
    imgUrl,
    title,
    description,
    gitUrl,
    previewUrl,
    techStack,
    stackNames,
}: PropTypes) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-tl-xl relative group"
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link
                        href={gitUrl}
                        target="_blank"
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7Be] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:hover:text-white" />
                    </Link>
                    {previewUrl !== "/" ? (
                        <Link
                            href={previewUrl}
                            target="_blank"
                            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7Be] hover:border-white group/link"
                        >
                            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:hover:text-white" />
                        </Link>
                    ) : null}
                </div>
            </div>

            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
                <h5 className="font-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE] text-sm">{description}</p>

                <div className="mt-3">
                    <p className="text-slate-400 text-sm font-bold">
                        Technology Stack
                    </p>

                    <div className="flex flex-wrap gap-3 mt-3">
                        {techStack.map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt="Tech Stack Logo"
                                width={20}
                                height={20}
                            />
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 text-slate-400 mt-3">
                        {stackNames.map((stack, index) => (
                            <p key={index} className="text-sm">
                                {stack}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
