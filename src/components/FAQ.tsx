import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring any medical reports, previous prescriptions, or imaging results (X-rays, MRI scans) related to your condition. Wear comfortable clothing that allows easy access to the area being treated.'
  },
  {
    question: 'How long does each session last?',
    answer: 'Each physiotherapy session typically lasts 45-60 minutes. The duration may vary based on your specific treatment plan and condition.'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'We provide detailed bills and receipts that you can submit to your insurance provider for reimbursement. Many insurance plans cover physiotherapy treatments.'
  },
  {
    question: 'How many sessions will I need?',
    answer: 'The number of sessions varies depending on your condition and goals. Some patients see improvement in 3-5 sessions, while others may need ongoing treatment. We will assess your progress and provide a customized treatment plan.'
  },
  {
    question: 'Do you offer home visit services?',
    answer: 'Yes, we offer home visit physiotherapy services across the Goregaon-Malad belt. This is especially convenient for elderly patients or those with mobility challenges.'
  },
  {
    question: 'Is physiotherapy painful?',
    answer: 'While some treatments may cause temporary discomfort, especially when working on tight muscles or restricted joints, we always work within your comfort level. Many patients find relief even after the first session.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-gray-600">Get answers to common questions about our services</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-3"></div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-gray-900 pr-6 text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-teal-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-teal-600 flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
