"use client";

import Link from "next/link";
import BlogImage from "@/components/BlogImage";
import { formatPostDate, type BlogPost } from "@/lib/blog-api";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/resources/blog/${post.slug}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-purple-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-700">
        {/* Feature Image */}
        {post.coverImage?.url && post.coverImage.url.trim() !== "" ? (
          <div className="block overflow-hidden">
            <BlogImage
              src={post.coverImage.url}
              alt={post.title}
              className="h-48 w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        ) : null}
        <div className="p-6">
          <time className="text-xs text-zinc-500 dark:text-zinc-400">
            {formatPostDate(post.publishedDate)}
          </time>
          {post.authors?.length ? (
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              By {post.authors[0].name}
            </p>
          ) : null}
          <h2 className="mt-3 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-purple-600 dark:text-zinc-100 dark:group-hover:text-purple-400">
            {post.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-600 transition-colors group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300">
            Read article
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}

