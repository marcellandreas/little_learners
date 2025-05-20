import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";

const Contacts = () => {
  return (
    <MainLayout>
      <ContainerCard
        title="Feel Free To Connect With Us"
        description="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        subtitle="Contact Us"
        className="col-span-12"
        isActive={false}
      />
    </MainLayout>
  );
};

export default Contacts;
