"use client";

import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import dynamic from "next/dynamic";

// ✅ Dynamically load AnimationLottie (client-only)
const AnimationLottie = dynamic(() => import("../../helper/animation-lottie"), {
  ssr: false,
});

// ✅ Optional: GlowCard can also be dynamically loaded if it uses client hooks
const GlowCard = dynamic(() => import("../../helper/glow-card"), {
  ssr: false,
});

// ✅ Load the Lottie animation JSON on client side
import lottieFile from "../../../assets/lottie/study.json";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-x-8 gap-y-3 px-3 py-5">
                      <div className="flex items-center gap-x-4">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-1 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base text-[#d3d8e8]">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-base sm:text-lg font-medium text-green-400">
                          CGPA/Percentage: {education.cgpa}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
