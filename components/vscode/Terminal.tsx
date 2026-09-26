"use client";

import { useEffect, useRef, useState } from "react";
import { terminalScript } from "@/data/terminalScript";
import { ChevronRight, Folder, ExternalLink, GitBranch } from "lucide-react";

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleCount >= terminalScript.length) return;
    const line = terminalScript[visibleCount];
    const delay = line.type === "command" ? 550 : 300;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleCount]);

  return (
    <div className="flex flex-col h-56 bg-[#1e1e1e] border-t border-white/10">
      {/* Panel tab bar */}
      <div className="flex items-center px-3 pt-2 border-b border-white/10 shrink-0">
        <div className="flex gap-5 text-[11px] font-semibold tracking-wide text-gray-400">
          <span className="hover:text-white cursor-default">PROBLEMS</span>
          <span className="hover:text-white cursor-default">OUTPUT</span>
          <span className="hover:text-white cursor-default">DEBUG CONSOLE</span>
          <span className="text-white border-b-2 border-blue-500 pb-2 cursor-default">TERMINAL</span>
          <span className="hover:text-white cursor-default">PORTS</span>
        </div>
      </div>

      {/* Body */}
      <div ref={scrollRef} className="flex-1 overflow-auto px-4 py-3 font-mono text-[13px] leading-relaxed">
        {terminalScript.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="mb-1">
            {line.type === "command" && (
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-green-400 shrink-0" />
                <span className="text-cyan-400">~/om.choudhary</span>
                <GitBranch size={12} className="text-gray-500 shrink-0" />
                <span className="text-yellow-400">main</span>
                <span className="text-gray-200">{line.text}</span>
              </div>
            )}

            {line.type === "output" && (
              <div className="text-gray-400 pl-6">{line.text}</div>
            )}

            {line.type === "folderLinks" && (
              <div className="flex flex-wrap items-center gap-x-2 pl-6">
                <Folder size={13} className="text-yellow-500 shrink-0" strokeWidth={1.5} />
                <span className="text-gray-300 w-20 inline-block">{line.folder}</span>
                {line.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    {link.label}
                    <ExternalLink size={11} />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center gap-2 mt-1">
          <ChevronRight size={14} className="text-green-400 shrink-0" />
          <span className="text-cyan-400">~/om.choudhary</span>
          {visibleCount < terminalScript.length && (
            <span className="inline-block w-1.75 h-3.75 bg-gray-200 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}