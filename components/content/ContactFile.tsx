"use client";

export default function ConnectSocials() {
  const socials = [
    { label: "LinkedIn", value: "in/om-choudhary-46b635233", href: "www.linkedin.com/in/om-choudhary-46b635233" },
    { label: "Instagram", value: "@omchy34", href: "https://instagram.com/omchy34" },
    { label: "GitHub", value: "omchy34", href: "https://github.com/omchy34" },
  ];

  const maxLabelLen = Math.max(...socials.map((s) => s.label.length));

  return (
    <div className="font-mono text-[13px] leading-relaxed">

      {/* Embedded terminal window */}
      <div className="flex mt-2">
        <span className="w-8 shrink-0"></span>
        <div className="flex-1 rounded-lg overflow-hidden border border-white/10 bg-[#111111]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-gray-400 text-[11px]">zsh — om@web ~/connect</span>
          </div>

          {/* Terminal body */}
          <div className="p-4 text-[13px] leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="text-green-400">→</span>
              <span className="text-gray-500">~</span>
              <span className="text-white">whoami</span>
            </div>
            <div className="text-gray-300 mb-3">om choudhary — full stack developer, AI engineer</div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">→</span>
              <span className="text-gray-500">~</span>
              <span className="text-white">cat socials.ts</span>
            </div>

            <div className="mb-3">
              {socials.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-green-400">→</span>
                  <span className="text-gray-300">
                    {s.label}
                    {" ".repeat(maxLabelLen - s.label.length + 2)}
                  </span>
                  <span className="text-gray-500">·</span>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
                  >
                    {s.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">→</span>
              <span className="text-gray-500">~</span>
              <span className="text-white">mail --to connect</span>
            </div>
            <a
              href="mailto:omchy34@gmail.com"
              className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
            >
              omchy34@gmail.com
            </a>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-green-400">→</span>
              <span className="text-gray-500">~</span>
              <span className="inline-block w-1.75 h-3.75 bg-gray-200 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}