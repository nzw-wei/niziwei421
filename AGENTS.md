# AGENTS.md

Static course site for 《高级网页设计》 (倪紫微). Pure HTML/CSS/JS: no package manager, build, lint, typecheck, or tests. Verify changes by opening the relevant `.html` file directly in a browser and checking the console.

## Layout / sources of truth

- The repository root is the live site. Root `index.html` is the navigation hub; root `CSS/`, `font/`, and `cdn/` are the assets it and the lesson pages actually reference.
- `24002120421+倪紫微/` is an earlier committed snapshot of the same project (its `index.html` lists only 3 modules). Do not edit it to change the live site; update the root files. `review_flex.html` and `svg.html` are byte-identical in both locations.
- Lesson pages are mostly self-contained with inline `<style>` / `<script>`. Only `review_flex.html` and `svg.html` use external stylesheets (`CSS/flex.css`, `CSS/svg.css`).
- `SKILL/frontend-design/SKILL.md` is committed design guidance; follow it for visual/UI work (deliberate, non-template design).
- The prompt embedded in `24002120421+倪紫微/index.html` asks for `nzw.html`, which does not exist; root `index.html` is the navigation page that fulfills it.

## Pages / linking

- `index.html` currently links only `review_flex.html`, `svg.html`, `font/demo_index.html`, `function.html`, `dataType.html`, `obj005.html`, `JS_obj.apply.html`.
- Not linked from `index.html`: `iconfont-1.html` → `iconfont-2.html`, `iconfont-3.html` → `iconfont-4.html`, `event005.html`, `game.html`, `JS_obj_fun005.html`. Add new lesson pages to the root `index.html` grid.
- Content is Chinese; most pages use `lang="zh-CN"` (`game.html` uses `lang="en"`). Keep files UTF-8.

## Assets / network

- `cdn/` holds locally vendored Font Awesome and lucide files (commit "入库本地化 CDN 资源"). Reference these local paths instead of adding remote CDN URLs.
- `iconfont-1.html` uses `cdn/fontawesome/css/all.min.css`; `iconfont-2.html` uses `cdn/lucide/lucide.min.js`; `iconfont-3.html` uses `font/iconfont.css`; `iconfont-4.html` uses `font/iconfont.js`.
- `font/` is an iconfont export; `font/demo_index.html` is its demo page.
- The only remaining external network reference is in `svg.html`: `https://at.alicdn.com/t/c/font_5231915_zw8vzum64w.js`.

## Git

- Branch `master`; remote `origin` = `https://gitee.com/neusoft_wangyao_jsj/webprojectniziwei.git`. Commit messages are in Chinese. No CI.
- Root `.gitignore` is a stale Flash/Flex template and does not describe this project.

## Code comments

- Every newly created `.html` file starts with a comment block right after `<!DOCTYPE html>`, containing exactly four items: author 倪紫微, creation date (YYYY-MM-DD), the model used, and the page's function name (功能名称). Template:

```html
<!DOCTYPE html>
<!--
  作者：倪紫微
  建立时间：2026-11-04
  使用大模型：GLM-5.3-Flash
  功能名称：页面功能的一句话说明
-->
<html lang="zh-CN">
```

- Every function in inline `<script>` blocks (and standalone `.js` files) carries a one-line comment above it describing what the function mainly does. Trivial one-liners (e.g. a single assignment) may skip it.

## Windows note

- Paths contain Chinese characters and PowerShell 5.1 garbles them in console output. Use `-LiteralPath` and the Read/Edit tools; don't trust console-rendered Chinese when confirming file contents.
