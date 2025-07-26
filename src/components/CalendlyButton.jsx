"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

export default function CalendlyButton({ 
  children, 
  size = "lg", 
  variant = "outline", 
  className = "",
  ...props 
}) {
  // Function to detect if user is on mobile device
  const isMobileDevice = () => {
    if (typeof window === "undefined") return false;
    
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768;
  };

  // Function to open Calendly popup
  const openCalendly = () => {
    if (typeof window !== 'undefined') {
      // On mobile devices, redirect directly to Calendly page to avoid popup issues
      if (isMobileDevice()) {
        window.open('https://calendly.com/bilaal5279/30min', '_blank');
        return;
      }

      // Desktop behavior - use popup
      // Add Calendly CSS if not already added
      if (!document.getElementById('calendly-css')) {
        const link = document.createElement('link');
        link.id = 'calendly-css';
        link.rel = 'stylesheet';
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        document.head.appendChild(link);
      }
      
      // Check if Calendly script is already loaded
      if (!window.Calendly) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          // Once loaded, initialize the popup
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/bilaal5279/30min',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: true
          });
        };
        document.head.appendChild(script);
      } else {
        // If already loaded, just open the popup
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/bilaal5279/30min',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true
        });
      }
    }
  };

  // Preload Calendly script when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Determine the button style based on variant
  let buttonStyle = className;
  
  // If it's in the navbar (outline variant with no explicit class), add blue styling
  if (variant === "outline" && !className && size === "sm") {
    buttonStyle = "border-blue-200 text-blue-600 hover:bg-blue-50 cursor-pointer";
  }
  
  // If it's the default blue button in the pricing page
  if (variant === "outline" && !className && size === "lg") {
    buttonStyle = "text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm cursor-pointer";
  }
  
  // Always ensure cursor pointer is included
  if (buttonStyle && !buttonStyle.includes('cursor-pointer')) {
    buttonStyle += ' cursor-pointer';
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={buttonStyle}
      onClick={openCalendly}
      {...props}
    >
      {children || (
        <>
          <Calendar className="w-5 h-5 mr-2" />
          Book a Call
        </>
      )}
    </Button>
  );
}