import React, { useState } from "react";
import FeatureSection from "../FeatureSection";

const faqData = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "Is there a meal program provided?",
    answer:
      "Yes, we offer healthy meals and snacks prepared daily. Our meal program is designed to meet the nutritional needs of young children.",
  },
  {
    question: "Do you provide transportation services?",
    answer:
      "Yes, we offer safe and reliable transportation services. Contact our admin team for available routes and schedules.",
  },
  {
    question: "What age groups do you accept?",
    answer:
      "We accept children from 18 months to 5 years old. Our programs are tailored to meet the developmental needs of each age group.",
  },
  {
    question: "Are your teachers certified?",
    answer:
      "Yes, all of our teachers are certified in early childhood education and undergo regular professional development training.",
  },
  {
    question: "What curriculum do you follow?",
    answer:
      "We use a play-based curriculum that encourages exploration, creativity, and social development, while also building foundational academic skills.",
  },
  {
    question: "How do you handle emergencies or medical issues?",
    answer:
      "We have trained staff on-site for emergencies and follow strict safety protocols. Parents are notified immediately in case of any medical issues.",
  },
  {
    question: "Can parents visit the school during the day?",
    answer:
      "Yes, parents are welcome to visit, but we encourage scheduling ahead to minimize disruption to the classroom environment.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col lg:gap-[100px] md:gap-[80px] gap-[50px] items-start col-span-12">
      <FeatureSection
        title="Frequently Asked Questions"
        subtitle="Solutions For The Doubts"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />

      <section className="grid grid-cols-12  gap-[20px] w-full ">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`flex col-span-12 md:col-span-6 p-6 items-start gap-[30px] rounded-xl border-2 border-grey-15 transition-all md:p-10  ${
              openIndex === index
                ? "bg-white row-span-3 "
                : "bg-orange-95 row-span-2 "
            }`}
          >
            <div className="flex flex-col gap-4 flex-1">
              <p className="font-semibold">{faq.question}</p>
              <hr />
              <p className={`${openIndex === index ? "block" : "hidden"}`}>
                {faq.answer}
              </p>
            </div>
            <button
              onClick={() => toggleFAQ(index)}
              className="flex p-2 justify-center items-center rounded-md border-2 bg-orange-97 w-6 h-6"
            >
              {openIndex === index ? "-" : "+"}
            </button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default FAQ;
