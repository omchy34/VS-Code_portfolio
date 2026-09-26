"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Byteminders Edu Tech Pvt Ltd",
    role: "Full Stack Developer",
    duration: "July 2024 — Dec 2025",
    location: "Remote / On-site",
    points: [
      "Built SaaS applications for multiple clients, handling both frontend and backend.",
      "Developed a tours and travel booking website for a client.",
      "Worked across the full stack — API design, database schema, and UI implementation.",
    ],
  },
  {
    company: "BinaryGroww",
    role: "Full Stack Developer (Next.js)",
    duration: "May 2026 — Present",
    location: "Remote / On-site",
    points: [
      "Built a tuition management system in Next.js.",
      "Built a clinic management system in Next.js.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="font-mono text-[13px] leading-relaxed">
      <div className="text-gray-500 italic mb-5">// 2 companies, building along the way.</div>

      <div className="relative pl-6">
        {/* Vertical timeline line */}
        <div className="absolute left-1.75 top-2 bottom-2 w-px bg-white/10" />

        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.company} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-blue-400 border-2 border-[#1e1e1e]" />

              <div className="border border-white/10 rounded-md p-4 bg-white/2 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={14} className="text-blue-400" />
                  <span className="text-white font-semibold">{exp.company}</span>
                </div>

                <p className="text-gray-300 mb-2">{exp.role}</p>

                <div className="flex flex-wrap items-center gap-4 text-gray-500 text-[11px] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-1 text-gray-400 text-[12px]">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}