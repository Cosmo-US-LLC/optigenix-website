import React from "react";
import AthletesInfo from "@/components/PageComponents/Athletes/AthletesInfo";
import AthleteHero from "@/components/PageComponents/Athletes/AthletesHero";

import athletesImage1 from "@/assets/images/athletes/athletes_img1.webp";
import athletesImage2 from "@/assets/images/athletes/athletes_img2.webp";
import athletesImage3 from "@/assets/images/athletes/athletes_img3.webp";
import athletesImage4 from "@/assets/images/athletes/athletes_img4.webp";
import athletesImage5 from "@/assets/images/athletes/athletes_img5.webp";
import athletesImage6 from "@/assets/images/athletes/athletes_img6.webp";
import athletesImage7 from "@/assets/images/athletes/athletes_img7.webp";
import athletesImage8 from "@/assets/images/athletes/athletes_img8.webp";
import MetaTags from "@/components/PageComponents/MetaTags/MetaTags";

const athletes = [
  {
    image: athletesImage1,
    name: "Seth Buchwalter",
    role: "Marathon runner",
    bio: "Seth is a dedicated marathon runner and trail enthusiast who thrives on pushing his limits over long distances and rugged terrain. His training is built around endurance, mental toughness, and a deep connection to the outdoors. He values consistency, proper recovery, and smart nutrition to fuel his performance. OptiGenix helps Seth maintain his endurance and recovery through personalized nutrition, allowing him to stay strong and recover quickly during both his trail runs and marathon races.",
    cardPosition: "right",
  },
  {
    image: athletesImage2,
    name: "Christopher Middleton Pearson",
    role: "Cross-Country Runner",
    bio: "Christopher is a dedicated cross-country runner for the University of Tennessee, known for his competitive spirit and strong performances. In 2024, he led his team with a 16th-place finish at the Gans Creek Classic, clocking a time of 23:33.8 in the men’s 8k. He made a strong debut at the Tennessee Invitational, placing third with a time of 20:59.8. Christopher's training is focused on pushing his endurance and optimizing recovery to stay sharp for every race. OptiGenix supports Christopher by providing the personalized nutrients and recovery strategies he needs to keep his performance at peak levels throughout the season.",
    cardPosition: "right",
  },
  {
    image: athletesImage3,
    name: "Amber Christina",
    role: "Marathon Runner",
    bio: "Amber is a marathon runner with a passion for staying active no matter where her travels take her. Whether she's running long-distance races or fitting in training during her journeys, Amber embraces the challenge of maintaining peak fitness while on the move. Her approach to training blends endurance, functional fitness, and recovery to stay strong both physically and mentally. OptiGenix supports Amber’s on-the-go lifestyle by providing the right balance of nutrients to keep her fueled and help her recover effectively, no matter where her training takes her.",
    cardPosition: "left",
  },
  {
    image: athletesImage4,
    name: "Yotam Israeli",
    role: "Fitness Trainer",
    bio: "Yotam is the owner of LuxFit, a thriving gym in San Francisco, where he combines his passion for strength training with his commitment to coaching others. As a coach who frequently travels, Yotam understands the importance of maintaining a solid fitness routine no matter where he is. He focuses on building strength, mobility, and recovery for long-term performance. OptiGenix helps Yotam stay at his best by offering tailored nutrition that adapts to his dynamic schedule, ensuring he remains energized and recovery is seamless, whether at home or on the road.",
    cardPosition: "left",
  },
  {
    image: athletesImage5,
    name: "Seth Johnson",
    role: "Track & Field Athlete",
    bio: "Seth is an accomplished track and field athlete, ranked No. 3 in Cal’s men’s heptathlon history and No. 10 in the 60m hurdles. A 2025 USTFCCCA Second-Team All-American and 2024 Pac-12 Decathlon Bronze Medalist, Seth’s training is focused on versatility, combining strength, speed, and endurance for multi-event success. His approach to training is built around consistency, smart recovery, and optimized nutrition. OptiGenix supports Seth by ensuring his body has the right nutrients to recover quickly between intense training sessions and helps him stay at the top of his game across multiple events.",
    cardPosition: "right",
  },
  {
    image: athletesImage6,
    name: "Lindy Mei",
    role: "Personal Trainer",
    bio: "Lindy is a certified personal trainer with expertise in pre and post-natal fitness, blending her passion for movement with a focus on helping others lead healthy, balanced lifestyles. As a travel enthusiast, Lindy incorporates her love for exploration into her training, finding ways to stay active and fit no matter where her journey takes her. She emphasizes functional fitness, wellness, and sustainable habits in her approach. OptiGenix helps Lindy stay consistent with her health and fitness goals, offering personalized support to maintain energy levels and ensure proper recovery during her busy travel and training schedule.",
    cardPosition: "right",
  },
  {
    image: athletesImage7,
    name: "Colette Bottiaux",
    role: "Women’s Fitness Coach",
    bio: "Colette is a women’s fitness coach and trainer who specializes in empowering women to achieve their fitness goals through sustainable and enjoyable training. Her approach emphasizes strength, functional movement, and a healthy lifestyle that extends beyond the gym. Colette is passionate about building a balanced routine that includes proper nutrition, recovery, and mental wellbeing. OptiGenix aligns with Colette’s holistic approach by providing the personalized nutrition she needs to support both her workouts and the well-being of her clients, helping them stay strong and recover quickly.",
    cardPosition: "left",
  },
  {
    image: athletesImage8,
    name: "Gabe Rodriguez",
    role: "Middle-Distance Runner",
    bio: "Gabe is a standout middle-distance runner who has made his mark at Cal, competing in several outdoor meets. He ran a personal best of 3:53.36 in the 1500m at the Mt. SAC Relays and posted strong times in the 800m, including 1:52.61 at the Brutus Hamilton Invitational. Gabe's training is centered around speed, endurance, and precision, with a strong focus on recovery and maintaining peak performance. OptiGenix helps Gabe stay at the top of his game by fueling his energy needs and providing the recovery support necessary for maintaining his competitive edge during both track season and offseason training.",
    cardPosition: "left",
  },
];

function Athletes() {
  return (
    <>
      <MetaTags
        title="How our athletes Maximize Performance with Customized Solutions"
        description="Learn how athletes optimize their performance, training, and recovery with customized health solutions based on genetics and lifestyle insights."
      />
      <AthleteHero />
      {athletes.map((athlete, idx) => (
        <AthletesInfo key={idx} {...athlete} />
      ))}
    </>
  );
}

export default Athletes;
