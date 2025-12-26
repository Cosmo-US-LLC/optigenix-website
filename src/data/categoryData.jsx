// Category page data for Recovery, Physical Performance, and Mental Performance

import icon_1 from "../assets/images/category/category_hero/icon_1.svg";
import icon_2 from "../assets/images/category/category_hero/icon_2.svg";
import icon_3 from "../assets/images/category/category_hero/icon_3.svg";
import scienceImage from "../assets/images/category/category_hero/category_backedby.webp";
// TODO: Add your quiz images here
import quizImageRecovery from "../assets/images/category/recovery_plan/recovery_quiz_cta_img1.webp";
import quizImagePhysical from "../assets/images/category/recovery_plan/recovery_quiz_cta_img2.webp";
import quizImageMental from "../assets/images/category/recovery_plan/recovery_quiz_cta_img3.webp";

import productImage1 from "../assets/images/category/optigenix_product/our_most_trusted_c8.webp";
import productImage2 from "../assets/images/category/optigenix_product/our_most_trusted_c9.webp";
import productImage3 from "../assets/images/category/optigenix_product/our_most_trusted_c10.webp";
import productImage4 from "../assets/images/category/optigenix_product/our_most_trusted_c11.webp";
import productImage5 from "../assets/images/category/optigenix_product/our_most_trusted_c12.webp";
import productImage6 from "../assets/images/category/optigenix_product/our_most_trusted_c13.webp";
import productImage7 from "../assets/images/category/optigenix_product/our_most_trusted_c14.webp";

export const categoryData = {
  recovery: {
    hero: {
      title: "Daily Recovery for Your Whole-Body Wellness",
      subtitle:
        "Clinically formulated blends to restore energy and speed up recovery.",
      uspItems: [
        {
          icon: (
            <img
              src={icon_1}
              alt="Science-Backed"
              className="w-full h-full object-contain"
            />
          ),
          text: "Science-Backed Formulas",
        },
        {
          icon: (
            <img
              src={icon_2}
              alt="Premium Natural"
              className="w-full h-full object-contain"
            />
          ),
          text: "Premium Natural Ingredients",
        },
        {
          icon: (
            <img
              src={icon_3}
              alt="Made in USA"
              className="w-full h-full object-contain"
            />
          ),
          text: `Made in the\n USA`,
        },
      ],
    },
    products: [
      {
        id: "joint-health",
        image: productImage6,
        title: "Joint Health",
        description: "Built for mobility, flexibility, and joint comfort",
        benefits: [
          { icon: "joints", text: "Joint Structure" },
          { icon: "flexibility", text: "Mobility & Flexibility" },
          { icon: "inflammation", text: "Anti-Inflammatory" },
          { icon: "comfort", text: "Daily Comfort" },
        ],
        price: 99.99,
      },
      {
        id: "immune-health",
        image: productImage7,
        title: "Immune Health",
        description:
          "Built for immune response, detox support, and antioxidant defense",
        benefits: [
          { icon: "shield", text: "Immune Boost" },
          { icon: "liver", text: "Liver Support" },
          { icon: "antioxidant", text: "Antioxidant Defense" },
          { icon: "cellular", text: "Cellular Defense" },
        ],
        price: 99.99,
      },
      {
        id: "physical-recovery",
        image: productImage1,
        title: "Physical Recovery",
        description:
          "Built for faster recovery, muscle repair, and performance resilience",
        benefits: [
          { icon: "muscle", text: "Muscle Repair" },
          { icon: "mitochondrial", text: "Mitochondrial Health" },
          { icon: "antioxidant-activity", text: "Antioxidant Activity" },
          { icon: "soreness", text: "Soreness Relief" },
        ],
        price: 99.99,
      },
      {
        id: "sleep",
        image: productImage2,
        title: "Sleep",
        description:
          "Built for deep sleep, calm recovery, and restorative rest",
        benefits: [
          { icon: "deep-sleep", text: "Deep sleep" },
          { icon: "stress", text: "Stress Relief" },
          { icon: "circadian", text: "Circadian rhythm" },
          { icon: "overnight", text: "Overnight Recovery" },
        ],
        price: 99.99,
      },
    ],
    quizTitle: "Want a recovery plan built for your body?",
    quizDescription:
      "Take the quick quiz to discover the supplements your body truly needs to recover, restore energy, and reduce soreness.",
    scienceImage: scienceImage,
    quizImage: quizImageRecovery, // TODO: Replace with quizImageRecovery
  },

  "physical-performance": {
    hero: {
      title: `Feel Your Best,\n Every Single Day`,
      subtitle: "Support the systems that power your recovery",
      uspItems: [
        {
          icon: (
            <img
              src={icon_1}
              alt="Science-Backed"
              className="w-full h-full object-contain"
            />
          ),
          text: "Science-Backed Formulas",
        },
        {
          icon: (
            <img
              src={icon_2}
              alt="Premium Natural"
              className="w-full h-full object-contain"
            />
          ),
          text: "Premium Natural Ingredients",
        },
        {
          icon: (
            <img
              src={icon_3}
              alt="Made in USA"
              className="w-full h-full object-contain"
            />
          ),
          text: "Made in the USA",
        },
      ],
    },
    products: [
      {
        id: "strength",
        image: productImage3,
        title: "Strength",
        description: "Built for muscle growth, power, and resilient strength",
        benefits: [
          { icon: "muscle-strength", text: "Muscle Strength" },
          { icon: "power", text: "Power & Performance" },
          { icon: "bone", text: "Bone Strength" },
          { icon: "resilience", text: "Physical Resilience" },
        ],
        price: 99.99,
      },
      {
        id: "endurance",
        image: productImage4,
        title: "Endurance",
        description:
          "Built for cellular energy, stamina, and sustained performance",
        benefits: [
          { icon: "energy", text: "Sustained Energy" },
          { icon: "stamina", text: "Stamina & Endurance" },
          { icon: "fatigue", text: "Reduce Fatigue" },
          { icon: "recovery-boost", text: "Boost Recovery" },
        ],
        price: 99.99,
      },
    ],
    quizTitle: "Want a physical performance plan built for your body?",
    quizDescription:
      "Take the quick quiz to discover the supplements your body truly needs to recover, restore energy, and reduce soreness.",
    scienceImage: scienceImage,
    quizImage: quizImagePhysical, // TODO: Replace with quizImagePhysical
  },

  "mental-performance": {
    hero: {
      title: `Feel Your Best,\n Every Single Day`,
      subtitle: "Support the systems that power your recovery",
      uspItems: [
        {
          icon: (
            <img
              src={icon_1}
              alt="Science-Backed"
              className="w-full h-full object-contain"
            />
          ),
          text: "Science-Backed Formulas",
        },
        {
          icon: (
            <img
              src={icon_2}
              alt="Premium Natural"
              className="w-full h-full object-contain"
            />
          ),
          text: "Premium Natural Ingredients",
        },
        {
          icon: (
            <img
              src={icon_3}
              alt="Made in USA"
              className="w-full h-full object-contain"
            />
          ),
          text: "Made in the USA",
        },
      ],
    },
    products: [
      {
        id: "focus",
        image: productImage5,
        title: "Focus",
        description: "Built for clarity, focus, and real-world stress",
        benefits: [
          { icon: "mental-clarity", text: "Mental Clarity" },
          { icon: "cognitive", text: "Cognitive Energy" },
          { icon: "stress-balance", text: "Stress Balance" },
          { icon: "sustained-focus", text: "Sustained Focus" },
        ],
        price: 99.99,
      },
    ],
    quizTitle: "Want a mental performance plan built for your body?",
    quizDescription:
      "Take the quick quiz to discover the supplements your body truly needs to recover, restore energy, and reduce soreness.",
    scienceImage: scienceImage,
    quizImage: quizImageMental, // TODO: Replace with quizImageMental
  },
};

