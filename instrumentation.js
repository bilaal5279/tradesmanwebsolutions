
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { PostHog } = await import("posthog-node");

    global.posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    });
  }
}
