import React from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const MenuFooter = [
    {
      id: 1,
      Title: "Home",
      content: ["Features", "Our Testimonials", "FAQ"],
    },
    {
      id: 2,
      Title: "About Us",
      content: [
        "Our Mission",
        "Our Vission",
        "Awards and Recognitions",
        "History",
        "Teachers",
      ],
    },
    {
      id: 3,
      Title: "Academics",
      content: ["Special Features", "Gallery"],
    },
    {
      id: 4,
      Title: "Contact Us",
      content: ["Information", "Map & Direction"],
    },
  ];

  return (
    <footer className="container md:w-full w-[95%] mx-auto px-6 md:px-20 py-10 md:py-20 font-outfit border border-grey-15 rounded-xl shadow-xl">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {/* Left Side */}
        <section className="md:w-1/2 flex flex-col gap-10">
          <article className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="Little Learners Logo"
                className="w-8 h-8"
              />
              <p className="text-xl font-semibold">Little Learners</p>
            </Link>
            <p className="text-base md:text-lg text-gray-700">
              We believe in the power of play to foster creativity,
              <br />
              problem-solving skills, and imagination.
            </p>
          </article>

          <article className="flex flex-col gap-4 text-gray-800">
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              <p className="text-base md:text-xl font-medium">
                hello@littlelearners.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PhoneArrowDownLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              <p className="text-base md:text-xl font-medium">
                +62 812-3456-7890
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              <p className="text-base md:text-xl font-medium">
                Jl. Belajar No. 123, Jakarta
              </p>
            </div>
          </article>
        </section>

        {/* Right Side */}
        <section className="md:w-1/2 flex  justify-around flex-wrap md:justify-between gap-6 ">
          {MenuFooter.map((section) => (
            <div key={section.id} className="flex flex-col gap-4 min-w-[120px]">
              <p className="text-lg font-semibold text-gray-900 cursor-pointer">
                {section.Title}
              </p>
              <div className="flex flex-col gap-2 text-base text-gray-600">
                {section.content.map((item, index) => (
                  <p
                    key={`${section.id}-${index}`}
                    className="hover:text-blue-500 transition cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
