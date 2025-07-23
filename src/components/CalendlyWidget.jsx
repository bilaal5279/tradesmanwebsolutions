"use client"

import { useEffect } from 'react'

export default function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/bilaal5279" 
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}

// Function to open Calendly popup
export const openCalendlyPopup = () => {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/bilaal5279' })
  } else {
    // Fallback to opening in new tab
    window.open('https://calendly.com/bilaal5279', '_blank')
  }
}