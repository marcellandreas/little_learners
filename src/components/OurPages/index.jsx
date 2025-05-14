import React from "react";
import { SubContainer } from "../../UI/SubContainer";

const CardPages = () => {
  return (
    <section className="p-10  2xl:p-20 md:p-[60px] flex flex-col gap-10 rounded-xl border-2 border-grey-15 shadow-[6px_6px_0px_2px_#1E1E1E] col-span-12 md:col-span-6">
      <article className="flex flex-col justify-center gap-[30px]">
        <div className="flex flex-col justify-center gap-5 self-stretch">
          <h1 className=" text-center text-grey-10 font-raleway font-bold text-[28px] md:text-[34px] 2xl:text-[48px]">
            About us
          </h1>
          <p className="flex h-5 items-center justify-center gap-[10px] self-stretch">
            {[1, 2, 3, 4, 5].map((item, i, arr) => (
              <div
                key={`${item}-${i}`}
                className="p-[6px] bg-orange-65 relative  flex items-center justify-center "
              >
                <span className="w-10 h-[2px] bg-black"></span>
                {i === 0 ? (
                  <div className=" absolute left-0 w-4 h-4 rounded-full bg-white border" />
                ) : (
                  ""
                )}
                {i === arr.length - 1 ? (
                  <div className=" absolute right-0 w-4 h-4 rounded-full bg-white border" />
                ) : (
                  ""
                )}
              </div>
            ))}
          </p>
        </div>
        <p className=" text-center text-grey-30 font-outfit text-base font-medium">
          Discover our Mission, Values, and our unwavering commitment to
          providing the best learning experience for your child. Learn about our
          passionate educators and our engaging approach to early education.
        </p>
      </article>
      <button className=" md:py-[18px] py-4 rounded-[10px] border-2 border-grey-15 bg-orange-90 shadow-[4px_4px_0px_2px_#1E1E1E] ">
        <p className=" text-grey-20 text-center font-outfit text-base md:text-lg font-medium 2xl:text-xl">
          Learn More
        </p>
      </button>
    </section>
  );
};

const OurPages = () => {
  return (
    <section className="flex flex-col 2xl:gap-[100px] md:gap-[80px] gap-[50px] items-start col-span-12">
      <SubContainer
        heading="Explore More"
        title="Navigate through our Pages"
        description="Your gateway to discovering a wealth of valuable information about our
      kindergarten school, Feel free to explore and learn more about the
      enriching experiences that await your child at our kindergarten school"
      />
      <section className="grid grid-cols-12 gap-10 2xl:gap-[50px]">
        <CardPages />
        <CardPages />
        <CardPages />
        <CardPages />
      </section>
    </section>
  );
};

export default OurPages;
