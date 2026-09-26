export function getFileIconColor(fileName: string): string {
  if (fileName.startsWith(".")) return "bg-red-500"; // dotfiles like .gitignore

  const ext = fileName.split(".").pop();
  switch (ext) {
    case "md":
      return "bg-blue-400";
    case "json":
      return "bg-lime-500";     // olive/yellow-green, like profile.json / products.json
    case "yml":
      return "bg-red-500";
    case "ts":
    case "tsx":
      return "bg-blue-500";
    case "txt":
      return "bg-cyan-400";
    default:
      return "bg-gray-400";
  }
}