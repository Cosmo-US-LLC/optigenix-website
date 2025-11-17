import React from "react";
import { Check, X, Package } from "lucide-react";

const Comparison = () => {
  const comparisons = [
    { feature: "80% less plastic", optigenix: true, traditional: false },
    { feature: "4 pills - 1 sachet", optigenix: true, traditional: false },
    { feature: "$2/day average", optigenix: true, traditional: false },
    { feature: "Pocket ready", optigenix: true, traditional: false },
    { feature: "Ingredients by function", optigenix: true, traditional: false },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-[#0d8360] to-[#042b24]">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200"
              alt="OptiGenix Product"
              className="object-cover w-full h-full opacity-50"
            />
            <div className="flex absolute inset-0 justify-center items-center">
              <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/10">
                <Package className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>

          {/* Right: Comparison Table */}
          <div className="space-y-6">
            <h2 className="font-['Funnel_Display'] font-medium text-[48px] leading-[56px] text-[#010907]">
              Why Choose OptiGenix?
            </h2>

            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 pb-4 border-b border-gray-200">
              <div className="font-['Funnel_Display'] font-semibold text-[18px] text-[#010907]">
                Benefits
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-[#0d8360] text-white px-4 py-2 rounded-full">
                  <Check className="w-5 h-5" />
                  <span className="font-['Funnel_Display'] font-semibold text-[14px]">
                    OptiGenix
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex gap-2 items-center px-4 py-2 text-gray-600 bg-gray-200 rounded-full">
                  <Package className="w-5 h-5" />
                  <span className="font-['Funnel_Display'] font-semibold text-[14px]">
                    Traditional
                  </span>
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_1fr_1fr] gap-4 items-center py-3 hover:bg-[#f7f7f7] rounded-lg transition-colors"
                >
                  <div className="font-['Inter'] font-medium text-[16px] text-[#010907]">
                    {item.feature}
                  </div>
                  <div className="flex justify-center">
                    {item.optigenix ? (
                      <div className="w-8 h-8 bg-[#0d8360] rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.traditional ? (
                      <div className="w-8 h-8 bg-[#0d8360] rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full">
                        <X className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
