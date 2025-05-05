import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Links } from "../../components/Links";
import { Headline } from "../../components/Headline";

export function Main() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Headline
          title="Index Page"
          page="index"
        >
          code={<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            src/app/index.tsx
          </code>}
        </Headline>
        <Links />
      </main>
  );
}
