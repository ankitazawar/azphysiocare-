import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">AZ Physiotherapy Home Healthcare</h3>
            <p className="mb-4">
              Expert physiotherapy home healthcare services in Goregaon East, Mumbai. Dedicated to helping you move better and live pain-free.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-teal-400" />
                <a href="tel:+919324030020" className="hover:text-white transition">+91 93240 30020</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-teal-400" />
                <a href="mailto:gzawar@gmail.com" className="hover:text-white transition">gzawar@gmail.com</a>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-teal-400 flex-shrink-0" />
                <span>Gokuldham, Goregaon East, Mumbai - 400097</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Clinic Hours</h4>
            <div className="space-y-2 mb-6">
              <p>Monday - Saturday</p>
              <p className="text-white">9:00 AM - 8:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/azphysicaltherapyhub" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/azphysicaltherapyhub?igsh=dnRiZ2E1bjZxdGQw" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/azphysicaltherapyhub" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2025 AZ Physiotherapy Home Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
