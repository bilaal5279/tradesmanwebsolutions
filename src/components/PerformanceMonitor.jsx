"use client";

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    const reportWebVitals = (metric) => {
      // Send to analytics service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Dynamic import of web-vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });

    // Resource timing monitoring
    const monitorResourceTiming = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0 && window.gtag) {
          window.gtag('event', 'slow_resource', {
            event_category: 'Performance',
            event_label: slowResources[0].name,
            value: Math.round(slowResources[0].duration),
          });
        }
      }
    };

    // Monitor after page load
    if (document.readyState === 'complete') {
      setTimeout(monitorResourceTiming, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(monitorResourceTiming, 1000);
      });
    }
  }, []);

  return null;
}