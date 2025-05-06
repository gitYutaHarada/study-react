import classes from "./Main.module.css";

import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

export function Main(props) {
  return (
      <main className={classes.main}>
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
