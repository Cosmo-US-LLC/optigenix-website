import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Instagram as InstagramIcon, MoveLeft, MoveRight } from "lucide-react";
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

import video1 from "../../../assets/images/as_seen_on/video_1.mp4";
import video2 from "../../../assets/images/as_seen_on/video_2.mp4";
import video3 from "../../../assets/images/as_seen_on/video_3.mp4";
import video4 from "../../../assets/images/as_seen_on/video_4.mp4";
import video5 from "../../../assets/images/as_seen_on/video_5.mp4";
import video6 from "../../../assets/images/as_seen_on/video_6.mp4";

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
    instagramLink:
      "https://www.instagram.com/reel/DQUmFTogb6E/?igsh=cjB5MHd4cjJtYnAx",
  },
  {
    type: "video",
    username: "eatuncracked",
    image: instagramPost2,
    profileImage: profileImage2,
    video: video2,
    thumbnail: thumb2,
    instagramLink:
      "https://www.instagram.com/reel/DMIxuHQv920/?igsh=MTNtMHJkNWMwd2lhag==",
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost3,
    profileImage: profileImage3,
    video: video3,
    thumbnail: thumb3,
    instagramLink:
      "https://www.instagram.com/reel/DNgEVImxSXt/?igsh=MW1jZzg5OTg3cDRlaQ==",
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost4,
    profileImage: profileImage3,
    video: video4,
    thumbnail: thumb4,
    instagramLink:
      "https://www.instagram.com/reel/DOG_HSmD8J0/?igsh=MXNnbGppaGRxa2d6Ng==",
  },
  {
    type: "video",
    username: "gabeabbes",
    image: instagramPost5,
    profileImage: profileImage3,
    video: video5,
    thumbnail: thumb5,
    instagramLink:
      "https://www.instagram.com/reel/DNlX40oRKFo/?igsh=MTRnNWx3dXZ3Y2lmaQ==",
  },
  {
    type: "video",
    username: "companyjarvis",
    image: instagramPost6,
    profileImage: profileImage4,
    video: video6,
    thumbnail: thumb6,
    instagramLink:
      "https://www.instagram.com/reel/DG1TKUcyUfF/?igsh=NGRpdmtvdWl5eHE1",
  },
];

const Instagram = () => {
  const [api, setApi] = React.useState();
  const [playingVideo, setPlayingVideo] = React.useState(null);
  const videoRefs = React.useRef({});

  const handleOpenInstagram = (link) => {
    if (!link) return;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const playVideo = (index) => {
    // Pause all videos first
    Object.values(videoRefs.current).forEach((video) => {
      if (video) video.pause();
    });

    const video = videoRefs.current[index];
    if (video) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
      setPlayingVideo(index);
    }
  };

  const handleVideoEnd = () => {
    const currentIndex = playingVideo;
    if (currentIndex === null || !api) return;

    // Calculate next index (with loop support)
    const nextIndex = (currentIndex + 1) % instagramPosts.length;

    // Scroll to next slide - the 'select' event will handle playing the video
    api.scrollTo(nextIndex);
  };

  // Initialize first video on mount
  React.useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (!firstVideo) return;

    const startFirstVideo = () => {
      playVideo(0);
    };

    // Small delay to ensure video is ready
    const timer = setTimeout(startFirstVideo, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle carousel scroll - play video when slide becomes active
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      playVideo(selectedIndex);
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto md:px-8 md:py-16 px-4 py-12">
        {/* Header + Controls */}
        <div className="flex items-center justify-between gap-4 mb-8 md:mb-10 lg:mb-[48px]">
          <h2 className="text-center md:text-left text-[#010907] flex-1">
            As Seen On #Optigenix
          </h2>
          <div className="hidden gap-3 items-center md:flex">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-11 h-11 rounded-full border border-[#010907] flex items-center justify-center hover:bg-[#010907] hover:text-white transition-colors"
              aria-label="Previous"
            >
              <MoveLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="w-11 h-11 rounded-full border border-[#010907] flex items-center justify-center hover:bg-[#010907] hover:text-white transition-colors"
              aria-label="Next"
            >
              <MoveRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Instagram Carousel */}
        <Carousel
          setApi={setApi}
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
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    onClick={() => handleOpenInstagram(post.instagramLink)}
                  />
                  {/* Thumbnail Overlay (shown when video is paused) */}
                  {playingVideo !== index && (
                    <div
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => handleOpenInstagram(post.instagramLink)}
                    >
                      <img
                        src={post.thumbnail}
                        alt={`Video thumbnail by ${post.username}`}
                        className="object-cover absolute inset-0 w-full h-full"
                      />
                      {/* Play Button Overlay */}
                      <div className="flex absolute inset-0 justify-center items-center transition-colors bg-black/20 group-hover:bg-black/30">
                        <div className="flex justify-center items-center w-16 h-16 rounded-full opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 md:w-20 md:h-20 bg-black/60 group-hover:bg-black/80">
                          <InstagramIcon className="w-7 h-7 text-white md:w-8 md:h-8" />
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

                  {/* Sound indicator (videos are muted) */}
                  {/* <div className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 md:p-2 rounded-full backdrop-blur-sm bg-black/60 z-10 flex items-center gap-1">
                    <VolumeX className="w-4 h-4 text-white md:w-5 md:h-5" />
                  </div> */}
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
