import React from "react";
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

import video1 from "../../../assets/images/as_seen_on/video1.mp4";
import video2 from "../../../assets/images/as_seen_on/video2.mp4";
import video3 from "../../../assets/images/as_seen_on/video3.mp4";
import video4 from "../../../assets/images/as_seen_on/video4.mp4";
import video5 from "../../../assets/images/as_seen_on/video5.mp4";
import video6 from "../../../assets/images/as_seen_on/video5.mp4";

import thumb1 from "../../../assets/images/as_seen_on/thumb1.webp";
import thumb2 from "../../../assets/images/as_seen_on/thumb2.webp";
import thumb3 from "../../../assets/images/as_seen_on/thumb3.webp";
import thumb4 from "../../../assets/images/as_seen_on/thumb4.webp";
import thumb5 from "../../../assets/images/as_seen_on/thumb5.webp";
import thumb6 from "../../../assets/images/as_seen_on/thumb6.webp";

const instagramPosts = [
  {
    type: "video",
    username: "customfitsf",
    image: instagramPost1,
    profileImage: profileImage1,
    video: video1,
    thumbnail: thumb1,
  },
  {
    type: "video",
    username: "eatuncracked",
    image: instagramPost2,
    profileImage: profileImage2,
    video: video2,
    thumbnail: thumb2,
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost3,
    profileImage: profileImage3,
    video: video3,
    thumbnail: thumb3,
  },
  {
    type: "video",
    username: "companyjarvis",
    image: instagramPost4,
    profileImage: profileImage4,
    video: video4,
    thumbnail: thumb4,
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost5,
    profileImage: profileImage5,
    video: video5,
    thumbnail: thumb5,
  },
  {
    type: "video",
    username: "companyjarvis",
    image: instagramPost6,
    profileImage: profileImage6,
    video: video6,
    thumbnail: thumb6,
  },
];

const Instagram = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const [playingVideo, setPlayingVideo] = React.useState(null);
  const videoRefs = React.useRef({});

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingVideo === index) {
        video.pause();
        setPlayingVideo(null);
        plugin.current.play(); // Resume auto-scroll when video is paused
      } else {
        // Pause any currently playing video
        if (playingVideo !== null) {
          const prevVideo = videoRefs.current[playingVideo];
          if (prevVideo) prevVideo.pause();
        }
        video.play();
        setPlayingVideo(index);
        plugin.current.stop(); // Stop auto-scroll when video is played
      }
    }
  };

  const handleVideoEnd = () => {
    setPlayingVideo(null);
    plugin.current.play(); // Resume auto-scroll when video ends
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto md:px-8 md:py-16 px-4 py-12">
        {/* Header */}
        <h2 className="text-center md:text-left text-[#010907] mb-8 md:mb-10 lg:mb-[48px]">
          As Seen On #Optigenix
        </h2>

        {/* Instagram Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
            {instagramPosts.map((post, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-3 lg:pl-4 basis-[290px] lg:basis-[300px]"
              >
                <div className="w-full h-[460px] md:h-[533px] rounded-[16px] overflow-hidden relative group cursor-pointer">
                  {/* Video Element */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={post.video}
                    className="object-cover absolute inset-0 w-full h-full"
                    loop
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    onClick={() => handleVideoClick(index)}
                  />
                  {/* Thumbnail Overlay (shown when video is paused) */}
                  {playingVideo !== index && (
                    <div
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => handleVideoClick(index)}
                    >
                      <img
                        src={post.thumbnail}
                        alt={`Video thumbnail by ${post.username}`}
                        className="object-cover absolute inset-0 w-full h-full"
                      />
                      {/* Play Button Overlay */}
                      <div className="flex absolute inset-0 justify-center items-center transition-colors bg-black/20 group-hover:bg-black/30">
                        <div className="flex justify-center items-center w-16 h-16 rounded-full backdrop-blur-sm transition-colors md:w-20 md:h-20 bg-black/60 group-hover:bg-black/80">
                          <div className="w-0 h-0 border-l-[12px] md:border-l-[16px] border-l-white border-y-[8px] md:border-y-[12px] border-y-transparent ml-1 md:ml-1.5" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Profile Info */}
                  <div className="absolute top-3 left-3 lg:top-[16px] lg:left-[16px] flex items-center gap-3 lg:gap-[14px] z-10">
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
                  {playingVideo !== index && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 rounded-full backdrop-blur-sm bg-black/60 z-10">
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
