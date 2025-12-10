import React from "react";
import { FlaskConical } from "lucide-react";
import backedByScienceBg from "../../../assets/images/backed_by/quality3.webp";
import backedByScienceBgMob from "../../../assets/images/backed_by/quality3.webp";

const Quality = () => {
  // Custom dashed border style with longer dashes
  const dashedBorderStyle = {
    backgroundImage: `
      repeating-linear-gradient(0deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(90deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(180deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(270deg, white 0, white 15px, transparent 15px, transparent 30px)
    `,
    backgroundSize: "2px 100%, 100% 2px, 2px 100%, 100% 2px",
    backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
    backgroundRepeat: "no-repeat",
  };
  const dashedBorderStyle2 = {
    backgroundImage: `
      repeating-linear-gradient(0deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(90deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(180deg, white 0, white 15px, transparent 15px, transparent 30px),
      repeating-linear-gradient(270deg, white 0, white 15px, transparent 15px, transparent 30px)
    `,
    backgroundSize: "2px 100%, 0% 2px, 2px 100%, 100% 2px",
    backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
    backgroundRepeat: "no-repeat",
  };
  const features = [
    {
      text: "Formulated and reviewed by in-house experts",
    },
    {
      text: "Third-party tested in ISO-accredited facilities",
    },
    {
      text: "Data-driven personalization backed by dual-testing (DNA + blood)",
    },
    {
      text: "Non-GMO and pharmaceutical-grade ingredients",
    },
  ];

  return (
    <section className="py-12 lg:py-[40px] bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[24px] items-start">
          {/* Mobile: Content First, Desktop: Image First */}
          {/* <div className="flex flex-col order-1 gap-0 w-full lg:order-2 lg:hidden">
            <div
              className="bg-[#042b24] rounded-[24px] px-4 py-5 lg:p-[32px] flex flex-col gap-6"
              style={dashedBorderStyle}
            >
              <div className="flex flex-col gap-4 text-white">
                <h2 className="font-['Funnel_Display'] font-medium text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px]">
                  Backed By Science
                </h2>
                <p className="font-['Inter'] font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px]">
                  Our process starts with genetic and metabolic insights and
                  ends with supplements verified for purity, safety, and
                  efficacy in ISO-accredited, third-party labs.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-[10px] items-center">
                    <FlaskConical
                      className="w-6 h-6 text-white shrink-0"
                      strokeWidth={1.5}
                    />
                    <p className="font-['Inter'] font-light text-[14px] leading-[22px] text-white">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Desktop: Two Stacked Cards */}
          <div className=" lg:flex w-full lg:w-[600px] lg:order-2 flex-col gap-0">
            {/* Card 1: Title & Description */}
            <div
              className="bg-[#042b24] rounded-[24px] p-[28px] h-[208px] flex flex-col justify-start"
              style={dashedBorderStyle}
            >
              <div className="space-y-[16px] text-white">
                <h2 className="!text-[#fff] !text-[30px] md:!text-[48px]">
                  Backed By Science
                </h2>
                <p className=" description !text-[#fff] md:max-w-[484px] w-full">
                  From genetic and metabolic insights to third-party testing,
                  every formula is engineered with precision and verified for
                  purity, safety, and efficacy.
                </p>
              </div>
            </div>

            {/* Card 2: Features Grid */}
            <div
              className="bg-[#042b24] py-[20px] md:py-[40px] rounded-[24px] px-[28px] md:h-[332px] max-md:min-h-[320px] flex flex-col justify-center"
              style={dashedBorderStyle2}
            >
              <div className="flex flex-col gap-[15px] md:gap-[40px]">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-[15px] md:gap-[20px] md:h-[90px] h-[auto]">
                  <div className="flex-1 flex md:flex-col md:justify-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2766_25885)">
                        <mask
                          id="mask0_2766_25885"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="32"
                          height="32"
                        >
                          <path d="M32 0H0V32H32V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_2766_25885)">
                          <path
                            d="M20.75 22.625L15.6875 19.6875L10.625 22.625"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                          />
                          <mask
                            id="mask1_2766_25885"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="32"
                            height="32"
                          >
                            <path
                              d="M0 1.90735e-06H32V32H0V1.90735e-06Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask1_2766_25885)">
                            <path
                              d="M20.75 28.5L15.6875 31.4375L10.625 28.5"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="8.12 0.94"
                            />
                            <path
                              d="M20.75 28.5L25.8125 31.4375L30.875 28.5V22.625L25.8125 19.6875L20.75 22.625V28.5Z"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="20 0.94"
                            />
                            <path
                              d="M10.625 28.5V22.625L5.5625 19.6875L0.5 22.625V28.5L5.5625 31.4375L10.625 28.5Z"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="25.62 0.94"
                            />
                            <path
                              d="M10.625 10.875V5L5.5625 2.0625L0.5 5V10.875L5.5625 13.8125L10.625 10.875Z"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="20 0.94"
                            />
                          </g>
                          <path
                            d="M15.6875 19.6875V13.8125L10.625 10.875"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-dasharray="8.12 0.94"
                          />
                          <path
                            d="M5.5625 13.8125V19.6875"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                          />
                          <mask
                            id="mask2_2766_25885"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="32"
                            height="32"
                          >
                            <path
                              d="M0 1.90735e-06H32V32H0V1.90735e-06Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask2_2766_25885)">
                            <path
                              d="M27.125 2.6875C27.125 3.89563 28.1044 4.875 29.3125 4.875C30.5206 4.875 31.5 3.89563 31.5 2.6875C31.5 1.47938 30.5206 0.500001 29.3125 0.500001C28.1044 0.500001 27.125 1.47938 27.125 2.6875Z"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M13.125 5.5625C13.125 6.77063 14.1044 7.75 15.3125 7.75C16.5206 7.75 17.5 6.77063 17.5 5.5625C17.5 4.35438 16.5206 3.375 15.3125 3.375C14.1044 3.375 13.125 4.35438 13.125 5.5625Z"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M17.75 14.5625C17.75 15.7706 18.7294 16.75 19.9375 16.75C21.1456 16.75 22.125 15.7706 22.125 14.5625C22.125 13.3544 21.1456 12.375 19.9375 12.375C18.7294 12.375 17.75 13.3544 17.75 14.5625Z"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M20.3125 7.8125C20.3125 9.711 21.8516 11.25 23.75 11.25C25.6484 11.25 27.1875 9.711 27.1875 7.8125C27.1875 5.914 25.6484 4.375 23.75 4.375C21.8516 4.375 20.3125 5.914 20.3125 7.8125Z"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M17.5 6.125L20.375 6.8125"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M21 12.625L22.25 10.9375"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M27.9375 4.3125L26.5 5.625"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                            />
                            <path
                              d="M12.5 27.42L15.6875 29.2695L18.875 27.42"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="0.94 0.94 37.5 0.94"
                            />
                            <path
                              d="M25.8125 21.857L29 23.7066V27.4219"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="0.94 0.94 37.5 0.94"
                            />
                            <path
                              d="M5.5625 29.2695L2.375 27.42"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="0.94 0.94 37.5 0.94"
                            />
                            <path
                              d="M2.375 9.79688V6.08156"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="0.94 0.94 37.5 0.94"
                            />
                            <path
                              d="M10.625 13.0445L13.8125 14.8941V18.6094"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                              stroke-dasharray="0.94 0.94 37.5 0.94"
                            />
                            <path
                              d="M23.75 6.25C24.6116 6.25 25.3125 6.95094 25.3125 7.8125"
                              stroke="white"
                              stroke-width="0.9375"
                              stroke-miterlimit="10"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_2766_25885">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="font-inter font-light md:text-[15px] text-[14px] md:leading-[24px] leading-[22px] text-white">
                      {features[0].text}
                    </p>
                  </div>
                  <div className="flex-1 flex md:flex-col md:justify-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2766_25805)">
                        <mask
                          id="mask0_2766_25805"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="33"
                          height="32"
                        >
                          <path
                            d="M0.000488281 1.90735e-06H32.0005V32H0.000488281V1.90735e-06Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_2766_25805)">
                          <path
                            d="M9.47344 3.27344H16.3916C17.164 3.27344 17.7947 2.64275 17.7947 1.87025C17.7947 1.09963 17.1622 0.468875 16.3916 0.468875H9.47344C8.70275 0.468875 8.07031 1.09963 8.07031 1.87025C8.07031 2.64275 8.701 3.27344 9.47344 3.27344Z"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.40918 25.4492C12.3701 25.3181 15.2401 17.2535 21.9244 21.0945"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.45557 21.7344C5.438 20.5403 10.5579 19.3054 13.4882 21.6688"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.5615 25.7798L10.5562 25.7852"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.3881 24.2798L14.3828 24.2852"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9336 17.4141C13.6139 17.4141 14.1702 16.8578 14.1702 16.1757C14.1702 15.4954 13.6139 14.9391 12.9336 14.9391C12.2516 14.9391 11.6953 15.4954 11.6953 16.1757C11.6953 16.8578 12.2516 17.4141 12.9336 17.4141Z"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17.7948 28.8438C18.8418 28.8438 19.694 27.9898 19.694 26.9446C19.694 25.8993 18.8418 25.0471 17.7948 25.0471C16.7496 25.0471 15.8975 25.8993 15.8975 26.9446C15.8975 27.9898 16.7496 28.8438 17.7948 28.8438Z"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M29.431 10.4531V28.4468C29.431 30.1441 28.042 31.5312 26.3466 31.5312C24.6494 31.5312 23.2622 30.1441 23.2622 28.4468V5.5375M29.431 5.5375V10.5991"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.50345 19.0765L2.65827 22.7811C0.505767 25.5874 0.147891 31.5312 4.89402 31.5312H12.9336H20.9714C22.332 31.5312 23.271 31.0423 23.8697 30.2805M9.75883 3.27331L9.73933 11.0668C9.73583 12.6064 9.03252 14.3887 8.35927 15.2763L5.17999 19.4977M23.2621 22.8554C23.2426 22.8306 23.2248 22.8058 23.2071 22.7811L17.5079 15.2763C16.8329 14.3887 16.1296 12.6064 16.126 11.0668L16.1065 3.27331"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.1346 5.53906H29.5585C30.2742 5.53906 30.8606 4.90838 30.8606 4.13769C30.8606 3.36525 30.2742 2.7345 29.5585 2.7345H23.1346C22.4171 2.7345 21.8325 3.36525 21.8325 4.13769C21.8325 4.90838 22.4171 5.53906 23.1346 5.53906Z"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.09598 29.1641C7.73198 29.1641 8.25104 28.6449 8.25104 28.0089C8.25104 27.3747 7.73198 26.8556 7.09598 26.8556C6.45998 26.8556 5.94092 27.3747 5.94092 28.0089C5.94092 28.6449 6.45998 29.1641 7.09598 29.1641Z"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M25.6274 24.5338L25.6221 24.5391"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M26.6264 28.1119L26.6211 28.1172"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M26.3466 21.6562C26.9543 21.6562 27.4504 21.1602 27.4504 20.5525C27.4504 19.9431 26.9543 19.447 26.3466 19.447C25.7372 19.447 25.2412 19.9431 25.2412 20.5525C25.2412 21.1602 25.7372 21.6562 26.3466 21.6562Z"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.75879 5.77344H11.7962"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.75879 8.27344H11.7962"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.75879 10.7734H11.7962"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.2622 8.03906H25.2996"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.2622 10.5391H25.2996"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.2622 13.0391H25.2996"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.2622 16.05C24.1144 15.4813 25.4945 15.4813 26.3466 16.05C27.197 16.6187 28.5788 16.6187 29.431 16.05"
                            stroke="white"
                            stroke-width="0.9375"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_2766_25805">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="font-inter font-light md:text-[15px] text-[14px] md:leading-[24px] leading-[22px] text-white">
                      {features[1].text}
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div
                  className="flex flex-col md:flex-row gap-[15px] md:gap-[20px] md:h-are you ready to work
                md:h-[90px] h-[auto]"
                >
                  <div className="flex-1 flex md:flex-col md:justify-center gap-[10px]">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M5.96147 9.81016C7.07726 9.81016 7.98179 8.90563 7.98179 7.78984C7.98179 6.67406 7.07726 5.76953 5.96147 5.76953C4.84569 5.76953 3.94116 6.67406 3.94116 7.78984C3.94116 8.90563 4.84569 9.81016 5.96147 9.81016Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.43389 13.8492V11.8289C9.43389 10.7131 8.52939 9.80859 7.41358 9.80859H4.50933C3.39351 9.80859 2.48901 10.7131 2.48901 11.8289V13.8492C2.48901 14.1979 2.7717 14.4806 3.12039 14.4806H8.80258C9.1512 14.4805 9.43389 14.1979 9.43389 13.8492Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M0.46875 20.9041V4.31719C0.46875 3.61969 1.03438 3.05469 1.73125 3.05469H30.2687C30.9656 3.05469 31.5312 3.61969 31.5312 4.31719V7.78969"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M31.5312 7V27.6837C31.5312 28.3812 30.9656 28.9462 30.2687 28.9462H1.73125C1.03438 28.9462 0.46875 28.3812 0.46875 27.6837V20.1875"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M24.6494 17.2031V22.0645L28.087 25.5021"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29.5109 22.0625H24.6494"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.2743 19.9431C20.2743 19.9431 21.5 17.3438 24.6493 17.2031C27.3343 17.2031 29.5106 19.38 29.5106 22.0644C29.5106 24.7494 27.3343 26.9263 24.6493 26.9263C21.9643 26.9263 19.7881 24.7494 19.7881 22.0644C19.7881 21.3044 20.2743 19.9431 20.2743 19.9431Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.9695 7.09447H11.9594C11.6805 7.09447 11.4543 6.86834 11.4543 6.58941V5.57928C11.4543 5.30034 11.6805 5.07422 11.9594 5.07422H12.9696C13.2485 5.07422 13.4747 5.30034 13.4747 5.57928V6.58947C13.4746 6.86834 13.2485 7.09447 12.9695 7.09447Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.9695 11.1336H11.9594C11.6805 11.1336 11.4543 10.9075 11.4543 10.6285V9.61834C11.4543 9.33941 11.6805 9.11328 11.9594 9.11328H12.9696C13.2485 9.11328 13.4747 9.33941 13.4747 9.61834V10.6285C13.4746 10.9075 13.2485 11.1336 12.9695 11.1336Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.9695 15.1766H11.9594C11.6805 15.1766 11.4543 14.9504 11.4543 14.6715V13.6613C11.4543 13.3824 11.6805 13.1562 11.9594 13.1562H12.9696C13.2485 13.1562 13.4747 13.3824 13.4747 13.6613V14.6715C13.4746 14.9504 13.2485 15.1766 12.9695 15.1766Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29.0058 7.09447H15.9999C15.721 7.09447 15.4949 6.86834 15.4949 6.58941V5.57928C15.4949 5.30034 15.721 5.07422 15.9999 5.07422H29.0058C29.2847 5.07422 29.5109 5.30034 29.5109 5.57928V6.58947C29.5109 6.86834 29.2847 7.09447 29.0058 7.09447Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29.0058 11.1336H15.9999C15.721 11.1336 15.4949 10.9075 15.4949 10.6285V9.61834C15.4949 9.33941 15.721 9.11328 15.9999 9.11328H29.0058C29.2847 9.11328 29.5109 9.33941 29.5109 9.61834V10.6285C29.5109 10.9075 29.2847 11.1336 29.0058 11.1336Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29.0058 15.1766H15.9999C15.721 15.1766 15.4949 14.9504 15.4949 14.6715V13.6613C15.4949 13.3824 15.721 13.1562 15.9999 13.1562H29.0058C29.2847 13.1562 29.5109 13.3824 29.5109 13.6613V14.6715C29.5109 14.9504 29.2847 15.1766 29.0058 15.1766Z"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.48901 26.9258H15.6211"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.00439 26.9268V21.1183C4.00439 20.8394 4.23052 20.6133 4.50946 20.6133H5.51964C5.79858 20.6133 6.02471 20.8394 6.02471 21.1183V26.9268"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.04492 26.9272V23.0129C8.04492 22.7339 8.27105 22.5078 8.54998 22.5078H9.56017C9.83911 22.5078 10.0652 22.7339 10.0652 23.0129V26.9272"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.0857 26.9253V20.1066C12.0857 19.8277 12.3118 19.6016 12.5908 19.6016H13.6009C13.8799 19.6016 14.106 19.8277 14.106 20.1066V26.9253"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.43389 17.2031H2.48901"
                          stroke="white"
                          stroke-width="0.8"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="font-inter font-light md:text-[15px] text-[14px] md:leading-[24px] leading-[22px] text-white">
                      {features[2].text}
                    </p>
                  </div>
                  <div className="flex-1 flex md:flex-col md:justify-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2766_25882)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.659 23.2954H3.10399C1.66594 23.2954 0.501953 22.131 0.501953 20.6951V3.40673C0.501953 1.9688 1.666 0.804688 3.10399 0.804688H29.4705C30.5899 0.804688 31.498 1.71292 31.498 2.83223V20.6951C31.498 22.1311 30.3338 23.2954 28.8978 23.2954H20.2751C20.3062 24.8998 20.7131 26.6071 21.2174 27.6817H23.0407C24.0062 27.6817 24.7961 28.4716 24.7961 29.4371C24.7961 30.4026 24.0062 31.1925 23.0407 31.1925H8.96106C7.99554 31.1925 7.20564 30.4026 7.20564 29.4371C7.20564 28.4716 7.99554 27.6817 8.96106 27.6817H10.7798C11.2716 26.6064 11.643 24.8992 11.659 23.2954ZM3.10399 22.4169H28.8978C29.8487 22.4169 30.6196 21.646 30.6196 20.6951V18.9946H1.38038V20.6951C1.38038 21.6461 2.15158 22.4169 3.10399 22.4169ZM30.6196 18.1162V2.83223C30.6196 2.19788 30.1049 1.68312 29.4705 1.68312H3.10399C2.15146 1.68312 1.38038 2.45426 1.38038 3.40673V18.1162H30.6196ZM20.2611 27.6817C19.7904 26.5124 19.426 24.8585 19.3967 23.2954H12.5372C12.5214 24.859 12.1871 26.5129 11.7316 27.6817H20.2611ZM23.0407 28.5601H8.96106C8.47868 28.5601 8.08407 28.9548 8.08407 29.4371C8.08407 29.9194 8.47868 30.3141 8.96106 30.3141H23.0407C23.5231 30.3141 23.9177 29.9194 23.9177 29.4371C23.9177 28.9548 23.5231 28.5601 23.0407 28.5601ZM14.811 21.145C14.5686 21.145 14.3718 20.9482 14.3718 20.7057C14.3718 20.4634 14.5686 20.2665 14.811 20.2665H17.189C17.4314 20.2665 17.6282 20.4634 17.6282 20.7057C17.6282 20.9482 17.4314 21.145 17.189 21.145H14.811ZM10.7721 11.8344L8.90302 14.5234C8.4478 15.1783 7.78227 15.6457 7.05656 15.8281C6.30129 16.018 5.54409 15.8866 4.9497 15.4735L4.22148 14.9673C3.62716 14.5541 3.24009 13.8902 3.15488 13.1161C3.073 12.3723 3.27918 11.5856 3.73439 10.9307L5.60357 8.24167C5.74198 8.04252 6.01568 7.99327 6.21489 8.13175L10.6622 11.2231C10.8614 11.3615 10.9106 11.6352 10.7721 11.8344ZM9.80015 11.6937L6.07416 9.10373L4.45571 11.4321C4.1246 11.9084 3.96849 12.479 4.02804 13.02C4.08426 13.5305 4.33085 13.9735 4.72282 14.246L5.4511 14.7522C5.84313 15.0247 6.34421 15.1015 6.84241 14.9762C7.37022 14.8435 7.8506 14.4984 8.1817 14.0221L9.80015 11.6937ZM15.6664 9.96491H14.3059C14.0635 9.96491 13.8667 9.76807 13.8667 9.52569C13.8667 9.28324 14.0635 9.08648 14.3059 9.08648H15.2883C15.1155 8.58175 15.0221 8.07716 15.0221 7.57363C15.0221 5.83007 16.584 4.38812 18.5383 4.38812C20.0095 4.38812 20.8621 4.93739 21.616 6.04723C22.3692 4.93746 23.2218 4.38812 24.6931 4.38812C26.6473 4.38812 28.2092 5.83007 28.2092 7.57363C28.2092 8.07716 28.1159 8.58175 27.9431 9.08648H28.9255C29.1679 9.08648 29.3647 9.28324 29.3647 9.52569C29.3647 9.76807 29.1679 9.96491 28.9255 9.96491H27.5649C27.3799 10.3235 27.159 10.682 26.9072 11.0399C25.7596 12.6705 23.9631 14.3041 22.1371 15.934C21.8387 16.201 21.3927 16.201 21.0946 15.9343C19.2683 14.3041 17.4718 12.6705 16.3242 11.0399C16.0723 10.682 15.8514 10.3235 15.6664 9.96491ZM27.0076 9.08648C27.2143 8.58263 27.3308 8.07879 27.3308 7.57363C27.3308 6.28585 26.1365 5.26655 24.6931 5.26655C23.5216 5.26655 22.8669 5.73124 22.2722 6.64688L22.2718 6.64757C22.1228 6.87603 21.8876 7.00315 21.6161 7.00315C21.3422 7.00315 21.1068 6.87477 20.9599 6.64707C20.3647 5.73137 19.7099 5.26655 18.5383 5.26655C17.0949 5.26655 15.9005 6.28585 15.9005 7.57363C15.9005 8.07879 16.0171 8.58263 16.2238 9.08648H18.9156C19.0768 9.08648 19.225 9.17463 19.3018 9.31625L19.8515 10.3298L20.8151 8.01698C20.8838 7.85228 21.0453 7.74542 21.2237 7.74668C21.4022 7.748 21.5621 7.85711 21.6284 8.02282L22.3637 9.86125L23.2866 8.41109C23.3587 8.29783 23.4786 8.22379 23.6121 8.20999C23.7456 8.19625 23.8781 8.24425 23.9718 8.34037L24.6985 9.08648H27.0076ZM16.6705 9.96491C16.7844 10.1545 16.9089 10.3443 17.0426 10.5343C18.1431 12.0981 19.8648 13.6586 21.6157 15.222C23.3665 13.6586 25.0882 12.0981 26.1888 10.5343C26.3225 10.3443 26.447 10.1545 26.5609 9.96491H24.5132C24.3948 9.96491 24.2813 9.91703 24.1986 9.83214L23.7297 9.35088L22.6448 11.0559C22.5563 11.1949 22.3975 11.2727 22.2334 11.2574C22.0693 11.2421 21.9276 11.1362 21.8664 10.9832L21.2122 9.34781L20.3089 11.5158C20.2438 11.672 20.0949 11.7769 19.9259 11.7855C19.7569 11.7942 19.598 11.705 19.5174 11.5563L18.6542 9.96491H16.6705ZM6.44166 7.03597L8.31077 4.34696C8.76605 3.69209 9.43159 3.22464 10.1572 3.04224C10.9126 2.85237 11.6698 2.98376 12.2641 3.39688L12.9924 3.9031C13.5867 4.31622 13.9737 4.98019 14.0589 5.75433C14.1408 6.49805 13.9346 7.28475 13.4794 7.93968L11.6103 10.6287C11.4718 10.8278 11.1981 10.8771 10.9989 10.7386L6.55165 7.64729C6.35243 7.50888 6.30324 7.23512 6.44166 7.03597ZM7.41364 7.1767L11.1396 9.76663L12.7581 7.43829C13.0892 6.96199 13.2453 6.39139 13.1858 5.85046C13.1295 5.33984 12.883 4.89692 12.491 4.62442L11.7627 4.11819C11.3707 3.84569 10.8696 3.76895 10.3714 3.89419C9.84357 4.02684 9.36319 4.372 9.03209 4.84836L7.41364 7.1767Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2766_25882">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="font-inter font-light md:text-[15px] text-[14px] md:leading-[24px] leading-[22px] text-white">
                      {features[3].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Shows below content on mobile, left on desktop */}
          {/* <div className="flex-1 order-2 lg:order-1 h-[400px] lg:h-[538px] w-full rounded-[24px] overflow-hidden relative">
            <img
              src={backedByScienceBg}
              alt="Athlete in action"
              className="object-cover absolute inset-0 w-full h-full rounded-[24px]"
            />
          </div> */}
          {/* Desktop Image */}
          <div className="hidden md:block order-2 lg:order-1 flex-1 w-full min-h-[380px] lg:h-[538px] rounded-[24px] overflow-hidden relative">
            <img
              src={backedByScienceBg}
              alt="Athlete in action"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
          {/* Mobile Image */}
          <div className="block md:hidden order-2 lg:order-1 flex-1 w-full min-h-[380px] lg:h-[538px] rounded-[24px] overflow-hidden relative">
            <img
              src={backedByScienceBgMob}
              alt="Athlete in action"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
