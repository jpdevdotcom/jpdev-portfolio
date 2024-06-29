import React from "react";

type PropType = {
    name?: string;
    onClick: (newTag: any) => void;
    isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected }: PropType) => {
    const buttonStyles = isSelected
        ? "text-white bg-orange-500 border-orange-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white";

    return (
        <button
            onClick={() => onClick(name)}
            className={`${buttonStyles}  rounded-full border-2 border-slate-600 px-6 py-2 text-sm cursor-pointer`}
        >
            {name}
        </button>
    );
};

export default ProjectTag;
