import React from "react";

const CategoryHero = ({ title, subtitle, uspItems }) => {
  return (
    <div className="bg-[#042B24] py-[60px] w-full overflow-hidden">
      <div className="flex gap-10 items-center w-full max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex-1 flex items-center !max-w-[778px]">
          <div className="flex flex-col gap-3  text-[#f8fffd]">
            <h2 className="m-0 !text-[#f8fffd] whitespace-pre-line">{title}</h2>
            <p className="description !text-[#f8fffd] !text-[18px] m-0">
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
              <h6 className="!font-[400] text-center !text-[#fff] m-0 w-[138px] whitespace-pre-line">
                {item.text}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
