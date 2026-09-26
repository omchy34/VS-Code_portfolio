export type FileNode = {
  name: string;
  type: "file";
  id: string;          // unique id, used to look up content + track open tabs
  icon?: string;        // optional: file extension icon key
};

export type FolderNode = {
  name: string;
  type: "folder";
  children: (FileNode | FolderNode)[];
  defaultOpen?: boolean; // whether folder starts expanded
};

export type TreeNode = FileNode | FolderNode;

export type TabItem = {
  id: string;      // matches FileNode.id
  name: string;    // display name, e.g. "README.md"
};

export type EditorState = {
  openTabs: TabItem[];
  activeTabId: string | null;
};

export type TerminalLine =
  | { type: "command"; text: string }
  | { type: "output"; text: string }
  | {
      type: "folderLinks";
      folder: string;
      links: { label: string; href: string }[];
    };