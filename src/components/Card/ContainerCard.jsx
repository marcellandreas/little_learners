const ContainerCard = ({ className }) => {
  return (
    <section
      className={`flex relative py-[50px] md:pt-[100px] 2xl:pt-[150px] 2xl:px-[120px] md:px-20 px-[30px] flex-col md:flex-row justify-center items-center gap-5 md:gap-[50px] rounded-xl border-2 border-grey-15 shadow-[6px_6px_0px_1px_#1E1E1E] bg-white w-full ${className}`}
    >
      <article className="absolute top-0  left-0 ">
        <img src="/AbstractDesign.svg" alt="abstrak image" />
      </article>
      <div className="flex flex-col items-center md:items-start gap-[10px] self-stretch md:flex-1">
        <button className="flex py-2 2xl:py-[10px] px-4 2xl:px-[20px] items-start gap-[10px] rounded-md border-2 border-grey-15 bg-white">
          <span className=" text-grey-20 text-center font-outfit text-sm md:text-base 2xl:text-lg font-medium">
            Overview
          </span>
        </button>
        <h2 className=" text-grey-10 text-center md:text-left font-raleway text-3xl md:text-[38px] md:leading-[130%] 2xl:text-[48px] font-bold">
          Welcome to Little Learners Academy
        </h2>
      </div>
      <p className="text-grey-20 text-center font-outfit text-base 2xl:text-xl font-medium self-stretch md:flex-1">
        A leading kinder garden school dedicated to providing a nurturing and
        stimulating environment for young learners. With a commitment to
        excellence in early education, we believe in shaping curious minds and
        building a strong foundation for a lifelong love of learning. Our
        holistic approach fosters intellectual, social, emotional, and physical
        development, ensuring that each child reaches their full potential.
      </p>
    </section>
  );
};

export default ContainerCard;
