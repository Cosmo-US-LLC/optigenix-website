import React from "react";
import ourStoryImage from "../../../assets/images/our_story/our_story_img.webp";

const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-4">
            <h2 className="font-['Funnel_Display'] font-medium text-[48px] leading-[56px] text-[#010907] capitalize">
              our story
            </h2>

            <div className="space-y-6 font-['Inter'] font-normal text-[16px] leading-[24px] text-[#010907]">
              <p>
                At OptiGenix, we believe your body deserves solutions as unique
                as you are.
              </p>

              <p>
                We started as athletes who trained hard but still felt something
                was missing. That's when we learned performance isn't just
                effort. It's understanding what your body needs.
              </p>

              <p>
                Turning to DNA and blood insights showed us how different every
                body truly is, and how even small imbalances can impact energy,
                recovery, sleep, and focus. That changed everything for us.
                OptiGenix was built on one belief: peak performance should be
                personal.
              </p>

              <p>
                Today, our In-House Experts use your DNA and blood data to
                create natural, high-quality supplement packs, tailored to your
                body, your needs, and your timing.
              </p>

              <p>
                Every blend is science-backed, quality-tested, and designed to
                support your body's natural strength.
              </p>
            </div>

            {/* Callout Box */}
            <div className="bg-[rgba(16,185,129,0.1)] border-l-[3px] border-emerald-500 rounded p-3">
              <p className="font-['Funnel_Display'] font-normal text-[16px] leading-[20px] text-[#010907]">
                OptiGenix isn't just supplements. It's a smarter, more personal
                way to perform, starting with understanding yourself.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-full">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src={ourStoryImage}
                alt="Athletes training"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
