import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: "/ingest",
  ui_host: "https://eu.posthog.com",
  defaults: '2025-05-24',
  capture_exceptions: true, // This enables capturing exceptions using Error Tracking
  debug: process.env.NODE_ENV === "development",
  
  // Session Recording Configuration
  session_recording: {
    recordCrossOriginIframes: false, // Don't record iframes from other domains
    recordCanvas: false, // Don't record canvas elements (for performance)
    recordHeaders: true, // Record network request headers
    recordBody: false, // Don't record request/response bodies for privacy
    maskAllInputs: false, // We'll configure specific masking below
    maskInputOptions: {
      password: true, // Always mask password fields
      email: false, // Don't mask email (useful for support)
      tel: false, // Don't mask phone numbers (useful for support)
    },
    maskTextSelector: '[data-ph-mask]', // Custom selector for masking
    blockSelector: '[data-ph-no-capture]', // Custom selector for blocking
    ignoreClass: 'ph-ignore', // CSS class to ignore elements
    maskInputFn: (text, element) => {
      // Custom masking function
      if (element && element.type === 'password') {
        return '*'.repeat(text.length);
      }
      return text;
    }
  },
  
  // Additional privacy settings
  respect_dnt: true, // Respect Do Not Track headers
  opt_out_capturing_by_default: false, // Capture by default
  loaded: function(posthog) {
    // Only enable session recording in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_RECORDINGS === 'true') {
      posthog.startSessionRecording();
    }
  }
});
