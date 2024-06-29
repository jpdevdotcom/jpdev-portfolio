"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
    () => {
        return import("react-animated-numbers");
    },
    { ssr: false }
);

const achievementsList = [
    {
        metric: "Years old",
        value: "21",
        postfix: "",
    },
    {
        metric: "Projects",
        value: "12",
        postfix: "+",
    },
    {
        metric: "Years",
        value: "2",
        postfix: "+",
    },
    {
        metric: "College Awards",
        value: "5",
        postfix: "+",
    },
];

const AchievementsSection = () => {
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between"
            >
                {achievementsList.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                        >
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(
                                        achievement.value
                                    )}
                                    locale="en-US"
                                    className="text-white text-4xl font-bold"
                                    transitions={(index) => ({
                                        type: "spring",
                                        duration: index + 1.5,
                                    })}
                                />
                                {achievement.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">
                                {achievement.metric}
                            </p>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default AchievementsSection;
