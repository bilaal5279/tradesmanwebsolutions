import dynamic from 'next/dynamic';

// Dynamically import heavy components with loading states
export const DynamicContactForm = dynamic(
  () => import('./ContactForm'),
  {
    loading: () => (
      <div className="animate-pulse">
        <div className="border-2 border-gray-200 rounded-lg p-6">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    ),
    ssr: false
  }
);

export const DynamicWhatsAppButton = dynamic(
  () => import('./WhatsAppButton'),
  {
    loading: () => null,
    ssr: false
  }
);