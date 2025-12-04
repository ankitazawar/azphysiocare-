import { Award, Users, Home, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Meet Your Expert</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Dr. Ankita Zawar (MPT)</h3>
            <p className="text-base text-gray-600 mb-5">
              With over 10 years of expertise in evidence-based physiotherapy, Dr. Ankita specializes in musculoskeletal rehabilitation, manual therapy, and women's health. She is renowned for her personalized 1-on-1 treatment approach that delivers real results.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Award className="text-teal-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">Master's in Physiotherapy (MPT) with specialized training in advanced manual therapy techniques</p>
              </div>
              <div className="flex items-start">
                <Users className="text-teal-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">Successfully treated over 1000+ patients with chronic pain and mobility issues</p>
              </div>
              <div className="flex items-start">
                <Home className="text-teal-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">Home visits available across Goregaon-Malad belt for patient convenience</p>
              </div>
              <div className="flex items-start">
                <Heart className="text-teal-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm">Specialized expertise in women's health physiotherapy</p>
              </div>
            </div>
            <div className="mt-5">
              <a href="mailto:gzawar@gmail.com" className="text-teal-600 hover:text-teal-700 font-medium">
                gzawar@gmail.com
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
            <img
              src="/WhatsApp Image 2025-11-25 at 17.35.48.jpeg"
              alt="Dr. Ankita Zawar - Physiotherapist"
              className="relative rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
