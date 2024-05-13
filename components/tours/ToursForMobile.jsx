"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addItemsCount } from "@/features/search/searchSlice";
import Slider from "react-slick";
import useWindowSize from "@/hooks/useWindowSize";
import useToursMobile from "@/hooks/useToursMobile";

const ToursForMobile = ({ searchLocation, onDataAvailable }) => {
  const dispatch = useDispatch();
  const width = useWindowSize();
  const isMobile = width < 768;
  const tourItems = useToursMobile();
  const { currentCurrency } = useSelector((state) => state.currency);
  const items = useSelector((state) => state.tourItems);
  console.log("sditemsitemskf", tourItems, items);

  useEffect(() => {
    dispatch(
      addItemsCount(
        `${tourItems?.length} tours in ${
          searchLocation == "Makkah"
            ? "Makkah"
            : searchLocation == "Madina"
            ? "Madina"
            : searchLocation == "Taif"
            ? "Taif"
            : searchLocation == "Jeddah"
            ? "Jeddah"
            : ""
        }`
      )
    );
  }, [tourItems]);

  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-secondary shadow-1 size-30 rounded-full js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-secondary shadow-1 size-30 rounded-full js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12 text-light"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12 text-light"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-3 "
      style={{ marginTop: searchLocation ? "" : "-20px" }}
    >
      {tourItems?.map((item) => (
        <div
          key={item?.id}
          // data-aos="fade"
          // data-aos-delay={item?.delayAnimation}
        >
          <Link
            href={`/tour/${item?.title?.toLowerCase()?.split(" ")?.join("-")}`}
            style={{ cursor: "pointer" }}
            className="tourCard -type-1 rounded-4 hover-inside-slider"
          >
            <div className="tourCard__image position-relative">
              <div className="inside-slider">
                <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<Arrow type="next" />}
                  prevArrow={<Arrow type="prev" />}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <div className="cardImage ratio ratio-1:1" key={i}>
                      <div className="cardImage__content ">
                        <Image
                          width={300}
                          height={300}
                          priority
                          className="col-12 js-lazy"
                          src={slide}
                          alt={item?.title}
                          onLoad={onDataAvailable(true)}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

                {/* <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div> */}

                <div className="cardImage__leftBadge cardImage-2__leftBadge">
                  {/* <div
                    className={`py-5  rounded-right-4 text-12 lh-16 fw-600 uppercase ${
                      isTextMatched(item?.tag, "likely to sell out*")
                        ? "bg-dark-1 text-white"
                        : ""
                    } ${
                      isTextMatched(item?.tag, "best seller")
                        ? "bg-blue-1 text-white"
                        : ""
                    }  ${
                      isTextMatched(item?.tag, "top rated")
                        ? "bg-yellow-1 text-dark-1"
                        : ""
                    }`}
                  >
                    Item
                  </div> */}
                  <div className="buttons-2">
                    <button
                      style={{
                        backgroundColor:
                          searchLocation == "Makkah"
                            ? "#353537"
                            : searchLocation == "Madina"
                            ? "#21b510"
                            : searchLocation == "Taif"
                            ? "#824007"
                            : searchLocation == "Jeddah"
                            ? "#078de6"
                            : "",
                        backgroundImage:
                          searchLocation == "Makkah"
                            ? "linear-gradient(to right, #353537 , #0d0c0d)"
                            : searchLocation == "Madina"
                            ? "linear-gradient(to right, #21b510 , #158805)"
                            : searchLocation == "Taif"
                            ? "linear-gradient(to right, #824007 , #601817)"
                            : searchLocation == "Jeddah"
                            ? "linear-gradient(to right, #078de6 , #29317a)"
                            : "",
                      }}
                    >
                      {`${currentCurrency?.symbol} ${item.price}`}{" "}
                      <span> PER PERSON</span>
                    </button>
                    <button>No</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End .tourCard__image */}

            <div className="tourCard__content mt-10">
              <div className="d-flex justify-content-between lh-14 mb-5">
                <div className="text-14 text-light-1">
                  {isMobile
                    ? `${item?.duration}+ hrs`
                    : `${item?.duration}+ hours`}
                </div>
                {/* <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" /> */}
                <div className="ml-10 mr-10" />
                {/* <div className="text-14 text-light-1">{item?.tourType}</div> */}
                <div className="col-auto">
                  <div className="text-14 text-dark-1 fw-bold">
                    From {currentCurrency?.symbol}
                    <span className="text-16 fw-600 text-blue-1 fw-bold">
                      {" "}
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
              <h4 className="tourCard__title text-dark-5 text-18 lh-16 fw-600">
                <span>{item?.title}</span>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.location}
              </p>

              <div className="row justify-between items-center pt-15">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="d-flex items-center x-gap-5">
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                      <div className="icon-star text-yellow-1 text-10" />
                    </div>
                    {/* End ratings */}

                    <div className="text-14 text-light-1 ml-10">
                      {item?.numberOfReviews} reviews
                    </div>
                  </div>
                </div>
                {/* <div className="col-auto">
                    <div className="text-14 text-light-1">
                      From {currentCurrency?.symbol} 
                      <span className="text-16 fw-600 text-dark-1">
                        {" "}
                        
                        {item.price}
                      </span>
                    </div>
                  </div> */}
              </div>
            </div>
            {isMobile && (
              <button className="button -md h-5 border border-secondary bg-blue-1 text-white w-100">
                Book Now
              </button>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ToursForMobile;
