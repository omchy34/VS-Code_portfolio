import { FileText, Braces } from "lucide-react";
import { SiTypescript, SiJavascript, SiReact, SiGit } from "react-icons/si";

export function getFileIcon(fileName: string): { icon: React.ElementType; color: string } {
  if (fileName === ".gitignore") {
    return { icon: SiGit, color: "text-orange-500" };
  }

  const ext = fileName.split(".").pop();

  switch (ext) {
    case "tsx":
      return { icon: SiReact, color: "text-sky-400" };
    case "ts":
      return { icon: SiTypescript, color: "text-blue-500" };
    case "jsx":
      return { icon: SiReact, color: "text-sky-400" };
    case "js":
      return { icon: SiJavascript, color: "text-yellow-400" };
    case "json":
      return { icon: Braces, color: "text-yellow-500" };
    case "md":
      return { icon: FileText, color: "text-blue-300" };
    case "yml":
    case "yaml":
      return { icon: FileText, color: "text-red-400" };
    case "txt":
      return { icon: FileText, color: "text-gray-400" };
    default:
      return { icon: FileText, color: "text-gray-400" };
  }
}