"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/blog-api";
import BlogCard from "@/components/BlogCard";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const visiblePosts = posts.slice(0, visibleCount);
  const canLoadMore = visibleCount < posts.length;

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {canLoadMore && (
        <div className="mt-12 text-center">
          <button
            className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            onClick={() => setVisibleCount((prev) => prev + 6)}
          >
            Load more articles
          </button>
        </div>
      )}
    </>
  );
}

