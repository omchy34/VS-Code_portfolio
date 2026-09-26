"use client";

import { Files, Search, GitBranch, Play, LayoutGrid, User, Settings } from "lucide-react";

export default function ActivityBar() {
  const topIcons = [
    { icon: Files, label: "Explorer", active: true },
    { icon: Search, label: "Search" },
    { icon: GitBranch, label: "Source Control" },
    { icon: Play, label: "Run and Debug" },
    { icon: LayoutGrid, label: "Extensions" },
  ];

  return (
    <div className="w-12 shrink-0 bg-[#333333] flex flex-col items-center justify-between h-full">
      <div className="flex flex-col">
        {topIcons.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            title={label}
            className="relative flex items-center justify-center w-12 h-12"
          >
            {active && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 bg-white" />
            )}
            <Icon
              size={22}
              strokeWidth={1.5}
              className={active ? "text-white" : "text-gray-500 hover:text-gray-300"}
            />
          </button>
        ))}
      </div>

      <div className="flex flex-col mb-2">
        <button title="Account" className="flex items-center justify-center w-12 h-12">
          <User size={22} strokeWidth={1.5} className="text-gray-500 hover:text-gray-300" />
        </button>
        <button title="Settings" className="flex items-center justify-center w-12 h-12">
          <Settings size={22} strokeWidth={1.5} className="text-gray-500 hover:text-gray-300" />
        </button>
      </div>
    </div>
  );
}