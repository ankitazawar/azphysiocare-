import { useState } from 'react';
import { User, FileText, Calendar } from 'lucide-react';

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    complaints: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello! I would like to book an appointment.

Name: ${formData.name}
Age: ${formData.age}
Complaints: ${formData.complaints}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919324030020?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Request a Callback</h2>
          <p className="text-base text-gray-600">Fill the form and connect with us on WhatsApp</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-3"></div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <User className="inline mr-2" size={20} />
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Calendar className="inline mr-2" size={20} />
                Age
              </label>
              <input
                type="number"
                required
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <FileText className="inline mr-2" size={20} />
                Complaints
              </label>
              <select
                required
                value={formData.complaints}
                onChange={(e) => setFormData({ ...formData, complaints: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              >
                <option value="">Select your complaint</option>
                <option value="Neck Pain">Neck Pain</option>
                <option value="Back Pain">Back Pain</option>
                <option value="Shoulder Pain">Shoulder Pain</option>
                <option value="Knee Pain">Knee Pain</option>
                <option value="Fracture">Fracture</option>
                <option value="Post-Surgery Rehabilitation">Post-Surgery Rehabilitation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-4 rounded-lg hover:bg-green-600 transition transform hover:scale-105 shadow-lg"
            >
              Continue to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
