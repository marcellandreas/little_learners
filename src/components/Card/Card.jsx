const Card = ({ title, icon, description }) => {
  return (
    <section className="flex p-10 md:p-[50px] 2xl:p-[60px] flex-col gap-10 md:gap-[50px] 2xl:gap-[60px] rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0px_1px_#1E1E1E]">
      <div className="flex items-center">
        <h3 className="flex-1 text-grey-10 font-raleway text-3xl md:text-4xl 2xl:text-[48px] 2xl:leading-[130%] font-bold">
          {title}
        </h3>
        <img src={icon} className=" h-auto w-auto" alt={title} />
      </div>
      <p className="text-grey-20  font-outfit text-base 2xl:text-xl font-medium  ">
        {description}
      </p>
    </section>
  );
};

export default Card;
