import Image from "next/image";
import classes from "./Links.module.css"

const ITEMS = [
  {
    className: classes.linksDeploy,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "start to deploy now"
  },
  {
    className: classes.linksRead,
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    description: "Read our docs"
  }
]

export function Links() {
  return (
    <div className={classes.links}>
      {ITEMS.map((item) => {
        return (
          <a
            key={item.href}
            className={item.className}
            href={item.href}
            target={item.target}
            rel={item.rel}
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />

            {item.description}
          </a>
        );
      })}
    </div>
  );
}
