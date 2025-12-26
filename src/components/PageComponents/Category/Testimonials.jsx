import React from "react";

// Star icon component (filled)
const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#0d8360"
    />
  </svg>
);

// Play icon for video testimonials
const PlayIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 5.14001V19.14L19 12.14L8 5.14001Z" fill="#0d8360" />
  </svg>
);

// Individual testimonial card (written review)
const TestimonialCard = ({ review, name, sport, stars = 5 }) => {
  return (
    <div className="bg-white border border-[rgba(3,26,19,0.1)] flex flex-col gap-[24px] px-[24px] py-[32px] rounded-[24px] w-full">
      <div className="flex flex-col gap-[12px] w-full">
        {/* Stars */}
        <div className="flex items-center">
          {[...Array(stars)].map((_, index) => (
            <div key={index} className="w-[24px] h-[24px]">
              <StarIcon />
            </div>
          ))}
        </div>
        {/* Review text */}
        <p className="font-inter font-normal text-[20px] leading-[28px] text-[#010907] tracking-[-0.1px] m-0">
          {review}
        </p>
      </div>
      {/* Name and sport */}
      <div className="flex flex-col gap-[8px] h-[56px] w-full">
        <p className="font-funnel font-bold text-[20px] leading-[24px] text-[#010907] tracking-[-0.1px] m-0">
          {name}
        </p>
        <p className="font-inter font-normal text-[16px] leading-[24px] text-[#010907] m-0">
          {sport}
        </p>
      </div>
    </div>
  );
};

// Video testimonial placeholder
const VideoTestimonial = ({ thumbnail }) => {
  return (
    <div className="relative w-full h-[330px] rounded-[24px] overflow-hidden cursor-pointer group">
      {/* Video thumbnail or placeholder */}
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="Video testimonial"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-[#f8fffd]" />
      )}
      {/* Play button */}
      <div className="absolute bottom-[16px] right-[16px] bg-white w-[48px] h-[48px] rounded-[32px] flex items-center justify-center p-[20px] transition-transform duration-300 group-hover:scale-110">
        <PlayIcon />
      </div>
    </div>
  );
};

// Column component (alternates between review top/video bottom or vice versa)
const TestimonialColumn = ({ testimonial, videoFirst = false }) => {
  return (
    <div className="flex flex-col gap-[16px] w-[285px] shrink-0">
      {videoFirst ? (
        <>
          <VideoTestimonial thumbnail={testimonial.videoThumbnail} />
          <TestimonialCard
            review={testimonial.review}
            name={testimonial.name}
            sport={testimonial.sport}
            stars={testimonial.stars}
          />
        </>
      ) : (
        <>
          <TestimonialCard
            review={testimonial.review}
            name={testimonial.name}
            sport={testimonial.sport}
            stars={testimonial.stars}
          />
          <VideoTestimonial thumbnail={testimonial.videoThumbnail} />
        </>
      )}
    </div>
  );
};

const Testimonials = ({ testimonials }) => {
  return (
    <div className="bg-[#f7f7f7] flex flex-col gap-[48px] items-center px-[60px] py-[80px] w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-[12px] items-center">
        {/* Title */}
        <h2 className="font-funnel font-semibold text-[48px] leading-[48px] text-[#010907] capitalize text-center m-0">
          What Our Users Are Saying
        </h2>
        {/* Rating */}
        <div className="flex gap-[8px] items-center">
          {/* Stars for overall rating */}
          <div className="flex items-center gap-[2px]">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-[18px] h-[18px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z"
                    fill="#FF9500"
                  />
                </svg>
              </div>
            ))}
          </div>
          {/* Rating text */}
          <p className="font-inter font-normal text-[18px] leading-[26px] text-[#02110e] m-0">
            <span className="text-[#0d8360]">4.9 out of 5</span>
            <span> based on </span>
            <span>150+ Athletes Reviews</span>
          </p>
        </div>
      </div>

      {/* Scrolling carousel container */}
      <div className="relative w-full">
        {/* Scroll wrapper with animation */}
        <div className="flex gap-[24px] animate-scroll-left">
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialColumn
              key={index}
              testimonial={testimonial}
              videoFirst={index % 2 !== 0} // Alternate pattern
            />
          ))}
        </div>
      </div>

      {/* CSS Animation for scrolling */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
