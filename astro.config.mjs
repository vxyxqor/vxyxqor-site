import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vyxqor.com',
  output: 'static',
  compressHTML: true,
  build: { format: 'directory' }
});