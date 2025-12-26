// Category page data for Recovery, Physical Performance, and Mental Performance

import icon_1 from "../assets/images/category/category_hero/icon_1.svg";
import icon_2 from "../assets/images/category/category_hero/icon_2.svg";
import icon_3 from "../assets/images/category/category_hero/icon_3.svg";
import scienceImage from "../assets/images/category/category_hero/category_backedby.webp";

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
        image: "/images/products/joint-health.jpg",
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
        image: "/images/products/immune-health.jpg",
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
        image: "/images/products/physical-recovery.jpg",
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
        image: "/images/products/sleep.jpg",
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
        image: "/images/products/strength.jpg",
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
        image: "/images/products/endurance.jpg",
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
        image: "/images/products/focus.jpg",
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
  },
};

// Benefit icons mapping
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
