import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";
import CardContent from "../UI/CardContent";
import { SubContainer } from "../UI/SubContainer";
import DataAcademics from "../data/students_life.json";
import CardContentNew from "../UI/CardContentNew";

const StudentLife = () => {
  const dataExtracurricularActivities =
    DataAcademics.extracurricularActivities.dataExtraCurricular;
  const dataStudentSupport = DataAcademics.studentSupport.dataSupport;
  const dataEventsCelebrations = DataAcademics.eventsCelebrations.data;
  return (
    <MainLayout>
      <ContainerCard
        title="Embracing Learning with Discovery and Joy"
        description="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
        subtitle="Enriching Student Life"
        className="col-span-12"
      />
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          title="Our Features"
          heading="Extracurricular Activities"
          description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
        />
        <div className="grid grid-cols-3 gap-10 2xl:gap-[50px]">
          {dataExtracurricularActivities.map((item, index) => (
            <CardContentNew
              title={item.title}
              icon={item.icon}
              description={item.description}
              key={index}
              classNameCard="col-span-3 md:col-span-1"
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          title="Events & Celebrations"
          heading="Our Features"
          description="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
        />
        <div className="grid grid-cols-3 gap-10 2xl:gap-[50px]">
          {dataEventsCelebrations.map((data, index) => (
            <div
              key={index}
              className="flex md:col-span-1 col-span-3 p-[30px] lg:p-10 2xl:p-[50px] flex-col gap-[30px] lg:gap-10 2xl:gap-[50px] rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1E1E1E] relative"
            >
              <div
                className={`border-y-2 border-grey-15 bg-orange-95 absolute h-[93px] w-full left-0 ${
                  index === 1 || index === 4 ? "top-[35%]" : "top-[20%]"
                }`}
              ></div>
              <img
                src={data.image}
                className=" rounded-xl border-2 border-grey-15 z-50 "
                alt={`${index + 1}-${data.title}`}
              />
              {/* text */}
              <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
                <h3 className=" text-grey-10 text-center font-raleway text-xl lg:text-2xl 2xl:text-3xl font-bold">
                  {data.title}
                </h3>
                <p className=" text-grey-30 text-center font-outfit text-base font-medium">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          title="Student Support"
          heading="Our Achievements"
          description="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
        />
        <div className="grid grid-cols-3 gap-10 2xl:gap-[50px]">
          {dataStudentSupport.map((item, index) => (
            <CardContentNew
              title={item.title}
              icon={item.icon}
              description={item.description}
              key={index}
              classNameCard="col-span-3 md:col-span-1"
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default StudentLife;
