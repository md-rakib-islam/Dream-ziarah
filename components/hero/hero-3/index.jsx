// import MainFilterSearchBox from "./MainFilterSearchBox";

"use client";
import Loading from "@/app/loading";
import { BASE_URL } from "@/constant/constants";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import Image from "next/image";
import { useEffect } from "react";
import MainFilterSearchBox from "./MainFilterSearchBox";
import CoverSkeleton from "@/components/skeleton/CoverSkeleton";
// import { Interweave } from "interweave";
const index = ({ onDataAvailable }) => {
  // const dispatch = useDispatch();
  // const exchangeRates = useCurrencyExchangeRates();
  // dispatch(addExchangeRates(exchangeRates));
  const { isSuccess, isLoading, data } = useGetSliderImagesQuery();
  let sliderImageItems = [];
  if (isSuccess) {
    sliderImageItems = data?.homepage_sliders?.map((item) => ({
      ...item,
      image: `${item.image}`,
    }));
  }
  useEffect(() => {
    if (sliderImageItems !== 0) {
      onDataAvailable(true);
    }
  }, [onDataAvailable, sliderImageItems]);
  // localStorage.clear();

  // if (isLoading) {
  //   return (
  //     <div>
  //       <CoverSkeleton />
  //     </div>
  //   );
  // }
  return isLoading ? (
    <CoverSkeleton />
  ) : (
    <>
      {/* <div className="row justify-center text-center bannar_mobile overflow-hidden">
        <div className="col-auto">
          <div className="masthead__content position-relative">
            <div className="masthead__bg">
            
              <Image
                className="bannar_height"
                src={sliderImageItems[1]?.cloudflare_image_url}
                width={1420}
                height={460}
                loading="lazy"
                alt="Hajj, Umrah and Ziarah"
              />
            </div>
            <div className="position-absolute bannar_content">
              {sliderImageItems[1]?.image && (
                <h1
                  className="text-white fw-bold bannar_content_title"
                  data-aos="fade-up"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Ziyarat in <br />
                  Makkah & Madina
                </h1>
              )}
              {sliderImageItems[1]?.image && (
                <p
                  // className="text-white mt-6 md:mt-10"
                  className="bannar_content_subtile text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Immerse in Spiritual Quests
                </p>
              )}
            </div>

            <div
              className="masthead__tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>

           
          </div>
        </div>
      </div>

      <div className="row justify-center text-center bannar_desktop overflow-hidden">
        <div className="col-auto">
          <div className="masthead__content position-relative">
            <div className="masthead__bg">
              {isLoading ? (
                <Loading></Loading>
              ) : (
                <Image
                  className="bannar_height"
                  src={sliderImageItems[0]?.cloudflare_image_url}
                  width={1420}
                  height={460}
                  loading="lazy"
                  alt="Hajj, Umrah and Ziarah"
                />
              )}
            </div>
            <div className="position-absolute bannar_content text-center">
              {sliderImageItems[0]?.image && (
                <h1
                  className="text-white fw-bold bannar_content_title"
                  data-aos="fade-up"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Ziyarat in Makkah & Madina
                </h1>
              )}
              {sliderImageItems[0]?.image && (
                <p
                  // className="text-white mt-6 md:mt-10"
                  className="bannar_content_subtile text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Immerse in Spiritual Quests
                </p>
              )}
            </div>

            <div
              className="masthead__tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>

          
          </div>
        </div>
      </div> */}

      <section className="masthead -type-6">
        <div className="masthead__bg ">
          <Image
            src={sliderImageItems[1]?.cloudflare_image_url}
            width={1920}
            height={860}
            alt="image"
          />
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-9 d-lg-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <h1
                  className="text-45 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Ziyarat in Makkah & Madina
                </h1>
                <p
                  className="text-white mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Immerse in Spiritual Quests
                </p>
              </div>
              {/* End hero title */}
              <MainFilterSearchBox />
            </div>
          </div>
        </div>
      </section>
    </>
    // <section className="masthead -type-3 z-5">
    //   <div className="">

    //     <Image src={sliderImageItems[0]?.image} fill={true}  style={{objectFit: "contain"}} alt="image"/>
    //   </div>
    // <div className="container">
    //   <div className="row justify-center">
    //     <div className="col-auto">
    //       <div className="text-center">
    //         <h1
    //           className="text-60 lg:text-40 md:text-30 text-white"
    //           data-aos="fade-up"
    //         >
    //           Discover Your World
    //         </h1>
    //         <p
    //           className="text-white mt-6 md:mt-10"
    //           data-aos="fade-up"
    //           data-aos-delay="100"
    //         >
    //           Discover amzaing places at exclusive deals
    //         </p>
    //       </div>

    //       <div
    //         className="masthead__tabs"
    //         data-aos="fade-up"
    //         data-aos-delay="200"
    //       >

    //       </div>

    //     </div>
    //   </div>
    // </div>
    // </section>
  );
};

export default index;
