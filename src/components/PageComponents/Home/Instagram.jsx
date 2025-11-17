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

const instagramPosts = [
  {
    type: "video",
    username: "customfitsf",
    image: instagramPost1,
  },
  {
    type: "image",
    username: "eatuncracked",
    image: instagramPost2,
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost3,
  },
  {
    type: "image",
    username: "companyjarvis",
    image: instagramPost4,
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost5,
  },
  {
    type: "image",
    username: "companyjarvis",
    image: instagramPost6,
  },
];

const Instagram = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="px-4 py-12 bg-white md:px-8 md:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <h2 className="font-funnel font-medium text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[56px] text-[#010907] mb-8 md:mb-10 lg:mb-12">
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
          <CarouselContent className="-ml-2 md:-ml-4">
            {instagramPosts.map((post, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-[320px] lg:basis-[300px]"
              >
                <div className="w-full h-[480px] sm:h-[500px] md:h-[520px] lg:h-[533px] rounded-lg overflow-hidden relative group cursor-pointer">
                  {/* Image */}
                  <img
                    src={post.image}
                    alt={`Instagram post by ${post.username}`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/40 group-hover:opacity-100">
                    <InstagramIcon className="w-10 h-10 text-white md:w-12 md:h-12" />
                  </div>

                  {/* Profile Info */}
                  <div className="flex absolute top-3 left-3 md:top-4 md:left-4 gap-2 items-center px-2.5 py-1.5 md:px-3 md:py-2 rounded-full backdrop-blur-sm bg-white/90">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-linear-to-br from-[#0d8360] to-[#042b24] flex items-center justify-center">
                      <InstagramIcon className="w-3 h-3 text-white md:w-4 md:h-4" />
                    </div>
                    <span className="font-inter font-semibold text-[12px] md:text-[14px] text-[#010907]">
                      {post.username}
                    </span>
                  </div>

                  {/* Video indicator */}
                  {post.type === "video" && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 rounded-full backdrop-blur-sm bg-black/60">
                      <div className="w-0 h-0 border-l-[6px] md:border-l-8 border-l-white border-y-4 md:border-y-[6px] border-y-transparent ml-0.5 md:ml-1" />
                    </div>
                  )}
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
