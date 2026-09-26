"use client";

import { useState } from "react";
import { useEditorState } from "@/hooks/useEditorState";
import { useIsMobile } from "@/hooks/useIsMobile";
import { fileSystem } from "@/data/fileSystem";
import TitleBar from "@/components/vscode/TitleBar";
import ActivityBar from "@/components/vscode/ActivityBar";
import StatusBar from "@/components/vscode/StatusBar";
import FileTree from "@/components/vscode/FileTree";
import Tabs from "@/components/vscode/Tabs";
import EditorPane from "@/components/vscode/EditorPane";
import Terminal from "@/components/vscode/Terminal";
import OutlinePanel from "@/components/vscode/OutlinePanel";
import ProfileCard from "@/components/vscode/ProfileCard";
import SplashScreen from "@/components/vscode/SplashScreen";

export default function Home() {
  const { openTabs, activeTabId, openFile, closeTab, setActiveTab } =
    useEditorState({ id: "about-readme", name: "README.md" });

  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeTab = openTabs.find((t) => t.id === activeTabId);

  function handleFileClick(id: string, name: string) {
    openFile({ id, name });
    if (isMobile) setSidebarOpen(false);
  }

  return (
    <>
      <SplashScreen />
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-white overflow-hidden">
      <TitleBar onMenuClick={() => setSidebarOpen((v) => !v)} />

      <div className="flex flex-1 overflow-hidden relative">
        {/* ActivityBar — hidden on mobile */}
        <div className="hidden md:flex">
          <ActivityBar />
        </div>

        {/* Sidebar — inline on desktop, slide-in drawer on mobile */}
        <aside
          className={`
            bg-[#252526] border-r border-white/10 flex flex-col overflow-hidden
            md:static md:w-64 md:translate-x-0
            fixed inset-y-0 left-0 w-64 z-40 transition-transform duration-200
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            `}
            >
          <div className="flex-1 overflow-auto p-2">
            <p className="text-xs text-gray-400 uppercase px-2 mb-2 tracking-wide">
              Explorer
            </p>
            <p className="text-xs font-semibold px-2 mb-1">OM-CHOUDHARY</p>
            <FileTree
              nodes={fileSystem}
              onFileClick={handleFileClick}
              activeId={activeTabId}
              />
          </div>
          <OutlinePanel />
          <ProfileCard />
        </aside>

        {/* Backdrop — mobile only */}
        {sidebarOpen && (
          <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main editor column */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <Tabs
            tabs={openTabs}
            activeId={activeTabId}
            onTabClick={setActiveTab}
            onTabClose={closeTab}
            />
          <div className="flex-1 overflow-hidden flex flex-col">
            <EditorPane
              activeId={activeTabId}
              onNavigate={(id, name) => handleFileClick(id, name)}
              />
          </div>
          <Terminal />
        </div>
      </div>

      <StatusBar activeFileName={activeTab?.name} />
    </div>
    </>
  );
}