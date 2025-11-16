# Quick Guide: Push to GitHub & Deploy on Vercel

## Step 1: Get GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Name it: `galactis-deploy`
4. Check the box: **`repo`** (Full control of private repositories)
5. Click **"Generate token"** at the bottom
6. **COPY THE TOKEN** (you won't see it again!)

## Step 2: Push to GitHub

Run these commands in your terminal:

```bash
cd /Users/deiveeganaryan/galactis-website
git push -u origin main
```

When it asks for credentials:
- **Username:** `Bestgamer2853`
- **Password:** Paste your Personal Access Token (NOT your GitHub password)

## Step 3: Deploy on Vercel

1. Go to: https://vercel.com
2. Sign up/Login with your **GitHub account**
3. Click **"Add New..."** → **"Project"**
4. Find **"galactis-website"** and click **"Import"**
5. Click **"Deploy"** (Vercel auto-detects Next.js settings)
6. Wait 2-3 minutes
7. Your site will be live at: `galactis-website.vercel.app`

## Done! 🎉

Your website is now live. Every time you push to GitHub, Vercel will automatically redeploy.

