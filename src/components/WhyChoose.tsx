import { CheckCircle, Award, Target, Zap, Home, Users } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Personalized One-on-One Treatment',
    description: 'Individual attention focused entirely on your recovery'
  },
  {
    icon: Award,
    title: 'Certified & Experienced Physiotherapist',
    description: '10+ years of expertise with MPT qualification'
  },
  {
    icon: Target,
    title: 'Evidence-Based Approach',
    description: 'Treatment protocols backed by latest research'
  },
  {
    icon: Zap,
    title: 'Latest Therapy Tools & Techniques',
    description: 'Modern equipment and advanced treatment methods'
  },
  {
    icon: Home,
    title: 'Home Visit Available',
    description: 'Convenient physiotherapy at your doorstep'
  },
  {
    icon: Users,
    title: '1000+ Patients Treated',
    description: 'Proven track record of successful outcomes'
  }
];

export default function WhyChoose() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Why Choose AZ Physiotherapy Care</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our patient-centered approach to healing
          </p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-3"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-3">
                  <Icon className="text-teal-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
