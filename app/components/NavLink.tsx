import Link from "next/link";

type PropsType = {
    href: string;
    title: string;
};

const NavLink = ({ href, title }: PropsType) => {
    return (
        <Link
            href={href}
            style={{ fontSize: "1.1em" }}
            className="block pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
            {title}
        </Link>
    );
};

export default NavLink;
