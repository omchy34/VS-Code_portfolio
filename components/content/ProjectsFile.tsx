"use client";

import { FolderGit2, ExternalLink } from "lucide-react";
import { SiNextdotjs, SiReact, SiPrisma, SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

type Project = {
  name: string;
  description: string;
  stack: { label: string; icon: React.ElementType }[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    name: "Temple management",
    description: "Temple management platform (Dekuli Mandir) for donations, event listings, and devotee information.",
    stack: [{ label: "Next.js", icon: SiNextdotjs }],
    liveUrl: "Dekulimandir.com",
    githubUrl: "https://github.com/omchy34/Dekuli-mandir.git",
  },
  {
    name: "Nextcart",
    description: "Full stack e-commerce web app with cart, product catalog, and Redux-managed state.",
    stack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Prisma", icon: SiPrisma },
      { label: "PostgreSQL", icon: SiPostgresql },
    ],
    liveUrl: "next-cart-refing-next-js.vercel.app",
    githubUrl: "https://github.com/omchy34/next-cart-refing-next--js.git",
  },
  {
    name: "Clinic Website",
    description: "Clinic website for patient appointment booking, doctor listings, and health service information.",
    stack: [{ label: "Next.js", icon: SiNextdotjs }],
    liveUrl: "https://omchy34-clinic.vercel.app/",
    githubUrl: "https://github.com/omchy34/clinic-website.git",
  },
  {
    name: "Tution website",
    description: "Tuition center website (Deeksha Classes) showcasing courses, batch details, and enrollment enquiries.",
    stack: [{ label: "Next.js", icon: SiNextdotjs }],
    liveUrl: "deeksha-classes.vercel.app",
    githubUrl: "https://github.com/omchy34/Deeksha-classes.git",
  },
  {
    name: "Tution-management-app",
    description: "React Native mobile app for managing tuition classes, students, and schedules, with an admin panel for full control.",
    stack: [{ label: "React Native", icon: SiReact }],
    liveUrl: "#",
    githubUrl: "https://github.com/omchy34",
  },
];

export default function ProjectsFile() {
  return (
    <div className="font-mono text-[13px] leading-relaxed">
      <div className="text-gray-500 italic mb-4">// 5 projects, shipped and in progress.</div>

      <div className="grid gap-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="border border-white/10 rounded-md p-4 bg-white/2 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <FolderGit2 size={15} className="text-blue-400" />
                <span className="text-white font-semibold">{p.name}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <FaGithub size={15} />
                  </a>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-400 text-[12px] mb-2">{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[11px] text-gray-300"
                >
                  <s.icon size={11} />
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}