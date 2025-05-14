const Card = () => {
  return (
    <section className="flex p-10 md:p-[50px] 2xl:p-[60px] flex-col gap-10 md:gap-[50px] 2xl:gap-[60px] rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0px_1px_#1E1E1E]">
      <div className="flex items-center">
        <h3 className="flex-1 text-grey-10 font-raleway text-3xl md:text-4xl 2xl:text-[48px] 2xl:leading-[130%] font-bold">
          Mission
        </h3>
        <img src="/mission.svg" className=" h-auto w-auto" alt="" />
      </div>
      <p className="text-grey-20  font-outfit text-base 2xl:text-xl font-medium  ">
        At Little Learners Academy, our mission is to inspire a passion for
        learning and empower young minds to become confident, compassionate, and
        creative individuals. We strive to create a safe and inclusive space
        where children thrive academically, socially, and emotionally, setting
        the stage for a successful educational journey.
      </p>
    </section>
  );
};

export default Card;
