import Image from "next/image";
import React from "react";
import hero from "../../public/assets/images/hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt=""
                src={hero}
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={800}
              />
            </div>

            <div className="space-between flex flex-col gap-10 lg:py-24">
              <div>
                <h2 className="text-[2.25rem] font-bold">
                  Find & Book Appointment with the Physician you need.
                </h2>

                <p className="mt-4 font-semibold text-gray-600">
                  Access quality healthcare with our dedicated physicians, even
                  if you don't have insurance. We're here to provide affordable,
                  compassionate care for everyone.
                </p>
              </div>
              <div>
                {" "}
                <Button className="mt-4 h-[50px] text-xl md:w-1/4">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
