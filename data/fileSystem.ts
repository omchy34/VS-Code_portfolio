import { TreeNode } from "@/lib/types";

export const fileSystem: TreeNode[] = [
    {
        name: "about",
        type: "folder",
        defaultOpen: true,
        children: [
            { name: "README.md", type: "file", id: "about-readme" },
            { name: "profile.json", type: "file", id: "about-profile" },
        ],
    },
    {
        name: "Exprience",
        type: "folder",
        defaultOpen: true,
        children: [
            { name: "Exprience.tsx", type: "file", id: "exprience-profile" },
        ],
    },
{
    name: "projects",
        type: "folder",
            defaultOpen: true,
                children: [
                    { name: "ProjectsFile.tsx", type: "file", id: "proj-projects" },

                ],
  },
{
    name: "skills",
        type: "folder",
            defaultOpen: true,
                children: [{ name: "stack.json", type: "file", id: "skills-stack" }],
  },
{
    name: "connect",
        type: "folder",
            defaultOpen: true,
                children: [
                    { name: "socials.ts", type: "file", id: "connect-socials" },
                ],
  },
{ name: ".gitignore", type: "file", id: "root-gitignore" },
];

// Walks the tree to find which folder a file lives in — used for the breadcrumb
export function getFileParentFolder(id: string): string | null {
    function search(nodes: TreeNode[], parent: string | null): string | null | undefined {
        for (const node of nodes) {
            if (node.type === "file" && node.id === id) return parent;
            if (node.type === "folder") {
                const found = search(node.children, node.name);
                if (found !== undefined) return found;
            }
        }
        return undefined;
    }
    return search(fileSystem, null) ?? null;
}