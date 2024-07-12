import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className=" flex justify-center border border-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex items-center justify-between">
                <Image
                    src="/images/JPD.png"
                    alt="JPD Logo"
                    width={60}
                    height={60}
                />
                <p className="text-slate-700">All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
