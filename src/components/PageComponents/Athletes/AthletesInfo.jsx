import React from "react";

const AthletesInfo = ({
  image = "",
  name = "Colette Bottiaux",
  role = "Swimmer",
  bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  cardPosition = "left",
}) => {
  const isCardLeft = cardPosition === "left";

  return (
    <section className="bg-[#f7f7f7] py-8 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:relative min-h-[300px] md:min-h-[483px] md:flex-row md:items-center gap-6 md:gap-0">
          {/* Card Info - Mobile: Top if left, Bottom if right | Desktop: Side */}
          <div
            className={`bg-white border-8 md:border-10 border-white rounded-[12px] md:rounded-[16px] shadow-lg flex flex-col gap-3 md:gap-4 px-4 md:px-[20px] py-5 md:py-[20px] w-full md:max-w-[560px] z-10 relative ${
              isCardLeft
                ? "order-1 md:order-1"
                : "order-2 md:order-1 md:ml-auto"
            }`}
          >
            <div className="flex flex-col gap-[5px]">
              <h2 className="!font-normal capitalize">{name}</h2>
              <div className="font-['Funnel_Display'] font-semibold text-[16px] md:text-[24px] text-[#0d8360] leading-[22px] md:leading-[32px] mt-0">
                {role}
              </div>
            </div>
            <div className="description text-[#252525] ">{bio}</div>
          </div>

          {/* Athlete Image - Mobile: Bottom if left, Top if right | Desktop: Side */}
          <div
            className={`w-full md:absolute md:top-0 md:w-[720px] h-[300px] md:h-[493px] rounded-[12px] md:rounded-[20px] border border-[#f3f3f3] overflow-hidden bg-white shadow-md ${
              isCardLeft
                ? "order-2 md:order-2 md:right-0"
                : "order-1 md:order-2 md:left-0"
            }`}
          >
            <img
              src={image}
              alt={name + " - " + role}
              className="w-full h-full object-cover rounded-[12px] md:rounded-[20px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthletesInfo;
