import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Marathon Runner",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "OptiGenix changed my training game completely. After my DNA test, I realized I was deficient in key nutrients. My custom pack fixed that, and I PR'd my marathon by 8 minutes!",
  },
  {
    name: "Mike T.",
    role: "CrossFit Athlete",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "Finally, supplements that actually work for MY body. No more guessing. My recovery time has cut in half, and I feel stronger than ever.",
  },
  {
    name: "Jennifer L.",
    role: "Triathlete",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "The blood panel revealed I was low in iron and vitamin D. Within weeks of using my personalized pack, my energy levels skyrocketed. This is next-level.",
  },
  {
    name: "David K.",
    role: "Weightlifter",
    image: "https://i.pravatar.cc/150?img=7",
    rating: 5,
    text: "I've tried every supplement brand out there. OptiGenix is the first that's actually backed by MY data. The difference is real.",
  },
  {
    name: "Amanda R.",
    role: "Yoga Instructor",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "Love that OptiGenix focuses on what I actually need, not just trendy ingredients. My sleep improved dramatically, and I wake up feeling restored.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#042b24] to-[#0d8360] py-20 overflow-hidden">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 mb-12 text-white lg:grid-cols-2">
          <h2 className="font-['Funnel_Display'] font-medium text-[40px] leading-[48px]">
            Thousands of performance journeys (and counting).
          </h2>
          <p className="font-['Inter'] font-normal text-[16px] leading-[26px] lg:text-right">
            See how real athletes and fitness enthusiasts are transforming their
            results with OptiGenix.
          </p>
        </div>

        {/* Testimonials Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[358px] bg-white rounded-lg p-6 space-y-4"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#010907]">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex gap-3 items-center pt-4 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-['Funnel_Display'] font-semibold text-[16px] leading-[20px] text-[#010907]">
                      {testimonial.name}
                    </p>
                    <p className="font-['Inter'] font-normal text-[12px] leading-[16px] text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
