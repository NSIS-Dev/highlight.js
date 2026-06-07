import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://nsis-dev.github.io',
	base: '/highlight.js/',
	outDir: 'docs',
	output: 'static',
	vite: {
		plugins: [tailwindcss()],
	},
});
