import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const [year, setYear] = useState(2023);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <div className="rounded-div px-10 py-10 ">
      <div className="max-w-lg mx-auto text-primary flex flex-col gap-5">
        <div className="flex flex-col items-center text-center justify-between gap-6 md:gap-10 md:flex-row ">
          <div className="flex flex-col gap-2">
            <div className="text-base font-semibold cursor-pointer">
              SUPPORT
            </div>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li className="cursor-pointer">HELP CENTER</li>
              <li className="cursor-pointer">CONTACT US</li>
              <li className="cursor-pointer">API STATUS</li>
              <li className="cursor-pointer">DOCUMENTATION</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-base font-semibold cursor-pointer">INFO</div>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li className="cursor-pointer">ABOUT US</li>
              <li className="cursor-pointer">CAREERS</li>
              <li className="cursor-pointer">INVEST</li>
              <li className="cursor-pointer">LEGAL</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center text-accent justify-center gap-10  md:gap-0 md:justify-around md:px-20">
          <FaInstagram className="w-6 h-6 cursor-pointer" />
          <FaTiktok className="w-6 h-6 cursor-pointer" />
          <FaTwitter className="w-6 h-6 cursor-pointer" />
          <FaFacebook className="w-6 h-6 cursor-pointer" />
          <FaGithub className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="text-center text-sm md:text-base">
          &#169; {year} Anton Roy. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
