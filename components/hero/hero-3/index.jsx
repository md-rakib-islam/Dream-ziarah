// import MainFilterSearchBox from "./MainFilterSearchBox";

"use client";
import Loading from "@/app/loading";
import { BASE_URL } from "@/constant/constants";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import MainFilterSearchBox from "./MainFilterSearchBox";

import Image from "next/image";
// import { Interweave } from "interweave";
const index = () => {
  // const dispatch = useDispatch();
  // const exchangeRates = useCurrencyExchangeRates();
  // dispatch(addExchangeRates(exchangeRates));
  const { isSuccess, isLoading, data } = useGetSliderImagesQuery();
  let sliderImageItems = [];
  if (isSuccess) {
    sliderImageItems = data?.homepage_sliders?.map((item) => ({
      ...item,
      image: `${BASE_URL}/${item.image}`,
    }));
  }
  // localStorage.clear();
  return (
    <>
      {/* <div className="row justify-center text-center bannar_mobile overflow-hidden">
        <div className="col-auto">
          <div className="masthead__content position-relative">
            <div className="masthead__bg">
              {isLoading ? (
                <Loading></Loading>
              ) : (
                <Image
                  className="bannar_height"
                  src={sliderImageItems[1]?.image}
                  width={1420}
                  height={460}
                  loading="lazy"
                  alt="Hajj, Umrah and Ziarah"
                />
              )}
            </div>

            <div className="position-absolute bannar_content">
              <h1>hello</h1>

              <h1
                className="text-white fw-bold bannar_content_title"
                data-aos="fade-up"
              >
                Ziyarat in <br />
                Makkah & Madina
              </h1>
              <p
                // className="text-white mt-6 md:mt-10"
                className="bannar_content_subtile"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Immerse in Spiritual Quests
              </p>
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
                  src={sliderImageItems[0]?.image}
                  width={1420}
                  height={460}
                  loading="lazy"
                  alt="Hajj, Umrah and Ziarah"
                />
              )}
            </div>
            <div className="position-absolute bannar_content text-center">
              <h1
                className="text-white fw-bold bannar_content_title"
                data-aos="fade-up"
              >
                Ziyarat in Makkah & Madina
              </h1>
              <p
                // className="text-white mt-6 md:mt-10"
                className="bannar_content_subtile"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Immerse in Spiritual Quests
              </p>
            </div>

            <div
              className="masthead__tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>

           
          </div>
        </div>
      </div> */}

      <section className="masthead -type-6 bannar_mobile">
        <div className="masthead__bg">
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Loading></Loading>
            </div>
          ) : (
            <Image
              src={sliderImageItems[1]?.image}
              width={1420}
              height={460}
              alt="image"
            />
          )}
        </div>

        <div className="container search_container">
          <div className="row justify-center">
            <div className="col-xl-9 d-lg-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <h1
                  className="text-45 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                >
                  Ziyarat in <br />
                  Makkah & Madina
                </h1>
                <p
                  className="text-white mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
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
      <section className="masthead -type-6 bannar_desktop">
        <div className="masthead__bg">
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Loading></Loading>
            </div>
          ) : (
            <Image
              src={sliderImageItems[0]?.image}
              width={1420}
              height={460}
              alt="image"
            />
          )}
        </div>

        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-9 d-lg-flex flex-column justify-content-center align-items-center">
              <div className="text-center">
                <h1
                  className="text-45 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                >
                  Ziyarat in Makkah & Madina
                </h1>
                <p
                  className="text-white mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
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
  );
};

export default index;
