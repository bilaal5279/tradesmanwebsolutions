"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import PostHog to ensure it only loads on client-side
const PostHogProviderClient = dynamic(() => import("./PostHogClient"), {
  ssr: false,
  loading: () => null,
});

export default function PostHogProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return <PostHogProviderClient>{children}</PostHogProviderClient>;
}
