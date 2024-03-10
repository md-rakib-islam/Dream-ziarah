"use client";

import { BASE_URL } from "@/constant/constants";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { destinations4 } from "../../data/desinations";

const TopDestinations2 = ({ slug }) => {
  const { menuItems } = useSelector((state) => state.menus);
  const ziarahId = menuItems.find((item) => item.name === "Destinations")?.id;
  const { isSuccess, data, isLoading } = useGetImagesByMenuIdQuery(ziarahId);

  let destinations = [];
  if (isSuccess) {
    console.log(data.content_images);
    destinations = menuItems
      .find((item) => item.name === "Destinations")
      ?.children?.filter((subItem) => subItem.name.toLowerCase() !== slug)
      ?.map((item) => ({
        id: item.id,
        img: `${BASE_URL}/media/${
          data?.content_images[item?.name?.toLowerCase()]
        }`,
        location: item.name,
        properties: "4,090",
        delayAnimation: "0",
      }));
  }
  console.log("destinations", destinations);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2.09,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* <Swiper
        spaceBetween={30}
        className="overflow-visible"
        modules={[Navigation]}
        navigation={{
          nextEl: ".js-top-desti2-next_active",
          prevEl: ".js-top-desti2-prev_active",
        }}
        breakpoints={{
          540: {
            slidesPerView: 1.8,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            // spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {destinations?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/destinations/${item?.location?.toLowerCase()}`}
              className="citiesCard -type-2 h-full"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              <div className="citiesCard__image ratio ratio-3:2">
                <Image
                  className="col-12 js-lazy"
                  src={item?.img}
                  width={800}
                  height={600}
                  quality={100}
                  priority
                  alt={item?.name}
                />
              </div>
              <div className="citiesCard__content d-flex justify-content-center align-items-center">
                <h4 className="text-26 fw-600 text-white text-capitalize">
                  {item.location == "Medina"
                    ? "Madina"
                    : item.location == "Jedda"
                    ? "Jeddah"
                    : item.location}
                </h4>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <Slider {...settings}>
        {destinations?.map((item) => (
          <div
            className={`${item.colClass} top_destination_width px-5`}
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <Link
              href={`/destinations/${item?.name?.toLowerCase()}`}
              className="citiesCard -type-3 d-block h-full rounded-4 "
            >
              <div className="citiesCard__image ratio ratio-3:2">
                <Image
                  className="col-12 js-lazy"
                  src={item?.img}
                  width={800}
                  height={600}
                  quality={100}
                  priority
                  alt={item?.name}
                />
              </div>
              <div className="citiesCard__content d-flex justify-content-center align-items-center">
                <h4 className="text-26 fw-600 text-white text-capitalize">
                  {item.location == "Medina"
                    ? "Madina"
                    : item.location == "Jedda"
                    ? "Jeddah"
                    : item.location}
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </Slider>

      {/* Start naviation button for next prev slide */}
      {/* <button className="section-slider-nav -prev flex-center bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none  js-top-desti2-prev_active">
        <i className="icon icon-chevron-left text-12" />
      </button>
      <button className="section-slider-nav -next flex-center bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none  js-top-desti2-next_active">
        <i className="icon icon-chevron-right text-12" />
      </button> */}
      {/* End navigation button for next prev  slide */}
    </>
  );
};

export default TopDestinations2;
