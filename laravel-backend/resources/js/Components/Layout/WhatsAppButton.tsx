import { Link } from "@inertiajs/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/255754000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  );
}