// Benefit icons mapping
// Testimonials data - shared across all category pages
export const testimonialsData = [
  {
    review:
      "This is my first time trying OptiGenix. my friend recommended it after seeing her results. The gene-based supplements gave me more energy than I've had in years.\"",
    name: "Adrian Weinberg",
    sport: "Water Polo",
    stars: 5,
    videoThumbnail: null, // Add video thumbnails later
    videoUrl: null,
  },
  {
    review:
      "I always struggled with stress and mood swings. After following my personalized plan, I finally feel calmer and more balanced.",
    name: "Sanil Sharma",
    sport: "Fencer",
    stars: 5,
    videoThumbnail: null,
    videoUrl: null,
  },
  {
    review:
      "Focus at work was impossible for me. The supplements matched to my gene test have completely improved my mental clarity.",
    name: "Christopher Middleton-Pearson",
    sport: "Distance runner",
    stars: 5,
    videoThumbnail: null,
    videoUrl: null,
  },
  {
    review:
      '"I didn\'t realize my vitamin deficiencies were holding me back in recovery. Now, after a few weeks on my tailored supplements"',
    name: "Jenny Wilson",
    sport: "Fencer",
    stars: 5,
    videoThumbnail: null,
    videoUrl: null,
  },
  {
    review:
      "Focus at work was impossible for me. The supplements matched to my gene test have completely improved my mental clarity.",
    name: "Christopher Middleton-Pearson",
    sport: "Distance runner",
    stars: 5,
    videoThumbnail:
      "https://www.figma.com/api/mcp/asset/c7f99041-230e-4ea0-8471-fad0c5987cd7", // From Figma
    videoUrl: null,
  },
];

export const benefitIcons = {
  joints: "🦴",
  flexibility: "🤸",
  inflammation: "🔥",
  comfort: "💆",
  shield: "🛡️",
  liver: "🫀",
  antioxidant: "⚡",
  cellular: "🔬",
  muscle: "💪",
  mitochondrial: "⚙️",
  "antioxidant-activity": "✨",
  soreness: "🎯",
  "deep-sleep": "😴",
  stress: "🧘",
  circadian: "🌙",
  overnight: "🌃",
  "muscle-strength": "💪",
  power: "⚡",
  bone: "🦴",
  resilience: "🏋️",
  energy: "🔋",
  stamina: "🏃",
  fatigue: "😌",
  "recovery-boost": "🔄",
  "mental-clarity": "🧠",
  cognitive: "💡",
  "stress-balance": "☯️",
  "sustained-focus": "🎯",
};
