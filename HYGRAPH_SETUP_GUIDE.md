# Hygraph Blog Integration Guide

This guide walks you through connecting Hygraph (headless CMS) to your Galactis.ai website for blog content management.

## ✅ Already Configured

Your Content API endpoint is already set up:
```
https://ap-south-1.cdn.hygraph.com/content/cmioez7bb01n507walq7vz2vr/master
```

## 🔐 One More Step: Enable Blog Creation

To create/edit/delete posts from your website, you need a **Permanent Auth Token**.

### Get Your Auth Token

1. Go to **Project Settings** → **Permanent Auth Tokens** in Hygraph
2. Click **"Create Token"**
3. Give it a name like "Website Admin"
4. Under **Permissions**, enable:
   - **Content API**: Read, Create, Update, Delete, Publish, Unpublish
5. Click **Create**
6. Copy the token

### Add Token to Environment

Add the token to your `.env.local` file:
```bash
HYGRAPH_TOKEN=your_permanent_auth_token_here
```

Then restart your dev server: `npm run dev`

---

## Content Model Setup

If you haven't already, create a **Post** model in Hygraph with these fields:

| Field Name | Type | Settings |
|------------|------|----------|
| `title` | Single line text | Required |
| `slug` | Slug | Based on title, Required, Unique |
| `excerpt` | Multi-line text | Required |
| `content` | Rich text | Required |
| `coverImage` | Asset | Image only |
| `category` | Single line text | Optional |
| `tags` | Single line text | Allow multiple |
| `featured` | Boolean | Default: false |
| `publishedAt` | Date & time | Required |

Create an **Author** model:

| Field Name | Type | Settings |
|------------|------|----------|
| `name` | Single line text | Required |
| `title` | Single line text | Job title |
| `picture` | Asset | Image only |

Then add a **Reference** field to Post:
- Field name: `author`
- Reference to: Author
- One-way reference

Optional **SEO** component (create as a Component):
| Field Name | Type |
|------------|------|
| `title` | Single line text |
| `description` | Multi-line text |

Add SEO as a component field on Post.

### 3. Configure API Access

1. Go to **Project Settings** → **API Access**
2. Copy the **Content API** endpoint (looks like: `https://api-us-east-1.hygraph.com/v2/xxxxx/master`)
3. Under **Public Content API**, enable read access for the `Post` and `Author` models

### 4. Set Environment Variables

Create a `.env.local` file in your project root:

```bash
# Required: Your Hygraph Content API endpoint
HYGRAPH_ENDPOINT=https://api-us-east-1.hygraph.com/v2/YOUR_PROJECT_ID/master

# Optional: Auth token for draft content (create in Hygraph under Permanent Auth Tokens)
HYGRAPH_TOKEN=your_token_here
```

### 5. Deploy Environment Variables

#### Netlify
1. Go to Site Settings → Environment Variables
2. Add `HYGRAPH_ENDPOINT` with your endpoint URL

#### Vercel
1. Go to Project Settings → Environment Variables
2. Add `HYGRAPH_ENDPOINT` with your endpoint URL

## File Structure

```
lib/
  hygraph.ts          # Hygraph client & queries

app/resources/blog/
  page.tsx            # Blog listing page
  [slug]/
    page.tsx          # Individual blog post page
```

## How It Works

### Blog Listing (`/resources/blog`)

- Fetches all published posts from Hygraph
- Falls back to hardcoded posts if Hygraph isn't configured
- Shows post cards with cover image, category, date, excerpt
- Revalidates every hour (ISR)

### Individual Posts (`/resources/blog/[slug]`)

- Fetches post by slug
- Generates static pages at build time
- Full rich text content rendering
- SEO metadata from Hygraph
- Read time calculation

## GraphQL Queries Available

```typescript
import {
  getAllPosts,        // Get all posts (paginated)
  getPostBySlug,      // Get single post by slug
  getAllPostSlugs,    // Get all slugs for static generation
  getPostsByCategory, // Filter posts by category
  getFeaturedPosts,   // Get featured posts
} from "@/lib/hygraph";
```

## Customization

### Adding New Fields

1. Add field in Hygraph
2. Update the TypeScript types in `lib/hygraph.ts`
3. Update the GraphQL queries
4. Use the new field in your components

### Rich Text Rendering

The blog post page renders HTML from Hygraph's rich text field. For custom rendering (embeds, code blocks), you can:

1. Install `@graphcms/rich-text-react-renderer`:
   ```bash
   npm install @graphcms/rich-text-react-renderer
   ```

2. Use it instead of `dangerouslySetInnerHTML`:
   ```tsx
   import { RichText } from '@graphcms/rich-text-react-renderer';
   
   <RichText content={post.content.raw} />
   ```

### Webhooks for Instant Updates

1. In Hygraph, go to **Webhooks**
2. Create a webhook pointing to your deployment URL
3. For Vercel: `https://your-site.vercel.app/api/revalidate`
4. For Netlify: Use build hooks

Example revalidation API route (`app/api/revalidate/route.ts`):

```typescript
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-webhook-secret');
  
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  revalidatePath('/resources/blog');
  revalidatePath('/resources/blog/[slug]', 'page');
  
  return NextResponse.json({ revalidated: true });
}
```

## Troubleshooting

### Posts not showing up?
- Ensure posts are **Published** in Hygraph (not Draft)
- Check the API endpoint is correct
- Verify public read access is enabled

### Images not loading?
- Add Hygraph's domain to `next.config.ts`:
  ```typescript
  images: {
    remotePatterns: [
      { hostname: 'media.graphassets.com' },
    ],
  },
  ```

### Type errors?
- Ensure your Hygraph schema matches the TypeScript types in `lib/hygraph.ts`

## Example Content

Create a test post in Hygraph:

1. Title: "Getting Started with Galactis.ai"
2. Slug: "getting-started-galactis" (auto-generated)
3. Excerpt: "Learn how to leverage AI-powered IT asset management..."
4. Content: Your rich text content
5. Published At: Today's date
6. **Publish** the content

Visit `/resources/blog` to see your post!

