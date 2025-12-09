import React from "react";
import { FlaskConical, Award, Microscope } from "lucide-react";
import whatMakesDifferentImage from "../../../assets/images/all_category/whats_make/whats_make_img.webp";

// Temporary image URL from Figma - replace with your actual image

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M25.3373 10.6655V6.66387C25.3373 5.1905 24.1429 3.99609 22.6696 3.99609H6.66289C5.18952 3.99609 3.99512 5.1905 3.99512 6.66387V24.0044"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33101 3.99609V21.3366"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6662 21.3398H6.66289C5.18952 21.3398 3.99512 22.5342 3.99512 24.0076V24.0076C3.99512 25.481 5.18952 26.6754 6.66289 26.6754H13.3323"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.4722 14.6669H20.4697"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.4714 14.668V19.7127L28.9302 25.2617C29.4424 26.0834 29.4692 27.118 29.0003 27.9651C28.5313 28.8122 27.6402 29.3387 26.6719 29.3407H20.2759C19.306 29.3421 18.4118 28.8169 17.9406 27.9692C17.4693 27.1215 17.4953 26.0848 18.0083 25.2617L21.4671 19.7127V14.668"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.6535 20.0068H21.2891"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Science-Backed & Personalized",
    description: "Recommendations based on your DNA and validated research.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M20.0001 31.6656C19.7334 31.6656 19.4667 31.4656 19.4001 31.2656L15.7334 21.599L17.0001 21.1323L19.8001 28.6656L20.3334 26.0656C20.4001 25.8656 20.5334 25.6656 20.7334 25.599C20.9334 25.5323 21.2001 25.5323 21.3334 25.6656L23.4667 27.199L20.6667 19.7323L21.9334 19.2656L25.6001 28.8656C25.7334 29.1323 25.6001 29.4656 25.4001 29.6656C25.1334 29.8656 24.8667 29.8656 24.6001 29.6656L21.4667 27.399L20.6667 31.1323C20.5334 31.399 20.3334 31.6656 20.0001 31.6656Z"
          fill="#0D8360"
        />
        <path
          d="M12.4001 31.6654C12.3334 31.6654 12.3334 31.6654 12.4001 31.6654C12.0667 31.6654 11.8001 31.3987 11.7334 31.132L10.9334 27.3987L7.80007 29.6654C7.5334 29.8654 7.26673 29.8654 7.00007 29.6654C6.7334 29.4654 6.66673 29.1987 6.80007 28.8654L10.4001 19.332L11.6667 19.7987L8.86673 27.2654L11.0001 25.732C11.2001 25.5987 11.4001 25.5987 11.6001 25.6654C11.8001 25.732 12.0001 25.932 12.0001 26.132L12.5334 28.732L15.3334 21.2654L16.6001 21.732L13.0001 31.2654C12.8667 31.532 12.6667 31.6654 12.4001 31.6654Z"
          fill="#0D8360"
        />
        <path
          d="M15.9999 23.0654C15.7999 23.0654 15.6665 22.9987 15.5332 22.8654L14.1332 21.4654L12.3332 22.2654C12.1999 22.332 11.9999 22.332 11.7999 22.2654C11.6665 22.1987 11.5332 22.0654 11.3999 21.932L10.5332 19.932H8.3332C7.9332 19.932 7.66654 19.6654 7.66654 19.2654V17.332L5.86654 16.5987C5.7332 16.532 5.59987 16.3987 5.46654 16.2654C5.39987 16.132 5.39987 15.932 5.46654 15.732L6.26654 13.732L4.7332 12.1987C4.59987 12.0654 4.5332 11.932 4.5332 11.732C4.5332 11.532 4.59987 11.3987 4.7332 11.2654L6.1332 9.86536L5.3332 8.06536C5.26654 7.93203 5.26654 7.73203 5.3332 7.53203C5.39987 7.3987 5.5332 7.26536 5.66654 7.13203L7.66654 6.26536V4.13203C7.66654 3.73203 7.9332 3.46536 8.3332 3.46536H10.2665L10.9999 1.66536C11.1332 1.33203 11.5332 1.13203 11.8665 1.26536L13.8665 2.06536L15.3999 0.532031C15.6665 0.265365 16.0665 0.265365 16.3332 0.532031L17.7332 1.93203L19.5332 1.13203C19.6665 1.06536 19.8665 1.06536 20.0665 1.13203C20.1999 1.1987 20.3332 1.33203 20.4665 1.46536L21.3332 3.46536H23.5332C23.9332 3.46536 24.1999 3.73203 24.1999 4.13203V6.06536L25.9999 6.7987C26.3332 6.93203 26.5332 7.33203 26.3999 7.66536L25.5999 9.66536L27.1332 11.1987C27.2665 11.332 27.3332 11.4654 27.3332 11.6654C27.3332 11.8654 27.2665 11.9987 27.1332 12.132L25.7332 13.532L26.5332 15.332C26.5999 15.4654 26.5999 15.6654 26.5332 15.8654C26.4665 15.9987 26.3332 16.132 26.1999 16.2654L24.1999 17.132V19.332C24.1999 19.732 23.9332 19.9987 23.5332 19.9987H21.5999L20.8665 21.7987C20.7332 22.132 20.3332 22.332 19.9999 22.1987L17.9999 21.332L16.4665 22.8654C16.3332 22.9987 16.1999 23.0654 15.9999 23.0654ZM14.2665 20.0654C14.4665 20.0654 14.5999 20.132 14.7332 20.2654L15.9332 21.4654L17.3332 20.0654C17.5332 19.8654 17.7999 19.7987 18.0665 19.932L19.8665 20.6654L20.5332 19.0654C20.5999 18.7987 20.8665 18.6654 21.1332 18.6654H22.8665V16.6654C22.8665 16.3987 22.9999 16.132 23.2665 16.0654L25.0665 15.2654L24.3999 13.6654C24.2665 13.3987 24.3332 13.132 24.5332 12.932L25.7332 11.732L24.3332 10.332C24.1332 10.132 24.0665 9.86536 24.1999 9.5987L24.9332 7.7987L23.3332 7.13203C23.0665 7.06536 22.9332 6.7987 22.9332 6.53203V4.7987H20.9999C20.7332 4.7987 20.4665 4.66536 20.3999 4.3987L19.5999 2.5987L17.9999 3.33203C17.7332 3.46536 17.4665 3.3987 17.2665 3.1987L15.9999 1.93203L14.5999 3.33203C14.3999 3.53203 14.1332 3.5987 13.8665 3.46536L12.0665 2.73203L11.3999 4.33203C11.3332 4.5987 11.0665 4.73203 10.7999 4.73203H9.06654V6.66536C9.06654 6.93203 8.9332 7.1987 8.66654 7.26536L6.86654 8.06536L7.5332 9.66536C7.66654 9.93203 7.59987 10.1987 7.39987 10.3987L6.19987 11.5987L7.59987 12.9987C7.79987 13.1987 7.86654 13.4654 7.7332 13.732L6.99987 15.532L8.59987 16.1987C8.86654 16.332 8.99987 16.532 8.99987 16.7987V18.532H10.9332C11.1999 18.532 11.4665 18.6654 11.5332 18.932L12.3332 20.732L13.9332 20.0654H14.2665Z"
          fill="#0D8360"
        />
        <path
          d="M19.637 10L15.489 14.148L13 11.659"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Advanced Nutrition Solutions",
    description:
      "Guidance designed for athletes and health-conscious individuals who demand data-driven insights. ",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M5.33301 19.9987H13.333"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.23626 11.7742L9.83626 10.8115C10.2896 10.0835 11.3043 9.9675 11.9109 10.5742L14.7243 13.3875C15.3749 14.0382 15.1869 15.1368 14.3563 15.5328L13.2976 16.0382C12.7883 16.2822 12.1803 16.1768 11.7803 15.7782L9.42426 13.4222C8.98559 12.9835 8.90826 12.3008 9.23626 11.7742Z"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 13.332H16.5906C19.536 13.332 21.924 15.72 21.924 18.6654C21.924 21.6107 19.536 23.9987 16.5906 23.9987C14.108 23.9987 12.0413 22.2947 11.4453 19.9987"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.5229 9.8125C23.2403 11.0418 25.9243 14.5392 25.9243 18.6685C25.9243 23.8232 21.7456 28.0018 16.5909 28.0018C11.8896 28.0018 8.01226 24.5232 7.36426 20.0018"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.1377 10.1951L15.723 5.60975C16.2444 5.08842 17.0884 5.08842 17.6084 5.60975L19.723 7.72442C20.2444 8.24575 20.2444 9.08975 19.723 9.60975L15.103 14.2298"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 27.9987H25.3333"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.9544 8.04575L21.7237 6.27642C22.2451 5.75508 22.2451 4.91108 21.7237 4.39108L20.9424 3.60975C20.4211 3.08842 19.5771 3.08842 19.0571 3.60975L17.2891 5.37775"
          stroke="#0D8360"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Clarity & Confidence",
    description:
      "Kkip supplements your body doesn’t need — no guesswork, no generic plans.",
  },
];

