import { useEffect, useRef, useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/Card/Card";
import ContainerCard from "../components/Card/ContainerCard";
import dataAboutPage from "../data/about_page_data.json";
import MainLayout from "../Layout/MainLayout";
import CardContentNew from "../UI/CardContentNew";
import { SubContainer } from "../UI/SubContainer";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const AboutUs = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Data Json
  const MissionVisionData = dataAboutPage.OurMissionVisions;
  const HistoryData = dataAboutPage.OurHistory;
  const AchievementsData = dataAboutPage.OurAwardsAndRecognitions;
  const TeamMemberData = dataAboutPage.OurTeamMembers;

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance, prevRef, nextRef]);

  return (
    <MainLayout>
      <ContainerCard
        subtitle="Overview"
        title="Welcome to Little Learners Academy"
        description="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
        className="col-span-12"
      />
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Mission & Visions"
          title="Our Mission & Visions"
          description=" We are here to provide a nurturing and inclusive environment where
            young minds can thrive, fostering a love for learning and personal
            growth."
        />
        <div className="flex flex-col md:flex-row md:gap-10 2xl:gap-[60px] md:justify-between gap-[30px]">
          {MissionVisionData?.data.map((data, i) => (
            <Card
              key={i}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col  gap-[50px]  2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Achievements"
          title="Our Awards and Recognitions"
          description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />
        <div className="flex flex-col gap-[30px] lg:gap-10 2xl:gap-[50px]">
          <div className="  gap-10 overflow-visible">
            <Swiper
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={setSwiperInstance}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {AchievementsData?.data.map((data) => (
                <SwiperSlide key={data.id}>
                  <CardContentNew
                    title={data.title}
                    description={data.description}
                    icon={data.icon}
                    classNameCard="col-span-3 md:col-span-1 mt-14"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex items-center justify-between">
            <p className=" text-grey-10 font-raleway text-lg 2xl:text-2xl font-bold">
              8 More Awards
            </p>
            <div className="flex gap-4">
              <button
                ref={prevRef}
                className="p-3 rounded-md border-2 border-grey-20 bg-white"
              >
                <MdArrowBack className="w-6 h-6" />
              </button>
              <button
                ref={nextRef}
                className="p-3 rounded-md border-2 border-grey-20 bg-white"
              >
                <MdArrowForward className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Progressive Journey"
          title="Our History"
          description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        />
        <div className="flex pt-[50px] pb-[30px] px-[30px] lg:p-[100px] 2xl:p-[150px] rounded-xl border-2 border-grey-15  shadow-[4px_4px_0px_1px_#1E1E1E] bg-white">
          {/* line */}
          <div className="flex w-[19.416px]  pt-[35px] pb-[270px] md:pb-[15%] px-0 flex-col items-center">
            <div className="flex px-[6px] py-0 justify-center items-center gap-[10px] flex-1 bg-orange-80">
              <div className="w-[2px] bg-black h-full"></div>
            </div>
          </div>

          {/* cards */}
          <div className="flex flex-col  items-start gap-[50px] lg:gap-[80px] 2xl:gap-[100px] flex-1">
            {/* card */}
            {HistoryData?.history.map((item) => (
              <div className="flex flex-col justify-center   items-start gap-[30px]">
                <div className="flex items-center ml-[-20px] ">
                  <div className="flex w-[62px] h-5 items-center">
                    <img src="/assets/circle.svg" alt="" className="h-5 w-5" />
                    <div className="flex py-[6px] pl-0 justify-center items-center gap-[10px] flex-1 bg-orange-80">
                      <div className="h-[2px] w-4 bg-black"></div>
                    </div>
                    <img src="/assets/circle.svg" alt="" className="h-5 w-5" />
                  </div>
                  <div className="flex py-5 px-6 items-center gap-5 rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e]">
                    <img
                      src="/AbstractDesign.svg"
                      alt="abstrak desain"
                      className="w-[50px] h-[50px]"
                    />
                    <span className=" text-grey-10 font-raleway text-4xl font-bold">
                      {item.year}
                    </span>
                  </div>
                </div>
                {/* text container */}
                <div className="flex pl-11 flex-col justify-center gap-3">
                  <h3 className=" text-grey-10 font-raleway text-xl lg:text-2xl 2xl:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className=" text-grey-20 font-outfit text-base 2xl:text-xl font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Teachers With Experties"
          title="Our Team Members"
          description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        />
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 2xl:gap-[50px]">
          {TeamMemberData.team.map((dataMember, index) => (
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
