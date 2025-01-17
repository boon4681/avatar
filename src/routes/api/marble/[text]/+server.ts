
import { compile } from 'svelte/compiler';
import Marble from './(components)/marble.svelte';
import { text, type Load, type RequestHandler } from "@sveltejs/kit";
import { generateGradient } from '$lib/utils.js';

export const GET: RequestHandler = async ({ url, params }) => {
    let size = Number(url.searchParams.get('size'))
    let rounded = Number(url.searchParams.get('rounded'))
    if (Number.isNaN(size) || !Number.isFinite(size) || size < 32) {
        size = 32
    }
    if (Number.isNaN(rounded) || !Number.isFinite(rounded) || rounded < 0) {
        rounded = 0
    }
    const result = (Marble as any).render({
        size,
        rounded,
        gradient: await generateGradient(params.text?.replace(/\.svg$/, '') ?? "")
    });
    return new Response(result.html, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=604800, immutable',
        },
    });
}