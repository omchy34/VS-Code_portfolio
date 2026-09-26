import { Menu } from "lucide-react";

type Props = {
  onMenuClick?: () => void;
};

export default function TitleBar({ onMenuClick }: Props) {
  const menuItems = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

  return (
    <div className="flex items-center h-9 bg-[#3c3c3c] px-3 text-xs text-gray-300 select-none gap-4">
      {/* Traffic lights */}
      <div className="flex gap-1.5 shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Hamburger — mobile only */}
      <button onClick={onMenuClick} className="md:hidden text-gray-300 shrink-0">
        <Menu size={18} />
      </button>

      {/* Menu — desktop only */}
      <div className="hidden md:flex gap-4 shrink-0">
        {menuItems.map((item) => (
          <span key={item} className="hover:text-white cursor-default">
            {item}
          </span>
        ))}
      </div>

      {/* Search / command box */}
      <div className="flex-1 flex justify-center">
        <div className="bg-[#252526] text-gray-400 text-[11px] px-3 py-1 rounded w-40 md:w-64 text-center truncate">
          om.choudhary
        </div>
      </div>

      {/* Right icons — desktop only */}
      <div className="hidden md:flex gap-3 text-gray-400 shrink-0">
        <span>▤</span>
        <span>▥</span>
        <span>▦</span>
      </div>
    </div>
  );
}