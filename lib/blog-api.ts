// Blog API integration for Replit BlogAdmin

const BLOG_API_URL = process.env.BLOG_API_URL || "https://blog-nest-galactis.replit.app";
const BLOG_API_KEY = process.env.BLOG_API_KEY || "blog_d22633088dd732c932a363df0216548a7bbf2be64023ca5d";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Author {
  name: string;
  description?: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  publishedDate: string;
  updatedAt?: string;
  coverImage?: {
    url: string;
  };
  authors?: Author[];
  canonicalUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
}

// ============================================
// DATA FETCHING FUNCTIONS
// ============================================

/**
 * Fetch all blog posts
 */
export async function getAllPosts(
  first: number = 100,
  skip: number = 0
): Promise<BlogPost[]> {
  const apiUrl = process.env.BLOG_API_URL || BLOG_API_URL;
  const apiKey = process.env.BLOG_API_KEY || BLOG_API_KEY;
  
  if (!apiUrl) {
    console.warn("⚠️ Blog API URL not configured. Set BLOG_API_URL in environment variables.");
    return [];
  }
  
  if (!apiKey) {
    console.warn("⚠️ Blog API key not configured. Set BLOG_API_KEY in environment variables.");
    return [];
  }

  try {
    const response = await fetch(`${apiUrl}/external/posts`, {
      headers: {
        'x-api-key': apiKey,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Blog API returned ${response.status}: ${response.statusText}`);
    }

    const rawData = await response.json();

    // Handle different response structures
    let posts: BlogPost[] = [];
    if (Array.isArray(rawData)) {
      posts = rawData;
    } else if (rawData && typeof rawData === 'object') {
      // Check for nested structures
      if (rawData.data && Array.isArray(rawData.data)) {
        posts = rawData.data;
      } else if (rawData.posts && Array.isArray(rawData.posts)) {
        posts = rawData.posts;
      } else {
        posts = [rawData];
      }
    }

    // Transform posts to match expected format
    const transformedPosts: BlogPost[] = posts.map((post: any, index: number) => {
      // Handle nested attributes (like Strapi format)
      const postData = post.attributes || post;
      
      // Map authors array (API returns { name, description, image })
      // Convert relative image paths (e.g. /objects/uploads/...) to absolute URLs
      const authors: Author[] | undefined = Array.isArray(postData.authors)
        ? postData.authors.map((a: any) => {
            let imageUrl = a.image ?? undefined;
            if (imageUrl && typeof imageUrl === 'string' && imageUrl.startsWith('/')) {
              imageUrl = `${apiUrl}${imageUrl}`;
            }
            return {
              name: a.name ?? '',
              description: a.description ?? undefined,
              image: imageUrl,
            };
          }).filter((a: Author) => a.name)
        : undefined;

      // Transform cover image URL: convert relative paths to absolute URLs
      let coverImageUrl: string | undefined;
      if (postData.coverImage?.url) {
        coverImageUrl = postData.coverImage.url;
      } else if (postData.image?.url) {
        coverImageUrl = postData.image.url;
      } else if (postData.coverImage) {
        coverImageUrl = postData.coverImage;
      } else if (postData.image) {
        coverImageUrl = postData.image;
      }
      
      // Convert relative image paths (e.g. /objects/uploads/...) to absolute URLs
      if (coverImageUrl && typeof coverImageUrl === 'string' && coverImageUrl.startsWith('/')) {
        coverImageUrl = `${apiUrl}${coverImageUrl}`;
      }

      return {
        id: postData.id || postData._id || String(index),
        title: postData.title || postData.name || postData.heading || 'Untitled',
        slug: postData.slug || postData.url || generateSlug(postData.title || postData.name || ''),
        excerpt: postData.excerpt || postData.description || postData.summary || '',
        content: postData.content || postData.body || postData.html || '',
        publishedDate: postData.publishedDate || postData.createdAt || postData.date || postData.publishedAt || new Date().toISOString(),
        updatedAt: postData.updatedAt || postData.updated || postData.modifiedAt,
        coverImage: coverImageUrl ? { url: coverImageUrl } : undefined,
        authors: authors?.length ? authors : undefined,
        canonicalUrl: postData.canonicalUrl ?? undefined,
        metaTitle: postData.metaTitle ?? undefined,
        metaDescription: postData.metaDescription ?? undefined,
      };
    });
    
    // Apply pagination
    const paginatedPosts = transformedPosts.slice(skip, skip + first);
    
    if (paginatedPosts.length > 0) {
      console.log(`✅ Successfully fetched ${paginatedPosts.length} posts from Blog API`);
    } else {
      console.warn("⚠️ Blog API returned 0 posts.");
    }
    
    return paginatedPosts;
  } catch (error) {
    console.error("❌ Error fetching posts from Blog API:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const apiUrl = process.env.BLOG_API_URL || BLOG_API_URL;
  const apiKey = process.env.BLOG_API_KEY || BLOG_API_KEY;
  
  if (!apiUrl) {
    console.warn("Blog API URL not configured. Cannot fetch post.");
    return null;
  }
  
  if (!apiKey) {
    console.warn("Blog API key not configured. Cannot fetch post.");
    return null;
  }

  try {
    // First, try to fetch single post endpoint (if it exists)
    // If not available, we'll fetch all and filter
    let post: BlogPost | null = null;
    
    try {
      const response = await fetch(`${apiUrl}/external/posts/${slug}`, {
        headers: {
          'x-api-key': apiKey,
        },
        // No cache - fetch fresh data every time for instant updates
        cache: 'no-store',
      });
      
      if (response.ok) {
        const rawPost = await response.json();
        const postData = rawPost.attributes || rawPost;
        const authors: Author[] | undefined = Array.isArray(postData.authors)
          ? postData.authors.map((a: any) => {
              let imageUrl = a.image ?? undefined;
              if (imageUrl && typeof imageUrl === 'string' && imageUrl.startsWith('/')) {
                imageUrl = `${apiUrl}${imageUrl}`;
              }
              return {
                name: a.name ?? '',
                description: a.description ?? undefined,
                image: imageUrl,
              };
            }).filter((a: Author) => a.name)
          : undefined;
        // Transform cover image URL: convert relative paths to absolute URLs
        let coverImageUrl: string | undefined;
        if (postData.coverImage?.url) {
          coverImageUrl = postData.coverImage.url;
        } else if (postData.image?.url) {
          coverImageUrl = postData.image.url;
        } else if (postData.coverImage) {
          coverImageUrl = postData.coverImage;
        } else if (postData.image) {
          coverImageUrl = postData.image;
        }
        
        // Convert relative image paths (e.g. /objects/uploads/...) to absolute URLs
        if (coverImageUrl && typeof coverImageUrl === 'string' && coverImageUrl.startsWith('/')) {
          coverImageUrl = `${apiUrl}${coverImageUrl}`;
        }

        post = {
          id: postData.id || postData._id || '0',
          title: postData.title || postData.name || postData.heading || 'Untitled',
          slug: postData.slug || postData.url || generateSlug(postData.title || postData.name || ''),
          excerpt: postData.excerpt || postData.description || postData.summary || '',
          content: postData.content || postData.body || postData.html || '',
          publishedDate: postData.publishedDate || postData.createdAt || postData.date || postData.publishedAt || new Date().toISOString(),
          updatedAt: postData.updatedAt || postData.updated || postData.modifiedAt,
          coverImage: coverImageUrl ? { url: coverImageUrl } : undefined,
          authors: authors?.length ? authors : undefined,
          canonicalUrl: postData.canonicalUrl ?? undefined,
          metaTitle: postData.metaTitle ?? undefined,
          metaDescription: postData.metaDescription ?? undefined,
        };
      }
    } catch {
      // Single post endpoint doesn't exist, fall back to filtering
    }
    
    // If single post endpoint doesn't exist, fetch all and filter
    if (!post) {
      const allPosts = await getAllPosts(1000, 0);
      post = allPosts.find((p) => p.slug === slug) || null;
    }
    
    // Debug: Log cover image info in development
    if (post && process.env.NODE_ENV === "development") {
      if (post.coverImage?.url) {
        console.log(`[Blog Post "${post.title}"] Cover image URL:`, post.coverImage.url);
      } else {
        console.warn(`[Blog Post "${post.title}"] No cover image URL`);
      }
    }
    
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const apiUrl = process.env.BLOG_API_URL || BLOG_API_URL;
  
  if (!apiUrl) {
    console.warn("Blog API URL not configured. Returning empty slugs array.");
    return [];
  }
  
  try {
    const posts = await getAllPosts(1000, 0);
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Format date for display
 */
export function formatPostDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Calculate read time based on content
 */
export function calculateReadTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Generate a slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