const WhatMakesDifferent = () => {
  return (
    <section className="bg-white border-t border-b border-[rgba(1,9,7,0.1)] py-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-[48px] items-center">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-[32px]">
            {/* Header */}
            <div className="flex flex-col gap-[16px]">
              <h2 className="capitalize !text-[#010907]">
                What Makes OptiGenix Different
              </h2>
              <div className="  !text-[#010907] space-y-[14px]">
                <p>
                  The first personalized supplement company for athletes, we
                  combine advanced genetic testing, real-time insights, and
                  targeted nutrition solutions to remove the guesswork from your
                  health.
                </p>
                <p>
                  We go beyond general advice, we find the hidden missing piece
                  in your nutrition, recovery, and performance, giving you
                  precision-driven solutions that are built for your body, your
                  goals, and your life.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-[16px]">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-[16px] items-start">
                  {/* Icon */}
                  <div className="">
                    <div>{feature.icon}</div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col gap-[8px]">
                    <h3 className="font-['Inter'] font-medium !text-[16px] !leading-[24px] text-[#010907]">
                      {feature.title}
                    </h3>
                    <p className="font-['Inter'] font-light text-[16px] leading-[24px] text-[#010907]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <div className="relative w-full h-[340px] lg:h-[600px] rounded-[24px] overflow-hidden">
              <img
                src={whatMakesDifferentImage}
                alt="Supplement bottle being dispensed into hand"
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
