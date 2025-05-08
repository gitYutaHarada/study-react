import Image from "next/image";
import classes from "./Links.module.css"

export function Links({ items, handleReduce }) {
  return (
    <div className={classes.links}>
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => {
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
