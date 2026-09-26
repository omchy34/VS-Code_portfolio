type Props = {
  activeFileName?: string | null;
};

export default function StatusBar({ activeFileName }: Props) {
  return (
    <div className="flex items-center justify-between h-6 bg-[#007acc] px-3 text-[11px] text-white select-none">
      <div className="flex items-center gap-4">
        <span>⑂ main</span>
        <span>↻ ↓0 ↑0</span>
        <span>Full Stack Developer</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>{activeFileName?.split(".").pop()?.toUpperCase() ?? "Plain Text"}</span>
      </div>
    </div>
  );
}