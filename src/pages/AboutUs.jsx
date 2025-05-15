import Card from "../components/Card/Card";
import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";
import { SubContainer } from "../UI/SubContainer";
import teamMemberData from "../data/TeamMembers.json";
import { data } from "react-router-dom";

const AboutUs = () => {
  return (
    <MainLayout>
      <ContainerCard className="col-span-12" />
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Mission & Visions"
          title="Our Mission & Visions"
          description=" We are here to provide a nurturing and inclusive environment where
            young minds can thrive, fostering a love for learning and personal
            growth."
        />
        <div className="flex flex-col md:flex-row md:gap-10 2xl:gap-[60px] md:justify-between gap-[30px]">
          <Card />
          <Card />
        </div>
      </section>

      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Achievements"
          title="Our Awards and Recognitions"
          description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />
      </section>
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Progressive Journey"
          title="Our History"
          description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        />
      </section>
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Teachers With Experties"
          title="Our Team Members"
          description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        />
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 2xl:gap-[50px]">
          {teamMemberData.map((dataMember, index) => (
            <div
              key={index}
              className="flex flex-col p-[30px] md:p-10 2xl:p-[50px] gap-6 2xl:gap-[30px] rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0px_1px_#1E1E1E] md:col-span-6"
            >
              {/* heading */}
              <div className="flex items-center gap-[10px]">
                <div className="flex items-center gap-[10px] flex-1">
                  <img
                    src={dataMember.profileImage}
                    className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] 2xl:w-[100px] 2xl:h-[100px] "
                    alt={`${index}-${dataMember.name} profile image`}
                  />
                  <h3 className=" flex-1 text-grey-20 text-xl md:text-2xl 2xl:text-3xl font-extrabold">
                    {dataMember.name}
                  </h3>
                </div>
                <button className="flex p-[14px] lg:p-4 gap-[10px] rounded-md lg:rounded-lg border-2 border-grey-15 bg-orange-90">
                  <img
                    src="/assets/mail.svg"
                    className="w-5 h-5 lg:w-6 lg:h-6 "
                    alt=""
                  />
                </button>
              </div>
              {/* Text container */}
              <div className="flex p-5 flex-col gap-3 rounded-xl border-2 border-grey-15 bg-orange-97">
                <h2 className=" text-grey-20 font-outfit text-xl font-semibold 2xl:text-2xl">
                  {dataMember.title}
                </h2>
                <p className="text-grey-20 font-outfit text-base 2xl:text-xl  font-medium  ">
                  {dataMember.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
