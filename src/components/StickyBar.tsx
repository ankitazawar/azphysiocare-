import { Phone, MessageCircle } from 'lucide-react';

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-2 border-teal-600 z-50 md:hidden">
      <div className="grid grid-cols-2 gap-0">
        <a
          href="https://wa.me/919324030020"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-4 bg-green-500 text-white font-semibold hover:bg-green-600 transition"
        >
          <MessageCircle className="mr-2" size={20} />
          WhatsApp
        </a>
        <a
          href="tel:+919324030020"
          className="flex items-center justify-center py-4 bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
        >
          <Phone className="mr-2" size={20} />
          Call Now
        </a>
      </div>
    </div>
  );
}
