"use client";

import Overview from "@/components/tour-single/Overview";
import SidebarRight from "@/components/tour-single/SidebarRight";
import TourSnapShot from "@/components/tour-single/TourSnapShot";
import Image from "next/image";
import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HajjSidebarRight from "../hajj/HajjSidebarRight";
import UmrahSidebarRight from "../umrah/UmrahSidebarRight";
import { BASE_URL } from "@/constant/constants";
import useWindowSize from "@/hooks/useWindowSize";
// import useWindowSize from "@/hooks/useWindowSize";

export default function TourGallery({ tour, hajj, umrah }) {
  const [isOpen, setOpen] = useState(false);
  const width = useWindowSize();
  const isMobile = width < 768;
  console.log("tour?.slideImg", tour?.slideImg);

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
                  modules={[Navigation]}
                  loop={true}
                  navigation={{
                    nextEl: ".js-img-next",
                    prevEl: ".js-img-prev",
                  }}
                >
                  {tour?.slideImg?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        width={1281}
                        height={400}
                        priority
                        src={`${BASE_URL}/media/${slide}`}
                        alt={tour?.title}
                        className="rounded-4 col-12 cover object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Gallery>
                  {tour?.slideImg?.map((slide, i) => (
                    <div
                      className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end z-2 bottom-0 end-0"
                      key={i}
                    >
                      <Item
                        original={`${BASE_URL}/media/${slide}`}
                        thumbnail={`${BASE_URL}/media/${slide}`}
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
                            See All Photos
                          </div>
                        )}
                      </Item>
                    </div>
                  ))}
                </Gallery>

                <div className="absolute h-full col-11">
                  <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-prev">
                    <i className="icon icon-chevron-left text-12" />
                  </button>
                  <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-next">
                    <i className="icon icon-chevron-right text-12" />
                  </button>
                </div>
                {/* End prev nav button wrapper */}
              </div>
              {/* End relative */}

              {/* slider gallery */}

              <h3 className="text-22 fw-500 mt-40">Tour snapshot</h3>
              <TourSnapShot hajj={hajj} umrah={umrah} />
              {/* End toursnapshot */}
              <div className="border-top-light mt-40 mb-40"></div>

              <Overview hajj={hajj} />
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
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
    </>
  );
}
