"use client";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import Image from "next/image";
import { useEffect } from "react";
import MainFilterSearchBox from "./MainFilterSearchBox";
import CoverSkeleton from "@/components/skeleton/CoverSkeleton";
const index = ({ onDataAvailable }) => {
  const { isSuccess, isLoading, data } = useGetSliderImagesQuery();
  let sliderImageItems = [];
  if (isSuccess) {
    sliderImageItems = data?.homepage_sliders?.map((item) => ({
      ...item,
      image: `${item.image}`,
    }));
  }
  // useEffect(() => {
  //   if (sliderImageItems !== 0) {
  //     onDataAvailable(true);
  //   }
  // }, [onDataAvailable, sliderImageItems]);

  return isLoading ? (
    <CoverSkeleton />
  ) : (
    <>
      <section className="masthead -type-6">
        <div className="masthead__bg ">
          <Image
            src={sliderImageItems[1]?.cloudflare_image_url}
            width={1920}
            height={860}
            priority={true}
            onLoad={onDataAvailable(true)}
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
  );
};

export default index;
