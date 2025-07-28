import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogCTA() {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
      <h3 className="text-lg font-semibold text-blue-800 mb-3">Ready to Get Your Professional Website?</h3>
      <p className="text-blue-700 mb-4">
        Stop losing customers to competitors with better websites. Get a professional trade website that works 24/7 to grow your business and attract quality customers.
      </p>
      <Button
        size="lg"
        className="bg-blue-600 text-white hover:bg-blue-700"
        asChild
      >
        <Link href="/contact">Get Your Professional Website</Link>
      </Button>
    </div>
  );
}