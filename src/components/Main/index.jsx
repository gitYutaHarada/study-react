import classes from "./Main.module.css";

import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    className: classes.linksDeploy,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "start to deploy now",
  },
  {
    className: classes.linksRead,
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "Read our docs",
  },
];

export function Main(props) {
  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  return (
    <main className={classes.main}>
      <Headline page={props.page} items={items}>
        code=
        {
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            src/app/{props.page}.tsx
          </code>
        }
      </Headline>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
}
