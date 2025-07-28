"use client"

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactButton({ 
  children, 
  size = "lg", 
  variant = "outline", 
  className = "",
  ...props 
}) {
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
      asChild
      {...props}
    >
      <Link href="/contact#contact-form">
        {children || (
          <>
            <MessageCircle className="w-5 h-5 mr-2" />
            Request a Call Back
          </>
        )}
      </Link>
    </Button>
  );
}