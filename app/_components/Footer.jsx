import React from "react";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-gray text-xs font-semibold">
            More ways to find a physician:{" "}
            <span className="underline hover:text-primary">
              Find a community care clinic{" "}
            </span>
            near you.
          </p>
          <p className="text-gray text-xs font-semibold">
            If you are having emergency situation, please call 911.
          </p>
        </div>

        <div className="my-5 h-[1px] w-full bg-neutral-700" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-gray text-xs font-semibold">
            Copright @ 2024 New Hope nonprofit. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-gray text-xs font-semibold">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
