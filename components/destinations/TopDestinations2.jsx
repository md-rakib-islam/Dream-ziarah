"use client";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const TopDestinations2 = ({ slug }) => {
  const { menuItems } = useSelector((state) => state.menus);
  const ziarahId = menuItems.find((item) => item.name === "Destinations")?.id;
  const { isSuccess, data } = useGetImagesByMenuIdQuery(ziarahId);

  let destinations = [];
  if (isSuccess) {
    destinations = menuItems
      .find((item) => item.name === "Destinations")
      ?.children?.filter((subItem) => subItem.name.toLowerCase() !== slug)
      ?.map((item) => ({
        id: item.id,
        img: `${data?.content_images[item?.name?.toLowerCase()]}`,
        location: item.name,
        properties: "4,090",
        delayAnimation: "0",
      }));
  }

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
      <Slider {...settings}>
        {destinations?.map((item) => (
          <div
            className={`${item.colClass} top_destination_width px-5`}
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <Link
              href={`/destinations/${item?.location?.toLowerCase()}`}
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
    </>
  );
};

export default TopDestinations2;
