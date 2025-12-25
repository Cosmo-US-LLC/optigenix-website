import React from "react";

const CategoryHero = ({ title, subtitle, uspItems }) => {
  return (
    <div className="bg-[#042B24] py-[60px] w-full overflow-hidden">
      <div className="flex gap-10 items-center w-full max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex-1 flex items-center">
          <div className="flex flex-col gap-3 max-w-[778px] text-[#f8fffd]">
            <h1 className="font-funnel font-semibold text-5xl leading-[48px] capitalize m-0 max-w-[558px]">
              {title}
            </h1>
            <p className="font-inter font-normal text-lg leading-[26px] m-0">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          {uspItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[17px] items-center px-12 w-[154px] h-[105px]"
            >
              <div className="w-[35.34px] h-[35.34px] flex items-center justify-center">
                {item.icon}
              </div>
              <p className="font-funnel font-normal text-base leading-6 text-center text-white tracking-[-0.36px] m-0 w-[138px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
