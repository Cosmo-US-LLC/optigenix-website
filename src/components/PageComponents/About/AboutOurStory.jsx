import React from "react";
import ourStoryImage from "../../../assets/images/about/about_hero/about_hero_img.webp";

const AboutOurStory = () => {
  return (
    <section className="bg-white md:py-[60px] py-[20px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-[30px] items-start">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-[80px]">
            <div className="flex flex-col gap-[30px]">
              {/* Header and Text */}
              <div className="flex flex-col gap-[16px] text-[#010907]">
                <h2 className="capitalize font-['Funnel_Display'] font-medium text-[32px] md:text-[48px] leading-[40px] md:leading-[56px]">
                  Our Story
                </h2>

                <div className="font-['Inter'] font-normal text-[16px] leading-[24px] space-y-[16px]">
                  <p>
                    At OptiGenix, we believe your body deserves solutions as
                    unique as you are. We started this journey as athletes
                    driven, disciplined, and sometimesf rustrated. No matter how
                    much effort we put in, something always felt off. The more
                    we trained, the more we realized performance wasn't just
                    about hard work; it was about understanding what the body
                    truly needs. So, we began listening not to trends, but to
                    data. Through DNA and blood analysis, we learned how
                    different our bodies really are, and how the smallest
                    imbalance can change everything from energy to recovery.
                  </p>

                  <p>
                    That discovery reshaped how we approached training,
                    nutrition, and health. OptiGenix was created from that
                    realization, that peak performance should be personal.
                    Today, our In-House Experts analyze your DNA and blood
                    insights to natural supplements tailored to what your body
                    needs, how much it needs, and when it needs it. Every blend
                    is guided by science, tested for quality, and designed to
                    bring out your body's natural strength. We believe in
                    progress you can feel, more focus, faster recovery, deeper
                    sleep, and a stronger connection to your own body.
                  </p>
                </div>
              </div>

              {/* Highlighted Quote Box */}
              <div className="bg-[rgba(16,185,129,0.1)] border-l-[3px] border-emerald-500 rounded-[4px] p-[12px] max-w-[632px]">
                <p className="font-['Funnel_Display'] font-normal text-[16px] leading-[20px] text-[#010907]">
                  OptiGenix isn't just about supplements. It's about a smarter,
                  more personal way to perform, one that begins with
                  understanding yourself
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex w-full lg:w-auto">
            <div className="relative w-full h-[400px] lg:h-[550px] lg:w-[554px] bg-amber-300 rounded-[25px] overflow-hidden">
              <img
                src={ourStoryImage}
                alt="OptiGenix founders"
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurStory;
