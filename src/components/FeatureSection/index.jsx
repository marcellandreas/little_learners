import React from "react";

const FeatureSection = ({ title, subtitle, description }) => {
  return (
    <section className="flex flex-col items-center lg:gap-[20px] gap-[10px] self-stretch">
      <div className="py-2 px-[14px] text-center rounded-md border-2">
        {subtitle}
      </div>
      <h4 className="text-[38px] md:text-[48px] lg:text-[58px] font-raleway text-center text-grey-10 font-bold">
        {title}
      </h4>
      <p className="text-grey-20 md:w-3/5 lg:text-xl font-outfit text-center text-base font-medium">
        {description}
      </p>
    </section>
  );
};

export default FeatureSection;
