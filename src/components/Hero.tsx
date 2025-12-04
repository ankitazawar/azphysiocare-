import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
            Expert Physiotherapy Home Healthcare in <span className="text-teal-600">Mumbai</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Relieve Pain • Improve Mobility • Restore Strength with Evidence-Based Physiotherapy
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 mb-6 shadow-lg max-w-3xl mx-auto">
            <p className="text-gray-800 leading-relaxed">
              We don't just provide machine treatments. Our approach focuses on <strong>strengthening weak muscles</strong>, <strong>stretching tight muscles</strong>, and <strong>corrective exercises</strong> that fix movement patterns, addressing the root cause of your issue with lasting results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919324030020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="mr-2" size={24} />
              Book on WhatsApp
            </a>
            <a
              href="tel:+919324030020"
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition transform hover:scale-105 shadow-lg"
            >
              <Phone className="mr-2" size={24} />
              Call Now
            </a>
          </div>
          <p className="mt-4 text-gray-600">+91 93240 30020</p>
        </div>
      </div>
    </section>
  );
}
