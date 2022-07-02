/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Home from "../routes/index.tsx";

type Router = Record<string, () => h.JSX.Element>;

/*
* This "routes" will be importet in the future
*/
const archive = () => <div class="content">Archive</div>;
const posts = () => <div class="content">Posts</div>;
const tags = () => <div class="content">Tags</div>;

const ROUTER: Router = { archive, posts, tags };

export default function Router(props: PageProps) {
  const { route } = props.params;
  const ROUTE = ROUTER[route];

  return (
    <Home>
      {ROUTE ? ROUTE() : "ROUTE NOT FOUND"}
    </Home>
  );
}
