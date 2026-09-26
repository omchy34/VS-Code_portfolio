"use client";

import {
  Code2,
  Server,
  Database,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Search,
  KeyRound,
  ImageIcon,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiLangchain,
  SiHuggingface,
} from "react-icons/si";

type Skill = { name: string; icon: React.ElementType };
type Category = {
  label: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    label: "frontend",
    icon: Code2,
    color: "text-sky-400",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "backend",
    icon: Server,
    color: "text-green-400",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    label: "database",
    icon: Database,
    color: "text-orange-400",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    label: "ai_ml",
    icon: Sparkles,
    color: "text-fuchsia-400",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "Hugging Face", icon: SiHuggingface },
    ],
  },
  {
    label: "mobile",
    icon: Smartphone,
    color: "text-cyan-400",
    skills: [{ name: "React Native", icon: SiReact }],
  },
  {
    label: "auth_and_tools",
    icon: ShieldCheck,
    color: "text-yellow-400",
    skills: [
      { name: "Clerk", icon: KeyRound },
    ],
  },
  {
    label: "other",
    icon: Search,
    color: "text-gray-400",
    skills: [{ name: "SEO", icon: Search }],
  },
];

export default function SkillsFile() {
  return (
    <div className="font-mono text-[13px] leading-relaxed text-gray-200">
      <div className="text-gray-400 mb-2">{"{"}</div>

      {categories.map((cat, i) => (
        <div key={cat.label} className="pl-4 mb-3">
          <div className="flex items-center gap-2 mb-1.5">
            <cat.icon size={14} className={cat.color} />
            <span className="text-sky-400">{cat.label}</span>
            <span className="text-gray-400">: [</span>
          </div>

          <div className="pl-6 flex flex-wrap gap-2 mb-1">
            {cat.skills.map((skill) => (
              <span
                key={skill.name}
                className={`flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[12px] ${cat.color}`}
              >
                <skill.icon size={13} />
                {skill.name}
              </span>
            ))}
          </div>

          <div className="text-gray-400 pl-4">
            ]{i < categories.length - 1 ? "," : ""}
          </div>
        </div>
      ))}

      <div className="text-gray-400">{"}"}</div>
    </div>
  );
}