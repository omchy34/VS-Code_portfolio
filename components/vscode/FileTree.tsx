"use client";

import { TreeNode } from "@/lib/types";
import { useState } from "react";
import { ChevronRight, Folder } from "lucide-react";
import { getFileIcon } from "@/lib/fileIcons";

type Props = {
  nodes: TreeNode[];
  onFileClick: (id: string, name: string) => void;
  activeId?: string | null;
  depth?: number;
};

export default function FileTree({ nodes, onFileClick, activeId, depth = 0 }: Props) {
  return (
    <ul style={{ paddingLeft: depth === 0 ? 0 : 14 }}>
      {nodes.map((node) => (
        <TreeItem key={node.name + depth} node={node} onFileClick={onFileClick} activeId={activeId} depth={depth} />
      ))}
    </ul>
  );
}

type TreeItemProps = {
  node: TreeNode;
  onFileClick: (id: string, name: string) => void;
  activeId?: string | null;
  depth: number;
};

function TreeItem({ node, onFileClick, activeId, depth }: TreeItemProps) {
  const [open, setOpen] = useState(node.type === "folder" ? node.defaultOpen ?? false : false);

  if (node.type === "folder") {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 w-full text-left text-[13px] text-gray-300 hover:bg-white/5 px-1 py-0.75 rounded"
        >
          <ChevronRight
            size={14}
            strokeWidth={2}
            className={`shrink-0 text-gray-400 transition-transform duration-100 ${open ? "rotate-90" : ""}`}
          />
          <Folder size={14} strokeWidth={1.5} className="shrink-0 text-yellow-500 fill-yellow-500/20" />
          <span>{node.name}</span>
        </button>
        {open && (
          <FileTree nodes={node.children} onFileClick={onFileClick} activeId={activeId} depth={depth + 1} />
        )}
      </li>
    );
  }

  const isActive = activeId === node.id;
  const isRootFile = depth === 0;
  const { icon: Icon, color } = getFileIcon(node.name);

  return (
    <li>
      <button
        onClick={() => onFileClick(node.id, node.name)}
        className={`flex items-center gap-2 w-full text-left text-[13px] px-1 py-0.75 rounded ${
          isRootFile ? "pl-5.5" : "pl-4.5"
        } ${isActive ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5"}`}
      >
        <Icon size={14} className={`shrink-0 ${color}`} />
        <span>{node.name}</span>
      </button>
    </li>
  );
}