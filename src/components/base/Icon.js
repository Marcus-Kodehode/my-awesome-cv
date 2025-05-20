"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiVercel,
  SiCssmodules,
  SiGithub,
} from "react-icons/si";

// Kartlegg navn til komponent + offisiell farge
const ICON_MAP = {
  html5:     { comp: SiHtml5,     color: "#E44D26" },
  css:       { comp: SiCss3,      color: "#1572B6" },
  javascript:{ comp: SiJavascript,color: "#F7DF1E" },
  react:     { comp: SiReact,     color: "#61DAFB" },
  tailwindcss:{comp: SiTailwindcss,color: "#06B6D4" },
  vite:      { comp: SiVite,      color: "#646CFF" },
  nextdotjs: { comp: SiNextdotjs, color: "#000000" },
  vercel:    { comp: SiVercel,    color: "#000000" },
  cssmodules:{ comp: SiCssmodules,color: "#E5008C" },
  github:    { comp: SiGithub,    color: "#181717" },
};

export default function Icon({ name, size = 48 }) {
  const key = name.toLowerCase();
  const entry = ICON_MAP[key];
  if (!entry) return null;
  const { comp: Component, color } = entry;
  return <Component size={size} color={color} />;
}
