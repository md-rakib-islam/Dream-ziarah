"use client";

import { BASE_URL } from "@/constant/constants";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
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

  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible"
        modules={[Navigation]}
        navigation={{
          nextEl: ".js-top-desti2-next_active",
          prevEl: ".js-top-desti2-prev_active",
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
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
              className="citiesCard -type-2"
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              <div className="citiesCard__image rounded-4 ratio ratio-1:1">
                <Image
                  width={191}
                  height={191}
                  className="img-ratio rounded-4 js-lazy"
                  src={item.img}
                  alt={item?.location}
                />
              </div>
              <div className="citiesCard__content mt-10">
                <h4 className="text-18 lh-13 fw-500 text-dark-1 text-capitalize">
                  {item.location == "Medina"
                    ? "Madina"
                    : item.location == "Jedda"
                    ? "Jeddah"
                    : item.location}
                </h4>
                {/* <div className="text-14 text-light-1">
                  {item.properties} properties
                </div> */}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

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
