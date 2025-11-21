import React from "react";
import { Instagram as InstagramIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import instagramPost1 from "../../../assets/images/as_seen_on/as_seen_as_c1.webp";
import instagramPost2 from "../../../assets/images/as_seen_on/as_seen_as_c2.webp";
import instagramPost3 from "../../../assets/images/as_seen_on/as_seen_as_c3.webp";
import instagramPost4 from "../../../assets/images/as_seen_on/as_seen_as_c4.webp";
import instagramPost5 from "../../../assets/images/as_seen_on/as_seen_as_c5.webp";
import instagramPost6 from "../../../assets/images/as_seen_on/as_seen_as_c6.webp";

import profileImage1 from "../../../assets/images/as_seen_on/as_seen_as_profile_1.webp";
import profileImage2 from "../../../assets/images/as_seen_on/as_seen_as_profile_2.webp";
import profileImage3 from "../../../assets/images/as_seen_on/as_seen_as_profile_3.webp";
import profileImage4 from "../../../assets/images/as_seen_on/as_seen_as_profile_4.webp";
import profileImage5 from "../../../assets/images/as_seen_on/as_seen_as_profile_5.webp";
import profileImage6 from "../../../assets/images/as_seen_on/as_seen_as_profile_6.webp";

const instagramPosts = [
  {
    type: "video",
    username: "customfitsf",
    image: instagramPost1,
    profileImage: profileImage1,
  },
  {
    type: "image",
    username: "eatuncracked",
    image: instagramPost2,
    profileImage: profileImage2,
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost3,
    profileImage: profileImage3,
  },
  {
    type: "image",
    username: "companyjarvis",
    image: instagramPost4,
    profileImage: profileImage4,
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost5,
    profileImage: profileImage5,
  },
  {
    type: "image",
    username: "companyjarvis",
    image: instagramPost6,
    profileImage: profileImage6,
  },
];

const Instagram = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto md:px-8 md:py-16 px-4 py-12">
        {/* Header */}
        <h2 className="font-['Funnel_Display'] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[56px] text-[#010907] mb-8 md:mb-10 lg:mb-[48px]">
          As Seen On #Optigenix
        </h2>

        {/* Instagram Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
            {instagramPosts.map((post, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-3 lg:pl-4 basis-[290px] lg:basis-[300px]"
              >
                <div className="w-full h-[460px] md:h-[533px] rounded-[16px] overflow-hidden relative group cursor-pointer">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={post.image}
                      alt={`Instagram post by ${post.username}`}
                      className="object-cover absolute inset-0 w-full h-full transition-transform duration-300"
                    />
                    {/* Subtle Overlay */}
                    {/* <div className="absolute inset-0 bg-black/10" /> */}
                  </div>

                  {/* Hover Overlay with Instagram Icon */}
                  <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/40 group-hover:opacity-100">
                    <InstagramIcon className="w-10 h-10 text-white md:w-12 md:h-12" />
                  </div>

                  {/* Profile Info */}
                  <div className="absolute top-3 left-3 lg:top-[16px] lg:left-[16px] flex items-center gap-3 lg:gap-[14px]">
                    {/* Circular Profile Image */}
                    <img
                      src={post.profileImage}
                      alt={`${post.username}'s profile`}
                      className="w-10 h-10 lg:w-[48px] lg:h-[48px] rounded-full object-cover"
                    />
                    {/* Username */}
                    <span className="font-inter font-semibold text-[14px] lg:text-[16px] text-white tracking-[-0.72px]">
                      {post.username}
                    </span>
                  </div>

                  {/* Video indicator */}
                  {/* {post.type === "video" && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 rounded-full backdrop-blur-sm bg-black/60">
                      <div className="w-0 h-0 border-l-[6px] md:border-l-8 border-l-white border-y-4 md:border-y-[6px] border-y-transparent ml-0.5 md:ml-1" />
                    </div>
                  )} */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Instagram;
