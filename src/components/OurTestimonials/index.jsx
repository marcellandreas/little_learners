import React, { useRef, useState, useEffect } from "react";
import FeatureSection from "../FeatureSection";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TestimonialsData = [
  {
    id: 1,
    username: "Jennifer B",
    imageUsername: "/logo.svg",
    comment:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school everyday!",
    rating: 5,
  },
  {
    id: 2,
    username: "David K",
    imageUsername: "/logo.svg",
    comment:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    rating: 4.7,
  },
  {
    id: 3,
    username: "Emily L",
    imageUsername: "/logo.svg",
    comment:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    rating: 4.3,
  },
  {
    id: 4,
    username: "Jennifer B",
    imageUsername: "/logo.svg",
    comment:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school everyday!",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="text-orange-65">
        ★
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="text-orange-70">
        ☆
      </span>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="text-grey-20">
        ★
      </span>
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};

const CardTestimonial = ({ profile, username, description, rating }) => {
  return (
    <section className="w-full flex p-[30px] flex-col items-center gap-5 rounded-xl border-2 border-grey-15 shadow-[4px_4px_0px_1px_#1E1E1E]">
      <div className="flex flex-col gap-[10px] items-center self-stretch">
        <img
          src={profile}
          alt={username}
          className="flex p-2 items-start gap-[10px] rounded-full border border-grey-20 bg-orange-97"
        />
        <h2 className="text-grey-20 text-center font-outfit text-xl font-semibold">
          {username}
        </h2>
      </div>
      <StarRating rating={rating} />
      <p className="text-grey-20 text-center font-outfit text-base font-medium">
        {description}
      </p>
    </section>
  );
};

const OurTestimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="flex flex-col items-start gap-[50px] md:gap-[80px] 2xl:gap-[100px] col-span-12">
      <FeatureSection
        subtitle="Their Happy Words 🤗"
        title="Our Testimonials"
        description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <section className="w-full  py-5 md:w-4/5 md:mx-auto relative mb-20 md:mb-0 md:flex">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
        >
          {TestimonialsData.map((data) => (
            <SwiperSlide key={data.id}>
              <CardTestimonial
                profile={data.imageUsername}
                username={data.username}
                description={data.comment}
                rating={data.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <section className="relative md:absolute top-10 md:top-0 md:h-full md:w-full z-50">
          <button
            ref={prevRef}
            disabled={isPrevDisabled}
            className={`absolute top-1/2 -translate-y-1/2 left-4 md:-left-20 z-10 bg-black text-white px-2 py-1 rounded ${
              isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Prev
          </button>

          <button
            ref={nextRef}
            disabled={isNextDisabled}
            className={`absolute top-1/2 -translate-y-1/2 right-4 md:-right-20 z-10 bg-black text-white px-2 py-1 rounded ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </section>
      </section>
    </section>
  );
};

export default OurTestimonials;
