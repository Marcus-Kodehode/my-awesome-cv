import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiVercel } from "react-icons/si";


export default function FooterLinks() {
  const links = [
    {
      href: "mailto:marcus29sfj@gmail.com",
      label: "E-post",
      icon: <FaEnvelope />,
    },
    {
      href: "https://github.com/Marcus-Kodehode",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/marcus-b%C3%B8rresen-353870275/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.instagram.com/marcusboerresen/",
      label: "Instagram",
      icon: <FaInstagram />,
    },
    {
      href: "https://vercel.com/marcus-boerresens-projects",
      label: "Vercel",
      icon: <SiVercel />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {links.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-1 text-sm text-black hover:text-yellow-900 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-yellow-700 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:transform"
        >
          {icon}
          {label}
        </a>
      ))}
    </div>
  );
}
