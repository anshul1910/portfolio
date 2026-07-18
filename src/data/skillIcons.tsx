import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiVuedotjs,
  SiNuxt,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiZod,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiDart,
  SiGithub,
  SiPostman,
  SiAndroidstudio,
  SiFigma,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Radio, Webhook, Boxes, RefreshCw, Code2 } from "lucide-react";

export const SKILL_ICONS: Record<string, IconType> = {
  JavaScript: SiJavascript,
  "HTML & CSS": SiHtml5,
  React: SiReact,
  TypeScript: SiTypescript,
  "Vue.js": SiVuedotjs,
  "Nuxt.js": SiNuxt,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  Vite: SiVite,
  Zod: SiZod,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Socket.IO": SiSocketdotio,
  "JWT / OAuth2": SiJsonwebtokens,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Flutter: SiFlutter,
  Dart: SiDart,
  "VS Code": VscVscode,
  "Git & GitHub": SiGithub,
  Postman: SiPostman,
  "Android Studio": SiAndroidstudio,
  Figma: SiFigma,
  Python: SiPython,
  "C++": SiCplusplus,
};

export const FALLBACK_ICONS: Record<string, IconType> = {
  WebSocket: Radio as IconType,
  "REST APIs": Webhook as IconType,
  Provider: Boxes as IconType,
  "Agile/Scrum": RefreshCw as IconType,
  C: Code2 as IconType,
};

export function getSkillIcon(name: string): IconType {
  return SKILL_ICONS[name] ?? FALLBACK_ICONS[name] ?? Code2;
}
