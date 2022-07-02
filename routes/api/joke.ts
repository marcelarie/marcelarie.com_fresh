import { HandlerContext } from "$fresh/server.ts";

// const NIX_POST = await Deno.readTextFile(
//   "./joke.ts",
// );

const NIX_POST = "NixOS";

export const handler = (
  _req: Request,
  _ctx: HandlerContext,
): Response => {
  return new Response(NIX_POST);
};
