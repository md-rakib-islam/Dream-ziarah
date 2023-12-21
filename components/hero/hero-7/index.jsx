
'use client'

import { BASE_URL } from "@/constant/constants";
import { addExchangeRates } from "@/features/currency/currencySlice";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import useCurrencyExchangeRates from "@/hooks/currency";
// import { Interweave } from "interweave";
import { useDispatch } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {
  const dispatch = useDispatch();
  const exchangeRates = useCurrencyExchangeRates();
  dispatch(addExchangeRates(exchangeRates));
  const {isSuccess, data} = useGetSliderImagesQuery();
  let sliderImageItems = []
  if(isSuccess){
    sliderImageItems = data?.homepage_sliders?.map((item) => ({
      ...item,
      image : `${BASE_URL}/${item.image}`
    }))
    // console.log("images", data?.homepage_sliders)
  }
  
  return (
    <>
      <section className="masthead -type-7">
        <div className="masthead-slider js-masthead-slider-7">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            
            loop={true}
            navigation={{
              nextEl: ".hero7-next-active",
              prevEl: ".hero7-prev-active",
            }}
          >
            {
              sliderImageItems?.map((item) => (<SwiperSlide key={item.id}>
                <div className="row justify-center text-center">
                  <div className="col-auto">
                    <div className="masthead__content">
                      <div className="masthead__bg">
                        <img src={item.image} alt="image" />
                      </div>
                      {/* <h1
                      className="text-45 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                       <Interweave
                        allowAttributes
                        allowElements
                        disableLineBreaks={false}
                        content={item.title}
                      />
                    </h1> */}
                      {/* <div
                        className="text-white text-30"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        {item.subtitle}
                      </div> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>))
            }
            {/* <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src={`${BASE_URL}/${data?.homepage_sliders[0].image}`} alt="image" />
                    </div>
                    <h1
                      className="text-45 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Experience the Spiritual Essence like Never Before.
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                    <div
                      className="text-white text-30"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places in Mecca
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src={`${BASE_URL}/${data?.homepage_sliders[1].image}`} alt="image" />
                    </div>
                    <h1
                      className="text-45 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Experience the Spiritual Essence like Never Before.
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                    <div
                      className="text-white text-30"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover amzaing places in Mecca
                    </div>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>

          <div className="masthead-slider__nav -prev js-prev hero_slider_button">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-prev-active">
              <i className="icon-arrow-left" />
            </button>
          </div>
          {/* End prev navigation */}

          <div className="masthead-slider__nav -next js-next hero_slider_button">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-next-active">
              <i className="icon-arrow-right" />
            </button>
          </div>
          {/* End next navigation */}
        </div>
        {/* End slider */}

        {/* <MainFilterSearchBox /> */}
        {/* End tab-filter */}
      </section>
      {/* End section */}
    </>
  );
};

export default index;
