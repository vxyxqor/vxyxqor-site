#!/bin/bash
set -e

echo "🚀 vxyxqor Auto-Deploy Script"

# 1. 备份当前代码
echo "📦 Backing up current code..."
mkdir -p .backup
cp -r src .backup/src 2>/dev/null || true
cp astro.config.mjs .backup/ 2>/dev/null || true
cp package.json .backup/ 2>/dev/null || true

# 2. 复制新文件
echo "📂 Copying new files..."
REWRITE_DIR="${1:-../vxyxqor-rewrite}"

cp -r "$REWRITE_DIR/src/data" src/ 2>/dev/null || mkdir -p src/data && cp "$REWRITE_DIR/data/tools.ts" src/data/
cp -r "$REWRITE_DIR/src/components" src/ 2>/dev/null || mkdir -p src/components && cp "$REWRITE_DIR/components/"* src/components/
cp -r "$REWRITE_DIR/src/layouts" src/ 2>/dev/null || mkdir -p src/layouts && cp "$REWRITE_DIR/layouts/"* src/layouts/
cp -r "$REWRITE_DIR/src/pages" src/ 2>/dev/null || mkdir -p src/pages && cp "$REWRITE_DIR/pages/"* src/pages/
cp -r "$REWRITE_DIR/public" . 2>/dev/null || true
cp "$REWRITE_DIR/wrangler.toml" . 2>/dev/null || true
mkdir -p .github/workflows && cp "$REWRITE_DIR/.github/workflows/deploy.yml" .github/workflows/

# 3. 确保 wrangler 已安装
echo "📥 Checking dependencies..."
if ! npm list wrangler >/dev/null 2>&1; then
    npm install -D wrangler
fi

# 4. 构建
echo "🔨 Building..."
npm run build

# 5. Git 提交
echo "📤 Pushing to GitHub..."
git add .
git commit -m "vxyxqor v2: affiliate-first redesign + auto-deploy ($(date +%Y-%m-%d))" || true
git push origin main

echo "✅ Done! Check deployment at: https://github.com/vxyxqor/vyxqor-site/actions"
echo "🌐 Site will update at: https://vxyxqor.com (in 1-2 minutes)"
