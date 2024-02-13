import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { ssp } from 'sveltekit-search-params/plugin';


export default defineConfig({
    plugins: [ssp(),sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
