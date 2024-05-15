"use client";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import useWindowSize from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

const TopDestinations = dynamic(() =>
  import("@/components/destinations/TopDestinations")
);
const Hero3 = dynamic(() => import("@/components/hero/hero-3"));
const WhyChoose = dynamic(() => import("@/components/home/home-3/WhyChoose"));
const Tours = dynamic(() => import("@/components/tours/Tours"));
const ToursMadina = dynamic(() => import("@/components/tours/ToursMadina"));
const ToursJedda = dynamic(() => import("@/components/tours/ToursJedda"));
const ToursTaif = dynamic(() => import("@/components/tours/ToursTaif"));
const ToursForMobile = dynamic(() =>
  import("@/components/tours/ToursForMobile")
);

const MainHome = () => {
  const { isSuccess, isLoading, data } = useGetSliderImagesQuery();

  const [dataAvailable, setDataAvailable] = useState(false);
  const width = useWindowSize();
  const isMobile = width > 768;

  const { currentTab } = useSelector((state) => state.hero) || {};
  // Function to handle data availability
  const handleDataAvailability = (isDataAvailable) => {
    setDataAvailable(isDataAvailable);
  };
  console.log("hameotab", currentTab);
  return (
    <>
      {/* <Hero7/> */}
      <div className="header-margin"></div>
      <Hero3
        onDataAvailable={handleDataAvailability}
        isSuccess={isSuccess}
        isLoading={isLoading}
        data={data}
      />
      {/* End Hero 3 */}
      {!isMobile ? (
        <>
          <div className="container">
            <div className="row y-gap-30 mb-5">
              <ToursForMobile
                searchLocation={currentTab}
                onDataAvailable={handleDataAvailability}
              />
              {currentTab == "Makkah" ? (
                ""
              ) : (
                <section className="layout-pt-md layout-pb-md ">
                  <div className="container">
                    <div className="row y-gap-22 justify-between items-start">
                      <div className="col-8 col-lg-auto">
                        <div className="sectionTitle -md ">
                          <h2 className="sectionTitle__title">
                            Ziyarat In Makkah
                          </h2>
                          <p className=" sectionTitle__text mt-5 sm:mt-0">
                            Explore Sacred Ziyarat Places in Makkah
                          </p>
                        </div>
                      </div>
                      {/* End .col */}

                      <div className="col-4 col-lg-auto">
                        <Link
                          href="/tours/?location=Makkah"
                          className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                        >
                          More <div className="icon-arrow-top-right ml-15" />
                        </Link>
                      </div>
                      {/* End .col */}
                    </div>

                    {/* End .row */}

                    <div
                      className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30"
                      // style={{ marginLeft: "15px" }}
                    >
                      {/* {!dataAvailable ? (
<TourSkeleton />
) : ( */}
                      <Tours />
                      {/* )} */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container */}
                </section>
              )}
              {/* End Makka Tours Sections */}
              {currentTab == "Madina" ? (
                ""
              ) : (
                <section className="layout-pt-md layout-pb-md">
                  <div className="container">
                    <div className="row y-gap-22 justify-between items-start">
                      <div className="col-8 col-lg-auto ">
                        <div className="sectionTitle -md">
                          <h2 className="sectionTitle__title">
                            Ziyarat In Madina
                          </h2>
                          <p className=" sectionTitle__text mt-5 sm:mt-0">
                            Explore Sacred Ziyarat Places in Madina
                          </p>
                        </div>
                      </div>
                      {/* End .col */}

                      <div className="col-4 col-lg-auto">
                        <Link
                          href="/tours/?location=Medina"
                          className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                        >
                          More <div className="icon-arrow-top-right ml-15" />
                        </Link>
                      </div>
                      {/* End .col */}
                    </div>

                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                      <ToursMadina />
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container */}
                </section>
              )}
              {/* End Madina Tours Sections */}

              {currentTab == "Jeddah" ? (
                ""
              ) : (
                <section className="layout-pt-md layout-pb-md">
                  <div className="container">
                    <div className="row y-gap-22 justify-between items-start">
                      <div className="col-8 col-lg-auto">
                        <div className="sectionTitle -md">
                          <h2 className="sectionTitle__title">
                            Ziyarat In Jeddah
                          </h2>
                          <p className=" sectionTitle__text mt-5 sm:mt-0">
                            Explore Sacred Ziyarat Places in Jeddah
                          </p>
                        </div>
                      </div>
                      {/* End .col */}

                      <div className="col-4 col-lg-auto">
                        <Link
                          href="/tours/?location=Jedda"
                          className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                        >
                          More <div className="icon-arrow-top-right ml-15" />
                        </Link>
                      </div>
                      {/* End .col */}
                    </div>

                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                      <ToursJedda />
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container */}
                </section>
              )}
              {/* End Jedda Tours Sections */}

              {currentTab == "Taif" ? (
                ""
              ) : (
                <section className="layout-pt-md layout-pb-md">
                  <div className="container">
                    <div className="row y-gap-22 justify-between items-start">
                      <div className="col-8 col-lg-auto">
                        <div className="sectionTitle -md">
                          <h2 className="sectionTitle__title">
                            Ziyarat In Taif
                          </h2>
                          <p className=" sectionTitle__text mt-5 sm:mt-0">
                            Explore Sacred Ziyarat Places in Taif
                          </p>
                        </div>
                      </div>
                      {/* End .col */}

                      <div className="col-4 col-lg-auto">
                        <Link
                          href="/tours/?location=Taif"
                          className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                        >
                          More <div className="icon-arrow-top-right ml-15" />
                        </Link>
                      </div>
                      {/* End .col */}
                    </div>

                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                      <ToursTaif />
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .container */}
                </section>
              )}
              {/* End Taif Tours Sections */}
            </div>
          </div>

          {dataAvailable && (
            <>
              <section className="layout-pt-md layout-pb-md">
                <div className="container">
                  <div className="row justify-center text-center">
                    <div className="col-auto">
                      <div className="sectionTitle -md">
                        <h2 className="sectionTitle__title">
                          Why Book With Us
                        </h2>
                        <p className=" sectionTitle__text mt-5 sm:mt-0">
                          Experience Quality and Excellence with DreamZiarah
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row y-gap-40 justify-between pt-50">
                    <WhyChoose />
                  </div>
                  {/* End row */}
                </div>
                {/* End .container */}
              </section>
              {/* End Why choose Section */}
              <section
                style={{ backgroundColor: "#EAFBF7" }}
                className="layout-pt-md layout-pb-md"
              >
                <div className="container">
                  <div className="row justify-center text-center">
                    <div className="col-auto">
                      <div className="sectionTitle -md">
                        <h2 className="sectionTitle__title">
                          Free cancellation
                        </h2>
                        <p
                          style={{ color: "black" }}
                          className="mt-5 sm:mt-4 bannar_mobile"
                        >
                          You'll receive a full refund if you cancel at least 24{" "}
                          <br /> hours in advance of most experiences.
                        </p>
                        <p
                          style={{ color: "black" }}
                          className="mt-5 sm:mt-4 bannar_desktop"
                        >
                          You'll receive a full refund if you cancel at least 24
                          hours in advance of most experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End .container */}
              </section>

              {/* End Why choose Section */}
              <section className="layout-pt-md layout-pb-md">
                <div className="container">
                  <div className="row justify-center text-center">
                    <div className="col-auto">
                      <div className="sectionTitle -md">
                        <h2 className="sectionTitle__title">
                          Top Destinations
                        </h2>
                        <p className=" sectionTitle__text mt-5 sm:mt-0">
                          Explore Exciting Destinations, Tailored for Every
                          Explorer
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}

                  <div className="row y-gap-40 pt-40 sm:pt-20">
                    <TopDestinations />
                  </div>
                  {/* End .row */}
                </div>
                {/* End .container */}
              </section>

              {/* End Top Destinations Section */}
            </>
          )}
        </>
      ) : (
        ""
      )}

      {isMobile && (
        <>
          <section className="layout-pt-md layout-pb-md ">
            <div className="container">
              <div className="row y-gap-22 justify-between items-start">
                <div className="col-8 col-lg-auto">
                  <div className="sectionTitle -md ">
                    <h2 className="sectionTitle__title">Ziyarat In Makkah</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Explore Sacred Ziyarat Places in Makkah
                    </p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-4 col-lg-auto">
                  <Link
                    href="/tours/?location=Makkah"
                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                  >
                    More <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
                {/* End .col */}
              </div>

              {/* End .row */}

              <div
                className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30"
                // style={{ marginLeft: "15px" }}
              >
                {/* {!dataAvailable ? (
              <TourSkeleton />
            ) : ( */}
                <Tours />
                {/* )} */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Makka Tours Sections */}
        </>
      )}

      {dataAvailable && isMobile && (
        <>
          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row y-gap-22 justify-between items-start">
                <div className="col-8 col-lg-auto ">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Ziyarat In Madina</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Explore Sacred Ziyarat Places in Madina
                    </p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-4 col-lg-auto">
                  <Link
                    href="/tours/?location=Medina"
                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                  >
                    More <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
                {/* End .col */}
              </div>

              {/* End .row */}

              <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                <ToursMadina />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Madina Tours Sections */}

          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row y-gap-22 justify-between items-start">
                <div className="col-8 col-lg-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Ziyarat In Jeddah</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Explore Sacred Ziyarat Places in Jeddah
                    </p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-4 col-lg-auto">
                  <Link
                    href="/tours/?location=Jedda"
                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                  >
                    More <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
                {/* End .col */}
              </div>

              {/* End .row */}

              <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                <ToursJedda />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Jedda Tours Sections */}

          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row y-gap-22 justify-between items-start">
                <div className="col-8 col-lg-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Ziyarat In Taif</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Explore Sacred Ziyarat Places in Taif
                    </p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-4 col-lg-auto">
                  <Link
                    href="/tours/?location=Taif"
                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                  >
                    More <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
                {/* End .col */}
              </div>

              {/* End .row */}

              <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                <ToursTaif />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Taif Tours Sections */}
          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Why Book With Us</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Experience Quality and Excellence with DreamZiarah
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row y-gap-40 justify-between pt-50">
                <WhyChoose />
              </div>
              {/* End row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Why choose Section */}
          <section
            style={{ backgroundColor: "#EAFBF7" }}
            className="layout-pt-md layout-pb-md"
          >
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Free cancellation</h2>
                    <p
                      style={{ color: "black" }}
                      className="mt-5 sm:mt-4 bannar_mobile"
                    >
                      You'll receive a full refund if you cancel at least 24{" "}
                      <br /> hours in advance of most experiences.
                    </p>
                    <p
                      style={{ color: "black" }}
                      className="mt-5 sm:mt-4 bannar_desktop"
                    >
                      You'll receive a full refund if you cancel at least 24
                      hours in advance of most experiences.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>

          {/* End Why choose Section */}
          <section className="layout-pt-md layout-pb-md">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Top Destinations</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                      Explore Exciting Destinations, Tailored for Every Explorer
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row y-gap-40 pt-40 sm:pt-20">
                <TopDestinations />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>

          {/* End Top Destinations Section */}
        </>
      )}
    </>
  );
};

// export default dynamic(() => Promise.resolve(MainHome), { ssr: false });
export default MainHome;
