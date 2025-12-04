import { Activity, Bone, Dumbbell, Heart, Home, Users, Zap, Target, Shield, TrendingUp, Stethoscope, Briefcase, Baby, UserCheck, Video, Sparkles, Scissors, UserCog } from 'lucide-react';

const specializedServices = [
  {
    icon: Scissors,
    title: 'Trigger Point Release by Dry Needling',
    description: 'Advanced technique using fine needles to release trigger points and muscle knots for immediate pain relief.',
    image: 'https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailed: true
  },
  {
    icon: Shield,
    title: 'Mulligan Mobilization with Belt',
    description: 'Manual therapy technique using mobilization belt to restore joint movement and reduce pain in spine, hip, and shoulder.',
    image: '/WhatsApp Image 2025-11-29 at 16.40.56.jpeg',
    detailed: true
  },
  {
    icon: Sparkles,
    title: 'Kinesio Taping',
    description: 'Therapeutic taping that supports muscles and joints, reduces pain and inflammation, and enhances performance.',
    image: '/WhatsApp Image 2025-11-29 at 16.42.30.jpeg',
    detailed: true
  },
  {
    icon: UserCheck,
    title: '1-to-1 Personalized Stretching Session',
    description: 'Customized stretching protocols using PNF stretching, myofascial release, and joint mobilization to improve flexibility.',
    image: 'https://i.ibb.co/zWWWzhHG/9d550c1e-85a6-488d-9e71-fd8b1a0ccb80.jpg',
    detailed: true
  },
  {
    icon: Briefcase,
    title: 'Corporate Physio Sessions',
    description: 'Workplace wellness programs with ergonomic assessments, posture correction, and stress relief techniques at your office.',
    detailed: true
  },
  {
    icon: Bone,
    title: 'Spine Care & Core Strengthening',
    description: 'Spine muscle stretches and core strengthening using resistance bands and therapy balls to prevent injuries.',
    image: 'https://i.ibb.co/993QZnsj/a79a2480-e755-4702-8687-cc8cbe08b9f4.jpg',
    detailed: true
  },
  {
    icon: Baby,
    title: 'Post-Pregnancy Core Strengthening',
    description: 'Rehabilitation for new mothers focusing on core strengthening, pelvic floor exercises, and diastasis recti treatment.',
    detailed: true
  },
  {
    icon: Heart,
    title: 'Myofascial Release with Tools',
    description: 'Soft tissue therapy using foam rollers, massage balls, and IASTM instruments to reduce muscle tension.',
    detailed: true
  },
  {
    icon: UserCog,
    title: 'Geriatric Training',
    description: 'Specialized training for seniors to improve daily activities like sitting to standing, walking, balance, and maintaining independence.',
    detailed: true
  },
  {
    icon: Stethoscope,
    title: 'Paralysis Rehabilitation',
    description: 'Neurological rehabilitation including functional training, gait training, and ADL training to maximize independence.',
    detailed: true
  },
  {
    icon: TrendingUp,
    title: "Parkinson's Rehabilitation",
    description: "Therapy for Parkinson's disease focusing on balance, coordination, gait training, and functional independence.",
    detailed: true
  },
  {
    icon: Video,
    title: 'Tele-Consultation Services',
    description: 'Online physiotherapy consultations for follow-ups, exercise guidance, and posture assessment from home.',
    detailed: true
  }
];

const regularTreatments = [
  {
    icon: Activity,
    title: 'Knee Pain / Osteoarthritis',
    description: 'Evidence-based treatment protocols for knee pain and arthritis management'
  },
  {
    icon: Zap,
    title: 'Sciatica Treatment',
    description: 'Targeted therapy to relieve sciatic nerve pain and restore normal function'
  },
  {
    icon: Target,
    title: 'Frozen Shoulder Therapy',
    description: 'Progressive mobilization techniques to restore shoulder movement'
  },
  {
    icon: Users,
    title: 'Posture Correction',
    description: 'Comprehensive postural assessment and corrective exercise programs'
  },
  {
    icon: Dumbbell,
    title: 'Sports Injury Rehab',
    description: 'Sport-specific rehabilitation to get you back to peak performance'
  },
  {
    icon: Home,
    title: 'Home Visit Physiotherapy',
    description: 'Professional physiotherapy services in the comfort of your home'
  }
];

export default function Treatments() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Specialized Services</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Evidence-based physiotherapy with personalized care
          </p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-3"></div>
        </div>

        <div className="space-y-6 mb-12">
          {specializedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.01] transition duration-300 ${
                  service.image ? 'lg:grid lg:grid-cols-2 lg:gap-6' : ''
                }`}
              >
                {service.image && (
                  <div className="h-48 lg:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className={`p-6 ${service.image ? '' : 'lg:col-span-2'}`}>
                  <div className="flex items-start">
                    <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-teal-600" size={24} />
                    </div>
                    <div className="ml-3 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-base">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-8 mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Additional Treatments</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-3"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regularTreatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="text-teal-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{treatment.title}</h3>
                <p className="text-gray-600 text-sm">{treatment.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
