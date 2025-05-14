import FeatureSection from "../FeatureSection";

const BenefitsData = [
  {
    id: 1,
    icon: "/assets/benefits/toga.svg",
    title: "Holistic Learning Approach",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    id: 2,
    icon: "/assets/benefits/crown.svg",
    title: "Experienced Educators",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    id: 3,
    icon: "/assets/benefits/facemask.svg",
    title: "Nurturing Environment",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    id: 4,
    icon: "/assets/benefits/flag.svg",
    title: "Play-Based Learning",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    id: 5,
    icon: "/assets/benefits/circle.svg",
    title: "Individualized Attention",
    description:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    id: 6,
    icon: "/assets/benefits/people.svg",
    title: "Parent Involvement",
    description:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

const CardBenefits = ({ id, icon, title, description }) => {
  return (
    <section className="flex relative flex-col min-h-36  items-start self-stretch md:col-span-4 ">
      <div className="flex pl-6 -top-7 gap-[10px] absolute">
        <div className="p-4 rounded-lg border-grey-15 bg-orange-90  border-2">
          <img src={icon} alt={`${id}-${title} icon`} className="w-6 h-6" />
        </div>
      </div>
      <div className="flex h-full pt-[50px] md:px-10 md:pt-[50px] md:pb-10 pb-[30px] pl-[30px] pr-[40px] flex-col gap-4 rounded-xl border-2 border-grey-15 shadow-[4px_4px_0px_1px_#1E1E1E]">
        <h3 className=" text-[22px] md:text-[24px] xl:text-[28px]  font-raleway text-grey-10 font-bold">
          {title}
        </h3>
        <p className=" text-grey-30 font-outfit text-base font-medium">
          {description}
        </p>
      </div>
    </section>
  );
};

const OurBenefits = () => {
  return (
    <section className="flex flex-col 2xl:gap-[100px] md:gap-[80px] gap-[50px] items-start col-span-12">
      <FeatureSection
        title="Our Benefits"
        subtitle="Children Deserve Bright Future"
        description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <section className="flex flex-col md:grid grid-cols-12 md:gap-x-10 gap-[60px]">
        {BenefitsData.map((benefit) => (
          <CardBenefits
            key={benefit.id}
            id={benefit.id}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </section>
    </section>
  );
};

export default OurBenefits;
