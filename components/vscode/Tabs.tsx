"use client";

import { TabItem } from "@/lib/types";
import { getFileIcon } from "@/lib/fileIcons";
import { getFileParentFolder } from "@/data/fileSystem";

type Props = {
  tabs: TabItem[];
  activeId: string | null;
  onTabClick: (id: string) => void;
  onTabClose: (id: string) => void;
};

export default function Tabs({ tabs, activeId, onTabClick, onTabClose }: Props) {
  const activeTab = tabs.find((t) => t.id === activeId);
  const parentFolder = activeTab ? getFileParentFolder(activeTab.id) : null;

  return (
    <div>
      <div className="flex bg-[#1e1e1e] border-b border-white/10 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          const { icon: Icon, color } = getFileIcon(tab.name);
          return (
            <div
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 text-sm border-r border-white/10 cursor-pointer whitespace-nowrap ${
                isActive ? "bg-[#252526] text-white border-t-2 border-t-blue-500" : "text-gray-400 hover:bg-white/5"
              }`}
            >
              <Icon size={14} className={color} />
              <span>{tab.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(tab.id);
                }}
                className="ml-1 text-gray-500 hover:text-white"
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      {activeTab && (
        <div className="px-3 py-1 text-xs text-gray-400 bg-[#1e1e1e] border-b border-white/5">
          OM-CHOUDHARY <span className="mx-1">›</span> {parentFolder ?? "."} <span className="mx-1">›</span>{" "}
          {activeTab.name}
        </div>
      )}
    </div>
  );
}