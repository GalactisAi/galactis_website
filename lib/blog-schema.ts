import type { BlogPost, BlogPostAggregateRating } from "./blog-api";

/** Default rating when post has no rating from API (matches ReviewBadge: 4.9, 54 reviewers). */
const DEFAULT_AGGREGATE_RATING: BlogPostAggregateRating = {
  ratingValue: 4.9,
  reviewCount: 54,
};

/**
 * Returns aggregate rating for schema. Uses post.aggregateRating when reviewCount > 0,
 * otherwise default. Only include in schema when reviewCount > 0.
 */
export function getBlogPostRating(post: BlogPost): BlogPostAggregateRating | null {
  const rating = post.aggregateRating ?? DEFAULT_AGGREGATE_RATING;
  return rating.reviewCount > 0 ? rating : null;
}

/**
 * Strip HTML tags and decode entities for plain-text schema (e.g. FAQ acceptedAnswer).
 */
export function stripHtmlForSchema(html: string): string {
  if (typeof html !== "string") return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}
