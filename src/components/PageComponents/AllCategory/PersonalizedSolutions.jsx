import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  X,
  Search,
  FlaskConical,
  Heart,
  ArrowRight,
  Home,
} from "lucide-react";

import dnaHelixImage from "../../../assets/images/all_category/personalized_solutions/personalized_solutions_img1.webp";
import testTubeImage from "../../../assets/images/all_category/personalized_solutions/personalized_solutions_img2.webp";

const PersonalizedSolutions = () => {
  const [isDNAModalOpen, setIsDNAModalOpen] = useState(false);
  const [isBloodModalOpen, setIsBloodModalOpen] = useState(false);
  return (
    <section className="bg-white py-[80px] px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-[30px] items-center w-full">
          {/* Header */}
          <div className="flex flex-col gap-[16px] items-center text-center">
            <h2 className="capitalize font-['Funnel_Display'] font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[48px] text-[#010907]">
              Personalized Solutions
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#010907]">
              Explore tailored solutions using your genetics and real-time
              health insights.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col lg:flex-row gap-[24px] w-full">
            {/* Card 1 - Your Body's User Manual */}
            <div className="flex-1 rounded-[24px] overflow-hidden relative min-h-[550px] flex flex-col justify-end p-[16px] md:p-[24px]">
              {/* Background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                  <img
                    src={dnaHelixImage}
                    alt="DNA Helix"
                    className="object-cover w-full h-full"
                  />
                </div>
                {!isDNAModalOpen && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[47%] to-black rounded-[24px]" />
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between w-full max-w-[600px] mx-auto py-[16px]">
                {/* Plus/Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsDNAModalOpen(!isDNAModalOpen)}
                    className={`${
                      isDNAModalOpen ? "bg-[#0d8360]" : "bg-white"
                    } rounded-full p-[12px] w-[48px] h-[48px] flex items-center justify-center hover:opacity-90 transition-all`}
                  >
                    {isDNAModalOpen ? (
                      <X className="w-[24px] h-[24px] text-white" />
                    ) : (
                      <Plus className="w-[24px] h-[24px] text-[#010907]" />
                    )}
                  </button>
                </div>

                {/* Expanded or Collapsed Content */}
                {isDNAModalOpen ? (
                  <div className="bg-white rounded-[8px] p-[12px] md:p-[16px] w-full flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[12px]">
                      <h3 className="capitalize font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] text-[#0d8360]">
                        Decode your Genetic Blueprint
                      </h3>
                      <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#185348]">
                        A simple cheek swab reveals what makes you tick. We
                        analyze your unique traits to tell you exactly how to
                        eat and train for your specific body type. Find out how
                        your unique genetics influence recovery, performance,
                        and nutrient absorption.
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="flex flex-col gap-[10px]">
                      {/* Decode */}
                      <div className="flex flex-col gap-[5px]">
                        <div className="flex gap-[12px] items-center">
                          <Search className="w-[24px] h-[24px] text-[#185348]" />
                          <p className="font-['Inter'] font-bold text-[14px] leading-[22px] text-[#185348]">
                            Decode
                          </p>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#185348]">
                          30+ genes and 50+ key variants to see your body's
                          unique responses.
                        </p>
                      </div>

                      {/* Discover */}
                      <div className="flex flex-col gap-[5px]">
                        <div className="flex gap-[12px] items-center">
                          <FlaskConical className="w-[24px] h-[24px] text-[#185348]" />
                          <p className="font-['Inter'] font-bold text-[14px] leading-[22px] text-[#185348]">
                            Discover
                          </p>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#185348]">
                          How your body adapts to strength, endurance, and
                          recovery
                        </p>
                      </div>

                      {/* Get */}
                      <div className="flex flex-col gap-[5px]">
                        <div className="flex gap-[12px] items-center">
                          <Heart className="w-[24px] h-[24px] text-[#185348]" />
                          <p className="font-['Inter'] font-bold text-[14px] leading-[22px] text-[#185348]">
                            Get
                          </p>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#185348]">
                          Science-backed recommendations and a nutrition coach
                          for daily optimization
                        </p>
                      </div>
                    </div>

                    {/* CTA Link */}
                    <button className="flex gap-[10px] items-center group w-fit">
                      <span className="font-['Funnel_Display'] font-semibold text-[16px] leading-[20px] text-[#0d8360] underline">
                        Get My User Manual
                      </span>
                      <ArrowRight className="w-[20px] h-[20px] text-[#0d8360] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-[16px] items-end justify-between">
                    <div className="flex flex-col gap-[16px] text-[#f8fffd] max-w-[366px]">
                      <h3 className="font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] leading-[36px] md:leading-[40px]">
                        Your Body's User Manual
                      </h3>
                      <p className="font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">
                        Ever wish you came with instructions? Discover how your
                        body is wired to handle stress, food, and exercise.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="secondary"
                        className="bg-[#0d8360] hover:bg-[#0a6b4f] text-white font-['Funnel_Display'] font-semibold text-[16px] px-[24px] py-[14px] rounded-full h-auto whitespace-nowrap"
                        onClick={() => console.log("Get My User Manual")}
                      >
                        Get My User Manual
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Card 2 - Unlock Vital Health Markers */}
            <div className="flex-1 rounded-[24px] overflow-hidden relative min-h-[550px] flex flex-col justify-end p-[24px]">
              {/* Background */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#dce3e4] rounded-[24px]" />
                <div className="absolute inset-0 overflow-hidden rounded-[24px] flex items-center justify-center">
                  <img
                    src={testTubeImage}
                    alt="Test Tube"
                    className="object-cover w-full h-full"
                  />
                </div>
                {!isBloodModalOpen && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[47%] to-black rounded-[24px]" />
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between w-full max-w-[600px] mx-auto py-[16px]">
                {/* Plus/Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsBloodModalOpen(!isBloodModalOpen)}
                    className={`${
                      isBloodModalOpen ? "bg-[#0d8360]" : "bg-white"
                    } rounded-full p-[12px] w-[48px] h-[48px] flex items-center justify-center hover:opacity-90 transition-all`}
                  >
                    {isBloodModalOpen ? (
                      <X className="w-[24px] h-[24px] text-white" />
                    ) : (
                      <Plus className="w-[24px] h-[24px] text-[#010907]" />
                    )}
                  </button>
                </div>

                {/* Expanded or Collapsed Content */}
                {isBloodModalOpen ? (
                  <div className="bg-white rounded-[8px] p-[12px] md:p-[24px] w-full flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[12px]">
                      <h3 className="capitalize font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] text-[#0d8360]">
                        Track Your Vital Stats
                      </h3>
                      <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#031a13]">
                        Your DNA is your blueprint, but your blood is the live
                        feed. We track key markers to see if your current
                        routine is working or if you're running low on fuel. Get
                        science-backed recommendations and expert guidance
                        tailored to your health profile.
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex gap-[12px] items-center">
                        <Search className="w-[24px] h-[24px] text-[#031a13]" />
                        <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#031a13]">
                          Comprehensive Health Scan
                        </p>
                      </div>

                      <div className="flex gap-[12px] items-center">
                        <FlaskConical className="w-[24px] h-[24px] text-[#031a13]" />
                        <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#031a13]">
                          105+ Biomarkers Tracked
                        </p>
                      </div>

                      <div className="flex gap-[12px] items-center">
                        <Home className="w-[24px] h-[24px] text-[#031a13]" />
                        <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#031a13]">
                          Done at Home
                        </p>
                      </div>
                    </div>

                    {/* CTA Link */}
                    <button className="flex gap-[10px] items-center group w-fit">
                      <span className="font-['Funnel_Display'] font-semibold text-[16px] leading-[20px] text-[#0d8360] underline">
                        Check My Stats
                      </span>
                      <ArrowRight className="w-[20px] h-[20px] text-[#0d8360] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-[16px] items-end justify-between">
                    <div className="flex-1 flex flex-col gap-[16px] text-[#f8fffd]">
                      <h3 className="capitalize font-['Funnel_Display'] font-bold text-[28px] md:text-[32px] leading-[36px] md:leading-[40px]">
                        Unlock vital health markers
                      </h3>
                      <p className="font-['Inter'] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[22px]">
                        Take a Gene Test and see what your DNA needs to push you
                        to the next level
                      </p>
                    </div>
                    <div className="flex justify-end shrink-0">
                      <Button
                        variant="secondary"
                        className="bg-[#0d8360] hover:bg-[#0a6b4f] text-white font-['Funnel_Display'] font-semibold text-[16px] px-[24px] py-[14px] rounded-full h-auto whitespace-nowrap"
                        onClick={() => console.log("Check My Stats")}
                      >
                        Check My Stats
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedSolutions;
