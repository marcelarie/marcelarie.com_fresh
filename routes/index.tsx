/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

const NAV_LINKS = [
  { name: "archive", href: "/archive" },
  { name: "posts", href: "/posts" },
  { name: "tags", href: "/tags" },
];

const NavLinks = () => {
  return (
    <div class="nav_links">
      {NAV_LINKS.map(({ name, href }) => <a href={href}>{name}</a>)}
    </div>
  );
};

const Nav = () => (
  <div class="nav">
    <a href="/">
      <p>marcelarie</p>
    </a>
    <NavLinks />
  </div>
);

const DESCRIPTION = "my blog";

type HomeProps = { children?: ComponentChildren };

const Main = () => <main>main</main>;

export default function Home({ children }: HomeProps) {
  return (
    <main>
      <Head>
        <title>marcelarie</title>
        <link rel="stylesheet" href="./style.css" />
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <Nav />
      {children ?? <Main />}
    </main>
  );
}
