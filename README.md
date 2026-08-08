# ⚡ Aniket Kumar Portfolio - Cloudflare Ready 🚀

A modern, high-performance portfolio website built with **Next.js 15**, **React 19**, and optimized for **Cloudflare Pages** global edge hosting.

---

## 🌐 Cloudflare Pages Hosting Setup (Deployment Guide)

### 📌 Method 1: Automatic Deployment with GitHub (Recommended / सबसे आसान तरीका)

1. **GitHub par code push karein**:
   ```bash
   git add .
   git commit -m "Configure project for Cloudflare Pages"
   git branch -M main
   git push -u origin main
   ```

2. **Cloudflare Dashboard par jayein**:
   - [Cloudflare Dashboard](https://dash.cloudflare.com/) par login karein.
   - Left sidebar mein **Compute (Workers & Pages)** ya **Pages** par click karein.
   - **Create application** > **Pages** > **Connect to Git** select karein.

3. **Repository select karein**:
   - Apna GitHub account authorize karein aur `cloudflare` (ya apna repo name) choose karein.

4. **Build Settings configure karein**:
   - **Framework preset**: `Next.js (Static HTML Export)` ya `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js Version** (Environment Variable agar zaroorat ho): `NODE_VERSION = 20`

5. **Save and Deploy** par click karein!
   - Cloudflare aapki website ko build karke global edge CDN par instantly live kar dega (URL jaise: `https://aniket-kumar-portfolio.pages.dev`).
   - Ab se aap jab bhi GitHub par commit push karenge, Cloudflare automatically website ko update kar dega!

---

### 📌 Method 2: Direct CLI Deployment via Wrangler (Bina GitHub ke direct deploy)

Aap apne terminal se direct Cloudflare par deploy kar sakte hain:

1. **Project build karein**:
   ```bash
   npm run build
   ```

2. **Cloudflare Pages par deploy karein**:
   ```bash
   npx wrangler pages deploy out --project-name aniket-kumar-portfolio
   ```

3. Pehli baar run karne par browser mein Cloudflare login approve karne ko bolega. Approve karte hi site live ho jayegi!

---

## 🛠️ Project Structure & Optimizations for Cloudflare

- **`next.config.mjs`**: Configured with `output: 'export'` and `images: { unoptimized: true }` for static edge delivery.
- **`public/_headers`**: Edge HTTP caching headers (`_next/static` & `/images` permanently cached on CDN edge) + security headers.
- **`wrangler.toml`**: Cloudflare Pages configuration file.
- **`.node-version` / `.nvmrc`**: Set to Node 20 LTS for Cloudflare build machines.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build static output for Cloudflare
npm run build
```
