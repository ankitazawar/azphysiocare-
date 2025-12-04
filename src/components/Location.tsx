import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Visit Our Clinic</h2>
          <p className="text-base text-gray-600">Conveniently located in Goregaon East</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start mb-5">
              <MapPin className="text-teal-600 mt-1 mr-3 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinic Address</h3>
                <p className="text-gray-600 text-base">
                  Gokuldham, Goregaon East<br />
                  Mumbai - 400097<br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gokuldham+Goregaon+East+Mumbai+400097"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition transform hover:scale-105 shadow-lg"
            >
              <Navigation className="mr-2" size={20} />
              Get Directions
            </a>

            <div className="mt-5 pt-5 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Clinic Hours</h4>
              <div className="space-y-1 text-gray-600 text-sm">
                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9486738305597!2d72.85944!3d19.1612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d6f6bcbe47%3A0x4f8e9b6f2a3e0b6a!2sGokuldham%2C%20Goregaon%20East%2C%20Mumbai%2C%20Maharashtra%20400097!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
