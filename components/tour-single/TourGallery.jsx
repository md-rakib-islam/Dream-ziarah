"use client";

import Overview from "@/components/tour-single/Overview";
import SidebarRight from "@/components/tour-single/SidebarRight";
import TourSnapShot from "@/components/tour-single/TourSnapShot";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import HajjSidebarRight from "../hajj/HajjSidebarRight";
import UmrahSidebarRight from "../umrah/UmrahSidebarRight";
import useWindowSize from "@/hooks/useWindowSize";
import "../../styles/weather.scss";

import { useEffect, useState } from "react";
import OverviewSkeleton from "../skeleton/OverviewSkeleton";
import GalarySkeleton from "../skeleton/GalarySkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom } from "swiper";

// import useWindowSize from "@/hooks/useWindowSize";

export default function TourGallery({ tour, hajj, umrah, onDataAvailable }) {
  const [dataAvailable, setDataAvailable] = useState(false);

  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <>
      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div
                className="relative d-flex justify-center overflow-hidden js-section-slider"
                // style={{ height: isMobile ? 300 : 400 }}
              >
                <Swiper
                  modules={[Zoom, Navigation]}
                  loop={true}
                  zoom={true}
                  navigation={{
                    nextEl: ".js-img-next",
                    prevEl: ".js-img-prev",
                  }}
                >
                  {tour?.slideImg?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <div className="swiper-zoom-container">
                        <Image
                          className="col-12 rounded-4 destination_banner_img swiper-zoom-container"
                          height={860}
                          width={1920}
                          style={{ maxHeight: "448px" }}
                          priority={true}
                          src={`${slide}`}
                          alt={tour?.title}
                          onLoad={(e) => {
                            if (e) {
                              onDataAvailable(true);
                              setDataAvailable(true);
                            }
                          }} // Attach onLoad event handler
                          // className="rounded-4 col-12 cover object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* <Gallery>
                  {tour?.slideImg?.map((slide, i) => (
                    <div
                      className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end z-2 bottom-0 end-0"
                      key={i}
                    >
                      <Item
                        original={`${slide}`}
                        thumbnail={`${slide}`}
                        width={1280}
                        height={750}
                      >
                        {({ ref, open }) => (
                          <div
                            className={`button -blue-1 ${
                              isMobile ? "px-10 py-5" : "px-20 py-10"
                            } bg-white text-dark-1 js-gallery`}
                            ref={ref}
                            onClick={open}
                            role="button"
                          >
                            {slide ? "See All Photos" : ""}
                          </div>
                        )}
                      </Item>
                    </div>
                  ))}
                </Gallery> */}

                <div className="absolute h-full col-11">
                  <button className="section-slider-nav -prev flex-center button -blue-1  shadow-1 size-40 rounded-full sm:d-none js-img-prev">
                    <i className="icon icon-chevron-left text-12" />
                  </button>
                  <button className="section-slider-nav -next flex-center button -blue-1  shadow-1 size-40 rounded-full sm:d-none js-img-next">
                    <i className="icon icon-chevron-right text-12" />
                  </button>
                </div>
                {/* End prev nav button wrapper */}
              </div>
              {!dataAvailable && <GalarySkeleton />}
              {/* End relative */}

              {/* slider gallery */}

              <h3 className="text-22 fw-600 mt-40">Tour snapshot</h3>
              <TourSnapShot hajj={hajj} umrah={umrah} />
              {/* End toursnapshot */}
              <div className="border-top-light mt-40 mb-40"></div>

              {!isMobile &&
                (dataAvailable ? (
                  <Overview hajj={hajj} />
                ) : (
                  <OverviewSkeleton />
                ))}
              {/* End  Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              {hajj ? (
                <HajjSidebarRight />
              ) : umrah ? (
                <UmrahSidebarRight />
              ) : (
                <SidebarRight />
              )}
            </div>
            {isMobile &&
              (dataAvailable ? (
                <div style={{ marginTop: "" }}>
                  <Overview hajj={hajj} />
                </div>
              ) : (
                <OverviewSkeleton />
              ))}
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
    </>
  );
}
