
import { compile } from 'svelte/compiler';
import Marble from './(components)/marble.svelte';
import { text, type Load, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url, params }) => {
  let size = Number(url.searchParams.get('size'))
  if (Number.isNaN(size) || !Number.isFinite(size) || size < 32) {
    size = 32
  }
  const result = (Marble as any).render({ text: params.text?.replace(/\.svg$/, '') });
  return new Response(result.html, {
    headers: { 'Content-Type': 'text/html' },
  });
};