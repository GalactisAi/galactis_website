// Blog API integration for Replit BlogAdmin

const BLOG_API_URL = process.env.BLOG_API_URL || "https://blog-nest-galactis.replit.app";
const BLOG_API_KEY = process.env.BLOG_API_KEY || "blog_d22633088dd732c932a363df0216548a7bbf2be64023ca5d";

// ============================================
// TYPE DEFINITIONS
// ============================================

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
    // #region agent log
    fetch('http://127.0.0.1:7253/ingest/d48b7ff2-f13d-4f7f-98df-b86fb70d9568',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'blog-api.ts:48',message:'Fetching posts - entry',data:{apiUrl,hasKey:!!apiKey},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C,D,E'})}).catch(()=>{});
    // #endregion
    const response = await fetch(`${apiUrl}/external/posts`, {
      headers: {
        'x-api-key': apiKey,
      },
      // No cache - fetch fresh data every time for instant updates
      cache: 'no-store',
    });

    // #region agent log
    fetch('http://127.0.0.1:7253/ingest/d48b7ff2-f13d-4f7f-98df-b86fb70d9568',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'blog-api.ts:56',message:'Response status',data:{status:response.status,statusText:response.statusText,ok:response.ok},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C,D,E'})}).catch(()=>{});
    // #endregion

    if (!response.ok) {
      throw new Error(`Blog API returned ${response.status}: ${response.statusText}`);
    }

    const rawData = await response.json();
    
    // #region agent log
    fetch('http://127.0.0.1:7253/ingest/d48b7ff2-f13d-4f7f-98df-b86fb70d9568',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'blog-api.ts:62',message:'Raw API response structure',data:{isArray:Array.isArray(rawData),type:typeof rawData,keys:rawData?Object.keys(rawData):null,firstItemKeys:Array.isArray(rawData)&&rawData[0]?Object.keys(rawData[0]):null,firstItemSample:Array.isArray(rawData)&&rawData[0]?{id:rawData[0].id,title:rawData[0].title,name:rawData[0].name,slug:rawData[0].slug,publishedDate:rawData[0].publishedDate,createdAt:rawData[0].createdAt,date:rawData[0].date}:null},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C,D'})}).catch(()=>{});
    // #endregion

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

    // #region agent log
    fetch('http://127.0.0.1:7253/ingest/d48b7ff2-f13d-4f7f-98df-b86fb70d9568',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'blog-api.ts:75',message:'After structure handling',data:{postsCount:posts.length,firstPost:posts[0]?{id:posts[0].id,title:posts[0].title,name:posts[0].name,slug:posts[0].slug,publishedDate:posts[0].publishedDate,createdAt:posts[0].createdAt,allKeys:Object.keys(posts[0]||{})}:null},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C,D'})}).catch(()=>{});
    // #endregion

    // Transform posts to match expected format
    const transformedPosts: BlogPost[] = posts.map((post: any, index: number) => {
      // #region agent log
      fetch('http://127.0.0.1:7253/ingest/d48b7ff2-f13d-4f7f-98df-b86fb70d9568',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'blog-api.ts:80',message:'Transforming post',data:{index,rawPost:post,hasTitle:!!post.title,hasName:!!post.name,hasSlug:!!post.slug,hasPublishedDate:!!post.publishedDate,hasCreatedAt:!!post.createdAt},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,C,E'})}).catch(()=>{});
      // #endregion
      
      // Handle nested attributes (like Strapi format)
      const postData = post.attributes || post;
      
      return {
        id: postData.id || postData._id || String(index),
        title: postData.title || postData.name || postData.heading || 'Untitled',
        slug: postData.slug || postData.url || generateSlug(postData.title || postData.name || ''),
        excerpt: postData.excerpt || postData.description || postData.summary || '',
        content: postData.content || postData.body || postData.html || '',
        publishedDate: postData.publishedDate || postData.createdAt || postData.date || postData.publishedAt || new Date().toISOString(),
        updatedAt: postData.updatedAt || postData.updated || postData.modifiedAt,
        coverImage: postData.coverImage?.url ? { url: postData.coverImage.url } : 
                   postData.image?.url ? { url: postData.image.url } :
                   postData.coverImage ? { url: postData.coverImage } :
                   postData.image ? { url: postData.image } : undefined,
      };
    });

    // #region agent log
    fetch('http://127.0.0.1:7253/ingest/d48b7ff2-f13d-4f7f-98df-b86fb70d9568',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'blog-api.ts:95',message:'After transformation',data:{transformedCount:transformedPosts.length,firstTransformed:transformedPosts[0]},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,C,E'})}).catch(()=>{});
    // #endregion
    
    // Apply pagination
    const paginatedPosts = transformedPosts.slice(skip, skip + first);
    
    // #region agent log
    fetch('http://127.0.0.1:7253/ingest/d48b7ff2-f13d-4f7f-98df-b86fb70d9568',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'blog-api.ts:100',message:'Final return',data:{paginatedCount:paginatedPosts.length,returning:paginatedPosts.map(p=>({id:p.id,title:p.title,slug:p.slug,publishedDate:p.publishedDate}))},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C,D,E'})}).catch(()=>{});
    // #endregion
    
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
        post = await response.json();
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
