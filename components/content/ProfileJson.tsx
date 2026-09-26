export default function ProfileJson() {
  const lines: { num: number; content: React.ReactNode }[] = [
    { num: 1, content: <span className="text-gray-400">{"{"}</span> },
    {
      num: 2,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">name</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-400">&quot;Om Choudhary&quot;</span>
          <span className="text-gray-400">,</span>
        </>
      ),
    },
    {
      num: 3,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">handle</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-400">&quot;omchy34&quot;</span>
          <span className="text-gray-400">,</span>
        </>
      ),
    },
    {
      num: 4,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">location</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-400">&quot;Kolkata, India&quot;</span>
          <span className="text-gray-400">,</span>
        </>
      ),
    },
    {
      num: 5,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">focus</span>
          <span className="text-gray-400">: [ </span>
          <span className="text-green-400">&quot;full-stack&quot;</span>
          <span className="text-gray-400">, </span>
          <span className="text-green-400">&quot;AI engineering&quot;</span>
          <span className="text-gray-400">, </span>
          <span className="text-green-400">&quot;mobile apps&quot;</span>
          <span className="text-gray-400"> ],</span>
        </>
      ),
    },
    {
      num: 6,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">bio</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-400">
            &quot;I build full stack web &amp; mobile apps, and I&apos;m exploring AI
            engineering.&quot;
          </span>
          <span className="text-gray-400">,</span>
        </>
      ),
    },
    {
      num: 7,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">currentlyBuilding</span>
          <span className="text-gray-400">: [ </span>
          <span className="text-green-400">&quot;motocart&quot;</span>
          <span className="text-gray-400">, </span>
          <span className="text-green-400">&quot;sadhana&quot;</span>
          <span className="text-gray-400"> ],</span>
        </>
      ),
    },
    {
      num: 8,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">education</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-400">&quot;B.Tech CSE, MAKAUT&quot;</span>
          <span className="text-gray-400">,</span>
        </>
      ),
    },
    {
      num: 9,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">stack</span>
          <span className="text-gray-400">: [ </span>
          <span className="text-green-400">&quot;Next.js&quot;</span>
          <span className="text-gray-400">, </span>
          <span className="text-green-400">&quot;React Native&quot;</span>
          <span className="text-gray-400">, </span>
          <span className="text-green-400">&quot;Node.js&quot;</span>
          <span className="text-gray-400">, </span>
          <span className="text-green-400">&quot;Prisma&quot;</span>
          <span className="text-gray-400"> ],</span>
        </>
      ),
    },
    {
      num: 10,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">projectsShipped</span>
          <span className="text-gray-400">: </span>
          <span className="text-orange-400">3</span>
          <span className="text-gray-400">,</span>
        </>
      ),
    },
    {
      num: 11,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">email</span>
          <span className="text-gray-400">: </span>
          <a
            href="mailto:omchy34@gmail.com"
            className="text-green-400 underline underline-offset-2"
          >
            &quot;omchy34@gmail.com&quot;
          </a>
          <span className="text-gray-400">,</span>
        </>
      ),
    },
    {
      num: 12,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">github</span>
          <span className="text-gray-400">: </span>
          <a
            href="https://github.com/omchy34"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline underline-offset-2"
          >
            &quot;github.com/omchy34&quot;
          </a>
          <span className="text-gray-400">,</span>
        </>
      ),
    },
    {
      num: 13,
      content: (
        <>
          {"  "}
          <span className="text-sky-400">openToWork</span>
          <span className="text-gray-400">: </span>
          <span className="text-orange-400">true</span>
          <span className="text-gray-500 italic"> // reach out — omchy34@gmail.com</span>
        </>
      ),
    },
    { num: 14, content: <span className="text-gray-400">{"}"}</span> },
  ];

  return (
    <div className="font-mono text-[13px] leading-relaxed">
      {lines.map((line) => (
        <div key={line.num} className="flex">
          <span className="w-8 text-right pr-4 text-gray-600 select-none shrink-0">
            {line.num}
          </span>
          <span className="text-gray-200">{line.content}</span>
        </div>
      ))}
    </div>
  );
}