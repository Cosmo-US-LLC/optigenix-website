import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does DNA and blood testing personalize my supplements?',
    answer: 'Our DNA testing analyzes your genetic markers to understand how your body processes nutrients, responds to training, and recovers. Blood testing reveals your current biomarker levels like vitamins, minerals, and hormones. Together, they create a complete picture of your unique needs.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most customers begin noticing improvements in energy, recovery, and performance within 2-4 weeks of consistent use. However, optimal results typically occur after 60-90 days as your body adjusts to personalized supplementation.',
  },
  {
    question: 'Is my data safe and private?',
    answer: 'Absolutely. We use bank-level encryption to protect your data. Your genetic and health information is never sold or shared with third parties. You have full control over your data and can delete it at any time.',
  },
  {
    question: 'Can I modify my supplement plan?',
    answer: 'Yes! You can update your plan at any time based on new testing results, changing goals, or consultation with our expert dietitians. Your supplements evolve as your needs change.',
  },
  {
    question: 'Are your supplements third-party tested?',
    answer: 'Yes, all our supplements are tested by independent, ISO-accredited laboratories for purity, potency, and safety. We provide certificates of analysis for complete transparency.',
  },
  {
    question: 'What if I don\'t like my supplements?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your personalized supplements, contact us for a full refund - no questions asked.',
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-[1080px] mx-auto">
        {/* Header */}
        <h2 className="font-['Funnel_Display'] font-medium text-[48px] leading-[56px] text-[#010907] text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#ececec] transition-colors"
              >
                <h3 className="font-['Funnel_Display'] font-medium text-[18px] leading-[24px] text-[#010907] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#010907] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

