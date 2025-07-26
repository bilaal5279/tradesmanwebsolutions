// Function to detect if user is on mobile device
const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768;
};

export const openCalendlyPopup = () => {
  if (typeof window !== "undefined") {
    // On mobile devices, redirect directly to Calendly page to avoid popup issues
    if (isMobileDevice()) {
      window.open("https://calendly.com/bilaal5279/30min", "_blank");
      return;
    }

    // Desktop behavior - use popup
    // Check if Calendly script is already loaded
    if (!window.Calendly) {
      // Add Calendly CSS if not already added
      if (!document.getElementById("calendly-css")) {
        const link = document.createElement("link");
        link.id = "calendly-css";
        link.rel = "stylesheet";
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        document.head.appendChild(link);
      }

      // Load Calendly script
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        // Once loaded, initialize the popup with proper configuration
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/bilaal5279/30min",
            text: "Schedule time with me",
            color: "#2563eb",
            textColor: "#ffffff",
            branding: false,
          });
        }
      };
      document.head.appendChild(script);
    } else {
      // If already loaded, just open the popup
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/bilaal5279/30min",
        text: "Schedule time with me",
        color: "#2563eb",
        textColor: "#ffffff",
        branding: false,
      });
    }
  }
};

// Function to preload Calendly script without opening the popup
export const preloadCalendly = () => {
  if (typeof window !== "undefined" && !window.Calendly) {
    // Add Calendly CSS
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }
};
