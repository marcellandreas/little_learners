import { useEffect, useRef, useState } from "react";
import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";
import { SubContainer } from "../UI/SubContainer";
import AcademicsData from "../data/school_features_data.json";
import CardContent from "../UI/CardContent";
import { Swiper, SwiperSlide } from "swiper/react";
import DataAcademics from "../data/school_features_data.json";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const CardStudentLearn = () => {
  return (
    <section className="flex p-[30px] lg:p-10 2xl:p-[50px] gap-[30px] col-span-3 md:col-span-1 lg:gap-10 2xl:gap-[50px] flex-col rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e] relative">
      {/* shape */}
      <div className="w-[93px] h-[65%] absolute top-0 left-1/2 -translate-x-1/2 transform rounded-b-xl border-x-2 border-x-grey-15 border-b-2  bg-orange-97" />
      <img
        src="/assets/StudentsLearn/LanguageArts.svg"
        alt=""
        className="z-50 rounded-xl border-2 border-grey-15 h-[191px] w-full object-cover"
      />
      <div className="flex flex-col gap-[10px]">
        <h3 className=" text-grey-10 text-center font-raleway text-2xl font-bold">
          Language Arts
        </h3>
        <p className=" text-grey-30 font-outfit text-center font-medium text-base">
          Reading, writing, storytelling, and communication skills.
        </p>
      </div>
    </section>
  );
};

const Academics = () => {
  const [OurSpesialFeatures, setOurSpesialFeatures] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const dataGallery = DataAcademics.ourRoomsGallery;
  console.log("dataGallery", activeIndex);
  const dataGallerySections = DataAcademics.ourRoomsGallery?.sections;

  console.log("dataGallery", dataGallery);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(AcademicsData);
        const data = await response.json();
        setOurSpesialFeatures(data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Delay render tombol custom agar Swiper bisa link dengan ref
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // dummy effect to force re-render
    }
  }, []);
  return (
    <MainLayout>
      <ContainerCard
        className="col-span-12"
        subtitle="Academics"
        title="Nurturing Young Minds for Success"
        description="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <section className="flex flex-col gap-[50px] lg:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Features"
          title="Our Special Features"
          description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        />
        <div className="grid grid-cols-3 gap-10 2xl:gap-[50px]">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <CardContent key={index} classNameCard="col-span-3 md:col-span-1" />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-[50px] lg:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Features"
          title="What Students Learn"
          description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
        />
        {/* flex flex-col  */}
        <div className="gap-10 grid grid-cols-3 2xl:gap-[50px]">
          <CardStudentLearn />
          <CardStudentLearn />
          <CardStudentLearn />
          <CardStudentLearn />
          <CardStudentLearn />
          <CardStudentLearn />
        </div>
      </section>
      <section className="flex flex-col gap-[50px] lg:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Gallery"
          title="Our Rooms Gallery"
          description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
        />
        <div className="flex flex-col gap-20 lg:gap-[120px] 2xl:-[150px]">
          {/* tabs container */}
          {/* <div className="flex gap-[10px] 2xl:gap-[15px] justify-center"> */}
          <Swiper
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full mx-40  ml-2"
            onSlideChange={(swiper) =>
              setActiveIndex(dataGallery.categories[swiper.activeIndex])
            }
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            {dataGallery.categories.map((item, index) => (
              <SwiperSlide
                key={index}
                onClick={() => setActiveIndex(item)}
                className={`py-[10px] px-[10px] cursor-pointer rounded-md border-2 ${
                  activeIndex === item
                    ? "border-orange-50 bg-white"
                    : "border-grey-20 bg-orange-95"
                }`}
              >
                <span className=" text-grey-10 text-center flex justify-center h-full items-center   font-outfit text-base font-semibold">
                  {item}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-[120px] grid grid-cols-3 gap-10 2xl:gap-[50px]">
            <div className="flex col-span-3 md:col-span-3 flex-col relative">
              {/* SLIDER */}
              <div className="absolute top-[-20%] md:top-[-30%] left-1/2 -translate-x-1/2 transform w-full px-[30px] lg:px-10 z-10">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onInit={(swiper) => {
                    // Connect tombol custom setelah Swiper inisialisasi
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                  spaceBetween={20}
                  loop={true}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                  }}
                  className="!pb-5  "
                >
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt="/assets/StudentsLearn/Classrooms/1.png"
                        className="h-[200px] w-full object-cover rounded-[10px] border-2 border-grey-15"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* CARD CONTENT */}
              <div className="flex pt-[180px] px-[30px] lg:px-10 pb-[30px] flex-col gap-5 rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e]">
                <div className="flex flex-col md:flex-row gap-5 md:justify-between md:items-center">
                  <div className="flex gap-4 justify-center md:order-2">
                    <button
                      ref={prevRef}
                      className="flex p-3 gap-[10px] rounded-md border-2 border-grey-20 bg-white"
                    >
                      <MdArrowBack className="w-6 h-6" />
                    </button>
                    <button
                      ref={nextRef}
                      className="flex p-3 gap-[10px] rounded-md border-2 border-grey-20 bg-white"
                    >
                      <MdArrowForward className="w-6 h-6" />
                    </button>
                  </div>
                  <h3 className="text-grey-10 text-center font-raleway text-3xl 2xl:text-4xl font-bold">
                    Classrooms
                  </h3>
                </div>
                <p className="text-grey-30 md:text-left md:text-xl text-center font-outfit font-medium text-lg">
                  Our well-equipped classrooms are designed to provide a
                  nurturing and stimulating learning environment...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </section>
    </MainLayout>
  );
};

export default Academics;
