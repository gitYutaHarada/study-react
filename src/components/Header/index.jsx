import Link from "next/link";
import classes from "./Header.module.css"

const NAV_ITEMS = [
  { href: "/", className: classes.anchor, label: "Index" },
  { href: "/about", className: classes.anchor, label: "About" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} className={item.className}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
