import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "@/stripe/config";

const GENE_TEST_PRODUCT_ID = "prod_TZyHo3lxkvrykA";

const CustomTestTubeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    className={className}
  >
    <g clip-path="url(#clip0_2800_4311)">
      <path
        d="M31.9746 12.0117C32.1071 12.0062 32.2319 11.9482 32.3217 11.8506C32.4114 11.753 32.4587 11.6237 32.4532 11.4912L32.3485 8.99342C32.3429 8.86093 32.285 8.73607 32.1874 8.64631C32.0898 8.55655 31.9605 8.50924 31.828 8.5148L26.8324 8.72418L26.6649 4.72768L27.1644 4.70675C27.2969 4.70119 27.4218 4.64324 27.5116 4.54562C27.6013 4.44801 27.6486 4.31874 27.6431 4.18625L27.5593 2.188C27.5538 2.05551 27.4958 1.93065 27.3982 1.84089C27.3006 1.75113 27.1713 1.70383 27.0388 1.70938L21.0441 1.96063C20.9116 1.96619 20.7867 2.02414 20.697 2.12176C20.6072 2.21937 20.5599 2.34864 20.5655 2.48113L20.6492 4.47938C20.6548 4.61187 20.7127 4.73673 20.8103 4.82649C20.9079 4.91625 21.0372 4.96355 21.1697 4.958L21.6693 4.93706L21.8368 8.93355L18.8394 9.05918L18.6719 5.06269L19.1715 5.04175C19.304 5.0362 19.4288 4.97824 19.5186 4.88063C19.6083 4.78302 19.6556 4.65374 19.6501 4.52125L19.5663 2.52301C19.5608 2.39052 19.5028 2.26566 19.4052 2.1759C19.3076 2.08614 19.1783 2.03883 19.0458 2.04438L13.0511 2.29564C12.9186 2.30119 12.7937 2.35915 12.704 2.45676C12.6142 2.55437 12.5669 2.68364 12.5725 2.81614L12.6562 4.81438C12.6618 4.94687 12.7197 5.07173 12.8173 5.16149C12.915 5.25125 13.0442 5.29856 13.1767 5.29301L13.6763 5.27207L13.8438 9.26856L10.8464 9.39419L10.6789 5.3977L11.1785 5.37676C11.311 5.3712 11.4358 5.31325 11.5256 5.21563C11.6153 5.11802 11.6627 4.98875 11.6571 4.85626L11.5734 2.85801C11.5678 2.72552 11.5098 2.60066 11.4122 2.5109C11.3146 2.42114 11.1853 2.37384 11.0529 2.37939L5.05811 2.63064C4.92562 2.6362 4.80076 2.69415 4.711 2.79177C4.62124 2.88938 4.57394 3.01865 4.57949 3.15114L4.66324 5.14939C4.6688 5.28188 4.72675 5.40674 4.82437 5.4965C4.92198 5.58626 5.05125 5.63356 5.18374 5.62801L5.6833 5.60707L5.85081 9.60356L0.855191 9.81294C0.722699 9.8185 0.59784 9.87645 0.50808 9.97407C0.418321 10.0717 0.371014 10.201 0.376567 10.3334L0.481257 12.8312C0.48681 12.9637 0.544767 13.0886 0.64238 13.1784C0.739993 13.2681 0.869264 13.3154 1.00176 13.3099L1.50132 13.2889L2.12945 28.2758L1.62989 28.2967C1.4974 28.3023 1.37254 28.3602 1.28278 28.4578C1.19302 28.5555 1.14571 28.6847 1.15127 28.8172L1.25596 31.315C1.26151 31.4475 1.31947 31.5724 1.41708 31.6621C1.51469 31.7519 1.64396 31.7992 1.77646 31.7936L32.7493 30.4955C32.8818 30.4899 33.0066 30.432 33.0964 30.3344C33.1861 30.2368 33.2334 30.1075 33.2279 29.975L33.1232 27.4772C33.1176 27.3447 33.0597 27.2198 32.9621 27.1301C32.8645 27.0403 32.7352 26.993 32.6027 26.9986L32.1031 27.0195L31.475 12.0327L31.9746 12.0117ZM21.5855 2.93882L26.5811 2.72944L26.623 3.72856L21.6274 3.93794L21.5855 2.93882ZM22.6684 4.89519L25.6658 4.76956L25.8333 8.76605L22.8359 8.89168L22.6684 4.89519ZM13.5925 3.27382L18.5881 3.06444L18.63 4.06357L13.6344 4.27295L13.5925 3.27382ZM14.6754 5.23019L17.6728 5.10457L17.8403 9.10106L14.8429 9.22668L14.6754 5.23019ZM5.59955 3.60883L10.5952 3.39945L10.637 4.39857L5.64143 4.60795L5.59955 3.60883ZM6.68243 5.5652L9.67979 5.43957L9.8473 9.43606L6.84993 9.56169L6.68243 5.5652ZM1.39663 10.7911L31.3703 9.53486L31.4331 11.0335L1.45944 12.2898L1.39663 10.7911ZM5.12682 28.1502L4.49869 13.1633L5.99737 13.1005L6.458 24.0908C6.48577 24.7533 6.77556 25.3776 7.26362 25.8264C7.75168 26.2752 8.39804 26.5117 9.0605 26.484C9.72296 26.4562 10.3473 26.1664 10.7961 25.6783C11.2448 25.1903 11.4814 24.5439 11.4536 23.8815L10.993 12.8911L13.9904 12.7655L14.451 23.7558C14.4788 24.4183 14.7685 25.0426 15.2566 25.4914C15.7447 25.9402 16.391 26.1767 17.0535 26.149C17.7159 26.1212 18.3402 25.8314 18.789 25.3433C19.2378 24.8553 19.4744 24.2089 19.4466 23.5465L18.986 12.5561L21.9833 12.4305L22.444 23.4208C22.4717 24.0833 22.7615 24.7076 23.2496 25.1564C23.7376 25.6052 24.384 25.8417 25.0465 25.814C25.7089 25.7862 26.3332 25.4964 26.782 25.0083C27.2308 24.5203 27.4673 23.8739 27.4396 23.2115L26.979 12.2211L28.4776 12.1583L29.1058 27.1451L5.12682 28.1502ZM7.12212 16.056L10.1195 15.9304L10.4545 23.9233C10.4712 24.3208 10.3292 24.7086 10.06 25.0015C9.79068 25.2943 9.4161 25.4682 9.01862 25.4848C8.62115 25.5015 8.23333 25.3596 7.9405 25.0903C7.64766 24.821 7.47378 24.4464 7.45713 24.049L7.12212 16.056ZM10.0776 14.9312L7.08024 15.0569L6.99649 13.0586L9.99386 12.933L10.0776 14.9312ZM15.1151 15.721L18.1125 15.5954L18.4475 23.5883C18.4641 23.9858 18.3222 24.3736 18.0529 24.6665C17.7837 24.9593 17.4091 25.1332 17.0116 25.1498C16.6141 25.1665 16.2263 25.0246 15.9335 24.7553C15.6406 24.486 15.4668 24.1114 15.4501 23.714L15.1151 15.721ZM18.0706 14.5962L15.0732 14.7219L14.9895 12.7236L17.9868 12.598L18.0706 14.5962ZM23.1081 15.386L26.1055 15.2604L26.4405 23.2533C26.4571 23.6508 26.3152 24.0386 26.0459 24.3315C25.7766 24.6243 25.4021 24.7982 25.0046 24.8148C24.6071 24.8315 24.2193 24.6896 23.9265 24.4203C23.6336 24.151 23.4598 23.7764 23.4431 23.379L23.1081 15.386ZM26.0636 14.2612L23.0662 14.3869L22.9825 12.3886L25.9798 12.263L26.0636 14.2612ZM2.50044 13.2471L3.49956 13.2052L4.1277 28.192L3.12857 28.2339L2.50044 13.2471ZM32.2078 29.5173L2.23414 30.7736L2.17133 29.2749L32.145 28.0186L32.2078 29.5173ZM31.104 27.0614L30.1049 27.1033L29.4768 12.1164L30.4759 12.0745L31.104 27.0614Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_2800_4311">
        <rect
          width="32"
          height="32"
          fill="currentColor"
          transform="translate(0 1.34002) rotate(-2.4)"
        />
      </clipPath>
    </defs>
  </svg>
);

const CustomUserIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <g clip-path="url(#clip0_2800_4321)">
      <path
        d="M4.52578 6.75078H18.0508C18.5383 6.75078 18.932 6.35703 18.932 5.86953C18.932 5.38203 18.5383 4.98828 18.0508 4.98828H4.52578C4.03828 4.98828 3.64453 5.38203 3.64453 5.86953C3.64453 6.35703 4.03828 6.75078 4.52578 6.75078Z"
        fill="currentColor"
      />
      <path
        d="M4.52578 11.8016H15.1695C15.657 11.8016 16.0508 11.4078 16.0508 10.9203C16.0508 10.4328 15.657 10.0391 15.1695 10.0391H4.52578C4.03828 10.0391 3.64453 10.4328 3.64453 10.9203C3.64453 11.4078 4.03828 11.8016 4.52578 11.8016Z"
        fill="currentColor"
      />
      <path
        d="M10.5383 15.0859H4.52578C4.03828 15.0859 3.64453 15.4797 3.64453 15.9672C3.64453 16.4547 4.03828 16.8484 4.52578 16.8484H10.5383C11.0258 16.8484 11.4195 16.4547 11.4195 15.9672C11.4195 15.4797 11.0258 15.0859 10.5383 15.0859Z"
        fill="currentColor"
      />
      <path
        d="M31.0375 27.3L26.7875 23.05C27.225 22.0937 27.4688 21.0375 27.4688 19.9187C27.4688 16.6437 25.3687 13.8562 22.4438 12.8187V2.7625C22.4438 1.30625 21.2562 0.125 19.8 0.125H2.76875C1.3125 0.125 0.125 1.30625 0.125 2.7625V20.3875C0.125 21.0938 0.4 21.7562 0.9 22.2562L5.1375 26.5C5.6375 27 6.3 27.275 7.00625 27.275H18.2313C18.775 27.4 19.3438 27.475 19.925 27.475C21.0437 27.475 22.0938 27.225 23.05 26.7875L27.3062 31.0437C28.35 32.0875 29.8438 32.2375 31.0375 31.0437C32.1813 29.8937 32.125 28.3875 31.0375 27.3ZM5.39375 24.2687L3.13125 22H5.4V24.2687H5.39375ZM7.15625 25.5125V21.1187C7.15625 20.6312 6.7625 20.2375 6.275 20.2375H1.8875V2.7625C1.8875 2.275 2.28125 1.88125 2.76875 1.88125H19.8125C20.3 1.88125 20.6938 2.275 20.6938 2.7625V12.4125C20.4438 12.3875 20.1875 12.375 19.9312 12.375C15.7687 12.375 12.3813 15.7625 12.3813 19.9187C12.3813 22.1375 13.35 24.125 14.875 25.5062H7.15625V25.5125ZM19.925 25.7062C16.7312 25.7062 14.1375 23.1125 14.1375 19.9187C14.1375 16.725 16.7312 14.1312 19.925 14.1312C23.1187 14.1312 25.7125 16.725 25.7125 19.9187C25.7125 23.1125 23.1187 25.7062 19.925 25.7062ZM29.7938 29.7875C29.4625 30.1187 28.8812 30.1187 28.55 29.7875L24.6 25.8375C25.0625 25.475 25.4813 25.0562 25.8438 24.5937L29.7938 28.5437C30.1562 28.9062 30.1438 29.4437 29.7938 29.7875Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_2800_4321">
        <rect width="32" height="32" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

const ReportTestTubeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
  >
    <g clip-path="url(#clip0_2813_4340)">
      <path
        d="M6.59824 0H25.4008C27.0505 0 28.4002 1.34974 28.4002 3.01816V28.9818C28.4002 30.6315 27.0505 32 25.4008 32H6.59824C4.94856 32 3.58008 30.6315 3.58008 28.9818V3.01816C3.58008 1.34974 4.94856 0 6.59824 0ZM20.6392 18.7838H23.4325C23.8449 18.7838 24.1823 19.1213 24.1823 19.5337V28.7569C24.1823 29.1693 23.8449 29.5067 23.4325 29.5067H20.6392C20.2268 29.5067 19.8894 29.1693 19.8894 28.7569V19.5337C19.8894 19.1213 20.2268 18.7838 20.6392 18.7838ZM22.6826 20.2835H21.3891V28.007H22.6826V20.2835ZM8.5666 24.2578H11.3411C11.7535 24.2578 12.0909 24.5952 12.0909 25.0076V28.7569C12.0909 29.1693 11.7535 29.5067 11.3411 29.5067H8.5666C8.15418 29.5067 7.81675 29.1693 7.81675 28.7569V25.0076C7.81675 24.5952 8.15418 24.2578 8.5666 24.2578ZM10.5912 25.7575H9.31646V28.007H10.5912V25.7575ZM14.6029 22.1394H17.3961C17.8085 22.1394 18.146 22.4769 18.146 22.8893V28.7569C18.146 29.1693 17.8085 29.5067 17.3961 29.5067H14.6029C14.1905 29.5067 13.8531 29.1693 13.8531 28.7569V22.8893C13.8531 22.4769 14.1905 22.1394 14.6029 22.1394ZM16.6463 23.6391H15.3528V28.007H16.6463V23.6391ZM8.37914 15.2408C7.96672 15.2408 7.62929 15.5782 7.62929 15.9906C7.62929 16.403 7.96672 16.7405 8.37914 16.7405H23.6012C24.0136 16.7405 24.351 16.403 24.351 15.9906C24.351 15.5782 24.0136 15.2408 23.6012 15.2408H8.37914ZM8.37914 10.9291C7.96672 10.9291 7.62929 11.2666 7.62929 11.679C7.62929 12.0914 7.96672 12.4288 8.37914 12.4288H23.6012C24.0136 12.4288 24.351 12.0914 24.351 11.679C24.351 11.2666 24.0136 10.9291 23.6012 10.9291H8.37914ZM8.37914 6.61746C7.96672 6.61746 7.62929 6.95489 7.62929 7.36731C7.62929 7.77973 7.96672 8.11716 8.37914 8.11716H23.6012C24.0136 8.11716 24.351 7.77973 24.351 7.36731C24.351 6.95489 24.0136 6.61746 23.6012 6.61746H8.37914ZM25.4008 1.49971H6.59824C5.7734 1.49971 5.07979 2.17458 5.07979 3.01816V28.9818C5.07979 29.8067 5.7734 30.5003 6.59824 30.5003H25.4008C26.2257 30.5003 26.9005 29.8067 26.9005 28.9818V3.01816C26.9005 2.17458 26.2257 1.49971 25.4008 1.49971Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_2813_4340">
        <rect width="32" height="32" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

const ReviewTestTubeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <mask
      id="mask0_2813_4344"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="32"
      height="32"
    >
      <path
        d="M31.6953 0.683998H0.0742817V31.375H31.6953V0.683998Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_2813_4344)">
      <path
        d="M29.6562 23.5333V4.70789C29.6562 3.52359 28.657 2.55335 27.4356 2.55335H23.9603M15.7639 27.5156H27.4356C28.657 27.5156 29.6562 26.5454 29.6562 25.3593V18.3215M14.2117 2.55335H10.7347C9.51328 2.55335 8.51413 3.52359 8.51413 4.70789V15.2104"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.1493 20.0967C25.7171 18.3144 23.8797 17.2082 22.0423 17.6262C20.2067 18.0442 19.0675 19.83 19.498 21.6124C19.9284 23.3965 21.7676 24.5026 23.6032 24.083C25.4406 23.6649 26.5798 21.8809 26.1493 20.0967Z"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.6797 8.39062H11.663"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.6797 11.5195H14.3737"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.041 20.9942L23.2378 21.7266L21.6051 19.9833"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.4463 1.28326H14.723C14.4413 1.28326 14.2103 1.50751 14.2103 1.78115V3.41233C14.2103 3.68585 14.4413 3.91016 14.723 3.91016H23.4463C23.728 3.91016 23.959 3.68585 23.959 3.41233V1.78115C23.959 1.50751 23.728 1.28326 23.4463 1.28326Z"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.6797 14.6445H16.1323"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.34438 17.9908C18.7185 14.8066 18.6398 30.7734 11.0698 30.7734H9.34438H7.61721C0.0472423 30.7734 -0.0315011 14.8066 9.34265 17.9908H9.34438Z"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.34555 17.9961C9.3298 17.9944 9.22308 14.9206 12.6406 15.0821C12.4604 16.2544 12.0001 17.1278 11.176 17.5985"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.34242 17.9961C9.34242 17.9961 9.56469 13.2622 4.26946 13.5138C4.57573 15.4915 5.39819 16.9137 6.90482 17.578"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.6562 15.9258V15.9141"
        stroke="currentColor"
        stroke-width="1.09714"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);

