const CardStudentLearn = ({ title, description, image }) => {
  return (
    <section className="flex p-[30px] lg:p-10 2xl:p-[50px] gap-[30px] col-span-3 md:col-span-1 lg:gap-10 2xl:gap-[50px] flex-col rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e] relative">
      {/* shape */}
      <div className="w-[93px] h-[65%] absolute top-0 left-1/2 -translate-x-1/2 transform rounded-b-xl border-x-2 border-x-grey-15 border-b-2  bg-orange-97" />
      <img
        src={image}
        alt={title}
        className="z-50 rounded-xl border-2 border-grey-15 h-[191px] w-full object-cover"
      />
      <div className="flex flex-col gap-[10px]">
        <h3 className=" text-grey-10 text-center font-raleway text-2xl font-bold">
          {title}
        </h3>
        <p className=" text-grey-30 font-outfit text-center font-medium text-base">
          {description}
        </p>
      </div>
    </section>
  );
};

export default CardStudentLearn;
