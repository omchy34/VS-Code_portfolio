"use client";

import { useState } from "react";
import { EditorState, TabItem } from "@/lib/types";

export function useEditorState(initialTab?: TabItem) {
  const [state, setState] = useState<EditorState>({
    openTabs: initialTab ? [initialTab] : [],
    activeTabId: initialTab?.id ?? null,
  });

  function openFile(tab: TabItem) {
    setState((prev) => {
      const alreadyOpen = prev.openTabs.some((t) => t.id === tab.id);
      return {
        openTabs: alreadyOpen ? prev.openTabs : [...prev.openTabs, tab],
        activeTabId: tab.id,
      };
    });
  }

  function closeTab(id: string) {
    setState((prev) => {
      const newTabs = prev.openTabs.filter((t) => t.id !== id);
      const wasActive = prev.activeTabId === id;
      return {
        openTabs: newTabs,
        activeTabId: wasActive
          ? newTabs[newTabs.length - 1]?.id ?? null
          : prev.activeTabId,
      };
    });
  }

  function setActiveTab(id: string) {
    setState((prev) => ({ ...prev, activeTabId: id }));
  }

  return { ...state, openFile, closeTab, setActiveTab };
}