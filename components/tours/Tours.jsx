
'use client'

import { BASE_URL } from "@/constant/constants";
import { useGetAllContentQuery } from "@/features/content/contentApi";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import convertCurrency from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import isTextMatched from "../../utils/isTextMatched";
// import toursData from "../../data/tours";

const Tours = () => {
  const [tourItems, setTourItems] = useState([]);
  const {menuItems} = useSelector(state => state.menus);
  const {currentCurrency, exchangeRates} = useSelector(state => state.currency);
  const ziarahId = menuItems.find((item) => item.name === "Ziarah")?.id;
  const {isSuccess, data, isLoading} = useGetImagesByMenuIdQuery(ziarahId);
  const {isSuccess: isContentSuccess, data : contentItems, isLoading: isContentLoading} = useGetAllContentQuery(ziarahId);
  
  
  useEffect(() => {
    if(isSuccess && isContentSuccess){
      // console.log("ccc",contentItems)

      let tours = contentItems.filter((item) => {
      if(item.name === "Title" || item.name ==="Our Tour" || item.name ==="Our Tour Image" || item.name === "About" || item.name === "Companies") return false;
      return true;
    }).map((tour) => ({
      id: tour.id,
      tag:  tour.id === 140 || tour.id === 102 ? "top rated": "best seller",
      slideImg: [`${BASE_URL}/media/${data.content_images[tour.name]}`],
      title: tour.name,
      location: "Mecca, Saudi Arabia",
      duration: "16",
      numberOfReviews: "3014",
      price: convertCurrency(parseInt(tour?.price), "USD", currentCurrency?.currency, exchangeRates),
      tourType: "Full-day Tours",
      delayAnimation: "100",
    }));

    setTourItems(tours);

    // if(currentCurrency?.currency !== "USD"){
    //   if(currentCurrency?.currency === "SAR"){
    //     const items = tours?.map((tour) => ({
    //       ...tour,
    //       price : (3.75 * tour.price).toFixed(2)
    //     }));
    //     // console.log("items", items)
    //     setTourItems(items);
    //   }else{
    //     const main = async() => {
    //       const result = await generateToursForCurrentCurrency(tours, "USD", currentCurrency?.currency);
    //       setTourItems(result)
         
    //   };
      
    //   main();
    //   }
    // }
    
  }

  }, [isSuccess, isContentSuccess, currentCurrency])
  


  // let tourItems = [];
  // if(isSuccess && isContentSuccess){

  //     tourItems = contentItems.filter((item) => {
  //     if(item.name === "Title" || item.name ==="Our Tour" || item.name ==="Our Tour Image" || item.name === "About" || item.name === "Companies") return false;
  //     return true;
  //   }).map((tour) => ({
  //     id: tour.id,
  //     tag:  tour.id === 140 || tour.id === 102 ? "top rated": "best seller",
  //     slideImg: [`${BASE_URL}/media/${data.content_images[tour.name]}`],
  //     title: tour.name,
  //     location: "Mecca, Saudi Arabia",
  //     duration: "16",
  //     numberOfReviews: "3014",
  //     price: tour.price,
  //     tourType: "Full-day Tours",
  //     delayAnimation: "100",
  //   }));
    
  // }
  // // console.log(parseInt(tourItems[0]?.price.split(" ")[1].slice(1)));
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Slider {...settings}>
        {tourItems?.map((item) => (
          <div
            key={item?.id}
            data-aos="fade"
            data-aos-delay={item?.delayAnimation}
          >
            <Link
              href={`/tour-single/${item.id}`}
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
                            className="col-12 js-lazy"
                            src={slide}
                            alt="image"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>

                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
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
                      {item.tag}
                    </div>
                  </div>
                </div>
              </div>
              {/* End .tourCard__image */}

              <div className="tourCard__content mt-10">
                <div className="d-flex items-center lh-14 mb-5">
                  <div className="text-14 text-light-1">
                    {item?.duration}+ hours
                  </div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14 text-light-1">{item?.tourType}</div>
                </div>
                <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
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
                  <div className="col-auto">
                    <div className="text-14 text-light-1">
                      From {currentCurrency?.symbol} 
                      <span className="text-16 fw-500 text-dark-1">
                        {" "}
                        
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Tours;
