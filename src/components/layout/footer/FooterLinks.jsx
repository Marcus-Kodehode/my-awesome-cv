import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

export default function FooterLinks() {
  const links = [
    {
      href: "mailto:marcus29sfj@gmail.com",
      label: "E-post",
      icon: <FaEnvelope />,
      hover: "hover:text-yellow-400",
    },
    {
      href: "https://github.com/Marcus-Kodehode",
      label: "GitHub",
      icon: <FaGithub />,
      hover: "hover:text-gray-300",
    },
    {
      href: "https://www.linkedin.com/in/marcus-b%C3%B8rresen-353870275/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      hover: "hover:text-blue-400",
    },
    {
      href: "https://www.instagram.com/marcusboerresen/",
      label: "Instagram",
      icon: <FaInstagram />,
      hover: "hover:text-pink-400",
    },
    {
      href: "https://vercel.com/marcus-boerresens-projects",
      label: "Vercel",
      icon: <SiVercel />,
      hover: "hover:text-white",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {links.map(({ href, label, icon, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative flex items-center gap-1 text-sm text-secondary transition-colors duration-300 ${hover}
            after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-current after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:transform`}
        >
          {icon}
          {label}
        </a>
      ))}
    </div>
  );
}
