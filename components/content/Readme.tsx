"use client";

import {
  Code2,
  Smartphone,
  Sparkles,
  FolderGit2,
  GraduationCap,
  Link2,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

type Props = {
  onNavigate?: (id: string, name: string) => void;
};

export default function Readme({ onNavigate }: Props) {
  return (
    <div className="max-w-3xl text-[13px] leading-relaxed text-gray-300 font-mono">
      <pre className="text-gray-500 mb-1 whitespace-pre-wrap">
{`/**
 * ─────────────────────────────────────────────
 *  @name      Om Choudhary
 *  @role      Full Stack Developer · AI Engineer
 *
 *  @contact   For collabs or opportunities, write to:
 *             omchy34@gmail.com
 * ─────────────────────────────────────────────
 */`}
      </pre>

      {/* Title */}
      <h1 className="text-2xl font-bold text-white mb-3"># Om Choudhary</h1>

      <p className="mb-4">
        I build full stack web &amp; mobile apps, and I&apos;m exploring AI engineering on the side.
      </p>

      <p className="mb-4 text-gray-400">
        Full Stack Developer &amp; AI Engineer. B.Tech CSE student @ MAKAUT. Currently based in
        Kolkata. I build things end-to-end — frontend, backend, database, deployment — and I&apos;m
        currently deep into Next.js, React Native, and Prisma-backed apps.
      </p>

      {/* Social row */}
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <SocialLink href="https://github.com/omchy34" icon={FaGithub} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/om-choudhary-46b635233" icon={FaLinkedin} label="LinkedIn" />
        <SocialLink href="mailto:omchy34@gmail.com" icon={Mail} label="Email" />
      </div>

      {/* Stat badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge icon={FolderGit2} text="3+ projects shipped" />
        <Badge icon={Smartphone} text="React Native" />
        <Badge icon={Code2} text="Next.js" />
        <Badge icon={Sparkles} text="AI/ML exploring" />
      </div>

      {/* What I do */}
      <SectionHeading icon={Code2} text="What I do" />
      <p className="mb-3">
        I&apos;m a <span className="text-white font-medium">web and app and AI engineer</span> — I
        design, build, and ship full stack products across web and mobile.
      </p>
      <ul className="mb-3 space-y-1.5 text-gray-400">
        <SkillLine icon={Code2} label="Web" desc="Next.js, React, Tailwind, Node.js/Express, PostgreSQL & Prisma" />
        <SkillLine icon={Smartphone} label="Mobile" desc="React Native (Expo Router) apps" />
        <SkillLine icon={Sparkles} label="AI" desc="Exploring AI engineering, integrating AI features into real products" />
      </ul>
      <p className="mb-6 text-gray-400">
        Current builds:{" "}
        <button
          onClick={() => onNavigate?.("proj-projects", "ProjectsFile.tsx")}
          className="text-blue-400 hover:underline"
        >
          motocart
        </button>{" "}
        — a Next.js + Prisma e-commerce app, and{" "}
        <button
          onClick={() => onNavigate?.("proj-projects", "ProjectsFile.tsx")}
          className="text-blue-400 hover:underline"
        >
          sadhana
        </button>{" "}
        — a React Native app with an admin panel in progress.
      </p>

      {/* Projects */}
      <SectionHeading icon={FolderGit2} text="Projects" />
      <p className="mb-3 text-gray-500 italic">
        Want to see the code? Open the file tree on the left, or use Ctrl/Cmd + P to jump around.
      </p>

      <div className="space-y-2 mb-6">
        <ProjectRow
          name="Nextcart"
          desc="Full stack e-commerce web app."
          tag="Next.js 16 + Prisma"
          onClick={() => onNavigate?.("proj-projects", "ProjectsFile.tsx")}
        />
        <ProjectRow
          name="Tution_mangement_app"
          desc="Mobile app built with Expo Router."
          tag="React Native"
          onClick={() => onNavigate?.("proj-projects", "ProjectsFile.tsx")}
        />
      </div>

      {/* Currently learning */}
      <SectionHeading icon={GraduationCap} text="Currently learning" />
      <p className="mb-6 text-gray-400">
        B.Tech CSE @ MAKAUT — currently working on enhancing my skills,
        alongside hands-on project work.
      </p>

      {/* Quick links */}
      <SectionHeading icon={Link2} text="Quick links" />
      <p className="mb-3 text-gray-500 italic">
        Open the file tree on the left, or use Ctrl/Cmd + P to cycle through sections.
      </p>

      <div className="space-y-2">
        <QuickLink
          title="Latest project"
          desc="Nextcart — full stack e-commerce."
          tag="projects"
          onClick={() => onNavigate?.("proj-projects", "ProjectsFile.tsx")}
        />
        <QuickLink
          title="Skills"
          desc="Full stack + mobile + AI exploring."
          tag="skills"
          onClick={() => onNavigate?.("skills-stack", "stack.json")}
        />
        <QuickLink
          title="Experience"
          desc="Slytherin, Byteminders, BinaryGroww."
          tag="experience"
          onClick={() => onNavigate?.("exprience-profile", "Experience.tsx")}
        />
        <QuickLink
          title="Contact"
          desc="Let's talk."
          tag="connect"
          onClick={() => onNavigate?.("connect-socials", "socials.ts")}
        />
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition-colors"
    >
      <Icon size={15} />
      <span>{label}</span>
    </a>
  );
}

function Badge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[11px] text-gray-300">
      <Icon size={12} className="text-blue-400" />
      {text}
    </span>
  );
}

function SectionHeading({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <h2 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
      <Icon size={16} className="text-blue-400" />
      {text}
    </h2>
  );
}

function SkillLine({
  icon: Icon,
  label,
  desc,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
}) {
  return (
    <li className="flex items-start gap-2">
      <Icon size={14} className="text-blue-400 mt-0.5 shrink-0" />
      <span>
        <span className="text-white font-medium">{label}</span> — {desc}
      </span>
    </li>
  );
}

function ProjectRow({
  name,
  desc,
  tag,
  onClick,
}: {
  name: string;
  desc: string;
  tag: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-start gap-3 border border-white/10 rounded-md p-3 bg-white/2 hover:bg-white/5 transition-colors w-full text-left"
    >
      <FolderGit2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-gray-400 text-[12px]">{desc}</p>
        <p className="text-gray-600 text-[11px] mt-1">{tag}</p>
      </div>
    </button>
  );
}

function QuickLink({
  title,
  desc,
  tag,
  onClick,
}: {
  title: string;
  desc: string;
  tag: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between border border-white/10 rounded-md p-3 bg-white/2 hover:bg-white/5 cursor-pointer transition-colors group w-full text-left"
    >
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-gray-400 text-[12px]">{desc}</p>
        <p className="text-gray-600 text-[11px] mt-1">{tag}</p>
      </div>
      <ArrowUpRight
        size={16}
        className="text-gray-600 group-hover:text-blue-400 transition-colors shrink-0"
      />
    </button>
  );
}