const steps = [
  {
    id: 1,
    title: "Collect Your Sample",
    desc: "Use an at-home cheek swab to collect your gene.",
    icon: CustomTestTubeIcon,
  },
  {
    id: 2,
    title: "Constant Lab Analysis",
    desc: "Our lab analyzes key SNPs and polygenic markers linked to performance, nutrition, and recovery.",
    icon: CustomUserIcon,
  },
  {
    id: 3,
    title: "Receive Your Report",
    desc: "Get a detailed, easy-to-understand report explaining actionable steps based on your unique genetics.",
    icon: ReportTestTubeIcon,
  },
  {
    id: 4,
    title: "Personalized 1:1 Nutrition Review",
    desc: "Meet one-on-one with a certified nutrition expert to review your results and receive tailored guidance.",
    icon: ReviewTestTubeIcon,
  },
];

const SingleTestHowItsWork = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch gene test product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${BACKEND_URL}/api/products?productIds=${GENE_TEST_PRODUCT_ID}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status}`);
        }

        const data = await response.json();

        if (data.success && data.products && data.products.length > 0) {
          setProduct(data.products[0]);
        } else {
          throw new Error("Product not found");
        }
      } catch (err) {
        console.error("Error fetching gene test product:", err);
        // Fallback to default data if API fails
        setProduct({
          productId: GENE_TEST_PRODUCT_ID,
          name: "Gene Test: Unlock Your Genetic Potential",
          description: "",
          amount: 200.0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleOrderTest = () => {
    if (!product) {
      console.error("Product not loaded yet");
      return;
    }

    // Store gene test product data in localStorage for checkout
    const geneTestData = {
      source: "gene-test",
      productName: product.name || "Gene Test: Unlock Your Genetic Potential",
      description: product.description || "",
      stripeProductId: product.productId || GENE_TEST_PRODUCT_ID,
      stripePriceId:
        product.prices && product.prices.length > 0
          ? product.prices[0].priceId
          : null,
      amount:
        product.prices && product.prices.length > 0
          ? product.prices[0].amount
          : 200.0,
      images: product.images || [],
    };

    console.log("🧬 Gene Test Product Data:", geneTestData);
    localStorage.setItem("geneTestCheckoutData", JSON.stringify(geneTestData));

    // Navigate to gene test checkout page
    navigate("/gene-test/checkout");
  };

  return (
    <section className="py-12 bg-white md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-start gap-4 md:gap-8">
        {/* Left: Heading + CTA */}
        <div className="flex flex-col gap-6 justify-between items-start md:min-h-[500px] h-full group">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#252525]  ">How It Works</h2>
            <p className="font-['Inter'] text-[16px] leading-[26px] md:text-[16px] md:leading-[29px] text-black max-w-[520px] ">
              Get clarity on your body’s unique needs with advanced genetic
              insights. Optimize performance, improve health, and prevent issues
              before they start.
            </p>
          </div>
          <button
            className="btn_primary disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleOrderTest}
            disabled={loading || !product}
          >
            Order Your Test
          </button>
        </div>

        {/* Right: Steps Grid */}
        <div className="grid   grid-cols-1 gap-4 w-full sm:grid-cols-2 md:gap-5 max-w-[680px]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group rounded-[16px] border border-[#dedede] bg-[#f7f7f7] opacity-90 p-6 md:p-7 flex flex-col gap-4 shadow-sm transition-all duration-200 hover:border-[#0d8360] hover:bg-[#0d8360] hover:opacity-100 hover:-rotate-2"
            >
              <div className="relative w-6 h-6">
                <step.icon className="w-6 h-6 text-black transition-colors duration-200 group-hover:text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="!text-[#000] transition-colors duration-200 group-hover:!text-white">
                  {step.id}. {step.title}
                </h5>
                <p className="!text-[#000] transition-colors duration-200 description group-hover:!text-white">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleTestHowItsWork;
