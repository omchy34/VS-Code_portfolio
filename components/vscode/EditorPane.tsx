"use client";

import { fileContents } from "@/data/fileContents";
import Readme from "@/components/content/Readme";
import ProfileJson from "@/components/content/ProfileJson";
import SkillsFile from "@/components/content/SkillsFile";
import ConnectSocials from "@/components/content/ContactFile";
import ProjectsFile from "@/components/content/ProjectsFile";
import Experience from "@/components/content/Exprience";

const fileComponents: Record<string, React.ComponentType<{ onNavigate?: (id: string, name: string) => void }>> = {
  "about-readme": Readme,
  "about-profile": ProfileJson,
  "skills-stack": SkillsFile,
  "connect-socials": ConnectSocials,
  "proj-projects": ProjectsFile,
  "exprience-profile": Experience,
};

type Props = {
  activeId: string | null;
  onNavigate?: (id: string, name: string) => void;
};

export default function EditorPane({ activeId, onNavigate }: Props) {
  if (!activeId) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
        No file open — select one from the Explorer
      </div>
    );
  }

  const CustomComponent = fileComponents[activeId];
  if (CustomComponent) {
    return (
      <div className="flex-1 overflow-auto bg-[#1e1e1e] p-6">
        <CustomComponent onNavigate={onNavigate} />
      </div>
    );
  }

  const content = fileContents[activeId] ?? "// content not found";
  return (
    <div className="flex-1 overflow-auto bg-[#1e1e1e] p-4 font-mono text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
      {content}
    </div>
  );
}