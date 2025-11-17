import React from "react";
import { Instagram as InstagramIcon } from "lucide-react";

const instagramPosts = [
  {
    type: "video",
    username: "customfitsf",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&h=800",
  },
  {
    type: "image",
    username: "eatuncracked",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&h=800",
  },
  {
    type: "video",
    username: "gabeabbes",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&h=800",
  },
  {
    type: "image",
    username: "companyjarvis",
    image:
      "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=600&h=800",
  },
  {
    type: "video",
    username: "gabeabbes",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&h=800",
  },
  {
    type: "image",
    username: "companyjarvis",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&h=800",
  },
];

const Instagram = () => {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-[1280px] px-4 md:px-8 mx-auto">
        {/* Header */}
        <h2 className="font-['Funnel_Display'] font-medium text-[48px] leading-[56px] text-[#010907] mb-12">
          As Seen On #Optigenix
        </h2>

        {/* Instagram Grid */}
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[533px] rounded-lg overflow-hidden relative group cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={`Instagram post by ${post.username}`}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/40 group-hover:opacity-100">
                <InstagramIcon className="w-12 h-12 text-white" />
              </div>

              {/* Profile Info */}
              <div className="flex absolute top-4 left-4 gap-2 items-center px-3 py-2 rounded-full backdrop-blur-sm bg-white/90">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0d8360] to-[#042b24] flex items-center justify-center">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-['Inter'] font-semibold text-[14px] text-[#010907]">
                  {post.username}
                </span>
              </div>

              {/* Video indicator */}
              {post.type === "video" && (
                <div className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm bg-black/60">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
