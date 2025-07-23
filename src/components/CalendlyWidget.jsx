"use client"

import { useEffect, useRef } from 'react'

export default function CalendlyWidget() {
  const widgetRef = useRef(null)

  useEffect(() => {
    // Load Calendly CSS
    if (!document.getElementById('calendly-css')) {
      const link = document.createElement('link')
      link.id = 'calendly-css'
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }

    const initializeWidget = () => {
      if (window.Calendly && widgetRef.current) {
        // Clear any existing content first
        widgetRef.current.innerHTML = ''
        
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/bilaal5279/30min',
          parentElement: widgetRef.current,
          prefill: {},
          utm: {}
        })
      }
    }

    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = initializeWidget
      document.body.appendChild(script)
    } else {
      // If script is already loaded, initialize the widget
      initializeWidget()
    }
  }, [])

  return (
    <div 
      ref={widgetRef}
      className="calendly-inline-widget" 
      data-url="https://calendly.com/bilaal5279/30min" 
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