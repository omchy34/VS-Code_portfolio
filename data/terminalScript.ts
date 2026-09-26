import { TerminalLine } from "@/lib/types";

export const terminalScript: TerminalLine[] = [
  { type: "command", text: "whoami" },
  { type: "output", text: "om choudhary — full stack developer, AI engineer" },

  { type: "command", text: "cat about.txt" },
  {
    type: "output",
    text: "B.Tech CSE @ MAKAUT. Currently based in Kolkata. Building full stack web & mobile apps, exploring AI engineering.",
  },

  { type: "command", text: "ls -la ~/projects" },
  {
    type: "folderLinks",
    folder: "live",
    links: [
      { label: "dekulimandir.com", href: "https://dekulimandir.com" },
      { label: "nextcart", href: "https://next-cart-refing-next-js.vercel.app" },
      { label: "clinic-website", href: "https://omchy34-clinic.vercel.app" },
      { label: "deeksha-classes", href: "https://deeksha-classes.vercel.app" },
    ],
  },

  { type: "command", text: "ls -la ~/links" },
  {
    type: "folderLinks",
    folder: "socials",
    links: [
      { label: "github.com/omchy34", href: "https://github.com/omchy34" },
      { label: "linkedin/omchoudhary", href: "www.linkedin.com/in/om-choudhary-46b635233" },
    ],
  },

  { type: "command", text: "echo $STATUS" },
  { type: "output", text: "open to opportunities" },
];