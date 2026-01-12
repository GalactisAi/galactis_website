import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * API route for revalidating blog pages when content is updated in Replit BlogAdmin
 * 
 * This allows instant updates without redeployment when you publish new posts.
 * 
 * Setup in Replit BlogAdmin (if webhook support is available):
 * 1. Configure webhook to call this endpoint when posts are published/updated
 * 2. URL: https://your-domain.com/api/revalidate
 * 3. Add header: x-webhook-secret = your secret (set REVALIDATION_SECRET in .env.local)
 * 
 * Alternatively, pages will auto-refresh on next visit due to revalidate: 0 setting
 */
export async function POST(request: NextRequest) {
  // Verify webhook secret for security
  const secret = request.headers.get("x-webhook-secret");
  const expectedSecret = process.env.REVALIDATION_SECRET;

  if (!expectedSecret) {
    console.warn("REVALIDATION_SECRET not set. Webhook revalidation disabled.");
    return NextResponse.json(
      { message: "Revalidation secret not configured" },
      { status: 500 }
    );
  }

  if (secret !== expectedSecret) {
    return NextResponse.json(
      { message: "Invalid secret" },
      { status: 401 }
    );
  }

  try {
    // Revalidate blog listing page
    revalidatePath("/resources/blog");
    
    // Revalidate all blog post pages (dynamic routes)
    revalidatePath("/resources/blog/[slug]", "page");

    // Also revalidate sitemap
    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      paths: ["/resources/blog", "/resources/blog/[slug]", "/sitemap.xml"],
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: String(error) },
      { status: 500 }
    );
  }
}



