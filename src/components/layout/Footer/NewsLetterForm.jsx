import React, { useState } from 'react'

const NewsLetterForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Newsletter subscription:", formData);
        // Handle newsletter subscription
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-4 md:p-5 lg:p-[24px] space-y-4 md:space-y-5 lg:space-y-[20px] rounded-[16px] backdrop-blur-xl bg-[rgba(248,255,253,0.2)]"
        >
            {/* Form Fields */}
            <div className="space-y-3 lg:space-y-[12px]">

                {/* Email Field */}
                <div className="space-y-2 lg:space-y-[8px]">
                    <label className="font-inter text-[12px] md:text-[14px] leading-[24px] text-white block">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        className="font-inter w-full bg-[rgba(248,255,253,0.1)] backdrop-blur-xl border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[4px] px-3 py-2 text-[12px] md:text-[14px] leading-[22px] text-white placeholder:text-white/80 focus:outline-none focus:border-white/30 transition-colors"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="cursor-pointer font-['Funnel_Display'] w-full bg-[#0d8360] hover:bg-[#0c704d] active:bg-[#0a5c40] transition-all duration-200 text-white text-[14px] md:text-[16px] leading-[24px] px-[19px] py-[10px] rounded-full font-semibold"
            >
                Subscribe Now
            </button>
        </form>
    )
}

export default NewsLetterForm