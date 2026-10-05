// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://levino.github.io',
  base: process.env.BASE_PATH || '/demo-tischlerei/',
});
