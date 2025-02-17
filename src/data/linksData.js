import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export const usefulLinks = [
    {
        href: "https://github.com/elaheesk?tab=repositories",
        label: "Github",
    },
    {
        href: "https://www.linkedin.com/in/elahe-eskandari/",
        label: "LinkedIn",
    },
    {
        isInternal: true,
        to: "/details",
        label: "About me",
    },
];

export const socialLinks = [
    {
        href: "https://www.linkedin.com/in/elahe-eskandari/",
        icon: <FaLinkedin className="inline text-[#505476] size-6" />,
    },
    {
        href: "mailto:elahe199108@gmail.com",
        icon: <MdEmail className="inline text-[#505476] size-6" />,
    },
    {
        href: "https://github.com/elaheesk?tab=repositories",
        icon: <FaGithub className="inline text-[#505476] size-6" />,
    },
];