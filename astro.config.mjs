// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://levino.github.io',
  base: process.env.BASE_PATH || '/demo-tischlerei/',
  // Astro 7 entfernt Leerraum zwischen Inline-Elementen standardmäßig nach JSX-Regeln ('jsx').
  // Das bisherige Verhalten beibehalten, damit keine Leerzeichen im Text verloren gehen.
  compressHTML: true,
});
