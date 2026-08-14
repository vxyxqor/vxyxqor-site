# vxyxqor — Deploy Guide

## 1. Download the zip
[vxyxqor-rewrite.zip](sandbox:///mnt/agents/output/vxyxqor-rewrite.zip)

## 2. Unzip and copy files into your repo

Copy each file/folder to the matching location in your `vyxqor-site` repo:

```
vxyxqor-rewrite/
├── .github/workflows/deploy.yml     →  .github/workflows/deploy.yml
├── wrangler.toml                    →  wrangler.toml (repo root)
├── public/robots.txt                →  public/robots.txt
├── data/tools.ts                    →  src/data/tools.ts
├── components/*.tsx                 →  src/components/*.tsx
├── layouts/Layout.astro             →  src/layouts/Layout.astro
├── pages/*.astro / *.ts             →  src/pages/*.astro / *.ts
├── reviews/*.md                     →  src/content/reviews/*.md (or any folder you prefer)
```

> Note: If your Astro project uses `src/` prefix, put components/data/layouts/pages under `src/`.
> If it is flat (no `src/`), put them at root level. Adjust paths accordingly.

## 3. Check astro.config.mjs

Make sure your build output goes to `dist/`:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // dist is the default, but explicit is fine:
  // outDir: './dist',
});
```

## 4. Install wrangler (one-time)

```bash
npm install -D wrangler
```

## 5. Commit and push

```bash
git add .
git commit -m "vxyxqor v2: affiliate-first redesign + auto-deploy"
git push origin main
```

## 6. Done — Auto-deploy is live

From now on, every `git push` to `main` will:
1. Build the Astro site
2. Deploy to Cloudflare Workers automatically

You can watch the deployment at:
https://github.com/vxyxqor/vyxqor-site/actions

## 7. Verify

Wait 1–2 minutes, then visit:
- https://vxyxqor.com (production)
- https://vxyxqor.com/sitemap.xml
- https://vxyxqor.com/robots.txt

## Affiliate Links to Update

The tools.ts file uses placeholder affiliate URLs. Replace these with your real affiliate links after you get approved:

```
jasper.ai?fpr=vyxqor       →  your real Jasper affiliate link
surferseo.com?fpr=vyxqor   →  your real Surfer affiliate link
heygen.com?fpr=vyxqor      →  your real HeyGen affiliate link
... etc
```

## Next Content (Week 2)

After deploy, I will write:
- 2 comparison articles (Jasper vs Writesonic, Surfer vs Scalenut)
- 1 workflow article (YouTube AI workflow)
- Update tools.ts with real affiliate URLs

Just tell me when you are ready.
