import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'R. Mehta',
    text: 'I recovered from severe back pain within a few sessions. Dr. Ankita is very patient and skilled. Highly recommend her expertise!',
    rating: 5
  },
  {
    name: 'S. Nair',
    text: 'The best physiotherapist in Goregaon East! My knee pain has reduced drastically. Very professional and caring.',
    rating: 5
  },
  {
    name: 'A. Chavan',
    text: 'Clean clinic, modern techniques, and genuine care. I can move freely again after months of shoulder pain.',
    rating: 5
  },
  {
    name: 'P. Singh',
    text: 'Her posture correction exercises changed my life! No more neck pain from sitting at my desk all day.',
    rating: 5
  },
  {
    name: 'M. Desai',
    text: 'Excellent treatment for my sports injury. Got back to playing cricket much faster than expected. Thank you Dr. Ankita!',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">What Our Patients Say</h2>
          <p className="text-base text-gray-600">Real experiences from real people</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-3"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 relative">
            <Quote className="absolute top-4 left-4 text-teal-200" size={40} />
            <div className="relative z-10">
              <div className="flex justify-center mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-gray-700 text-center mb-4 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-center text-teal-600 font-semibold">
                - {testimonials[currentIndex].name}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-teal-600 w-8' : 'bg-teal-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-5 mt-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-5">
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-700 mb-3 italic text-sm">"{testimonial.text}"</p>
              <p className="text-teal-600 font-semibold text-sm">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
