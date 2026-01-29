"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Periodically refreshes the current page to fetch latest blog data from the API.
 * Ensures new posts published in the blog app appear without the user manually refreshing.
 */
const REFRESH_INTERVAL_MS = 45 * 1000; // 45 seconds

export default function BlogRefreshTrigger() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [router]);

  return null;
}
