"use client";
import { BASE_URL } from "@/constant/constants";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from 'react-redux';
// import { destinations5 } from "../../data/desinations";

const TopDestinations = () => {
  const {menuItems} = useSelector(state => state.menus);
  const destinations = menuItems?.find((item) => item.name === "Destinations")?.children;
  const ziarahId = menuItems?.find((item) => item.name === "Ziarah")?.id;
  const {isSuccess, data, isLoading} = useGetImagesByMenuIdQuery(ziarahId);

  // (indx + 1) <= 3 ? (indx + 1) % 2 !== 0? "col-xl-3 col-md-4 col-sm-6" : "col-xl-6 col-md-4 col-sm-6" : "col-xl-6 col-md-4 col-sm-6"

  let modifiedDestinations = [];
  if(isSuccess){
     modifiedDestinations = destinations?.map((item, indx) => ({
      id: item.id,
      colClass: "col-xl-auto col-md-4 col-sm-6",
      img: `${BASE_URL}/media/${data?.content_images[item?.name?.toLowerCase()]}`,
      name: item.name,
      numberOfProperties: "1714",
      delayAnimation: "200",
    }))
  }

  
  return (
    <>
      {modifiedDestinations?.map((item) => (
        <div
          className={`${item.colClass} top_destination_width`}
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
          
        >
          <Link
            href={`/destinations/${item?.name?.toLowerCase()}`}
            className="citiesCard -type-3 d-block h-full rounded-4 "
          >
            <div className="citiesCard__image ratio ratio-3:2">
              <Image className="col-12 js-lazy" src={item?.img} width={800} height={600} quality={100} priority alt="image" />
            </div>
            <div className="citiesCard__content d-flex justify-content-center align-items-center">
              <h4 className="text-26 fw-600 text-white text-capitalize">
                {item.name}
              </h4>
              {/* <div className="text-15 text-white">
                {item.numberOfProperties} properties
              </div> */}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TopDestinations;
