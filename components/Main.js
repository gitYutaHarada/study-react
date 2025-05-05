import Image from "next/image";
import { Links } from "./Links";
import { Headline } from "./Headline";

export function Main(props) {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Headline
          page={props.page}
        >
          code={<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            src/app/{props.page}.tsx
          </code>}
        </Headline>
        <Links />
      </main>
  );
}
