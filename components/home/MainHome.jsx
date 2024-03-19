"use client";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import dynamic from "next/dynamic";
import Image from "next/image";

// import TopDestinations from "@/components/destinations/TopDestinations";
// import Hero7 from "@/components/hero/hero-7";
// import Hero3 from "@/components/hero/hero-3";
// import WhyChoose from "@/components/home/home-3/WhyChoose";
// import Tours from "@/components/tours/Tours";
import Link from "next/link";
import { useState } from "react";
import TourSkeleton from "../skeleton/TourSkeleton";
import useToursMakka from "@/hooks/useToursMakka";

const TopDestinations = dynamic(() =>
  import("@/components/destinations/TopDestinations")
);
const Hero3 = dynamic(() => import("@/components/hero/hero-3"));
const WhyChoose = dynamic(() => import("@/components/home/home-3/WhyChoose"));
const Tours = dynamic(() => import("@/components/tours/Tours"));
const ToursMadina = dynamic(() => import("@/components/tours/ToursMadina"));
const ToursJedda = dynamic(() => import("@/components/tours/ToursJedda"));
const ToursTaif = dynamic(() => import("@/components/tours/ToursTaif"));

// export const metadata = {
//   title: "Home-3 || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const home_3 = () => {
  // const router = useRouter();
  const [dataAvailable, setDataAvailable] = useState(false);
  const { isLoading } = useGetSliderImagesQuery();

  // Function to handle data availability
  const handleDataAvailability = (isDataAvailable) => {
    setDataAvailable(isDataAvailable);
  };
  return (
    // isLoading ? (
    //   <div
    //     style={{
    //       position: "fixed",
    //       height: "100%",
    //       width: "100%",
    //       top: "0px",
    //       left: "0px",
    //       display: "flex",
    //       justifyContent: "center",
    //       backgroundColor: "#ffffff",
    //       alignItems: "center",
    //       zIndex: 100,
    //     }}
    //   >
    //     <Image
    //       height={200}
    //       width={300}
    //       style={{
    //         marginTop: "100pz",
    //       }}
    //       src="https://imagedelivery.net/dIKhvGtesTiRSxhQ2oKWkA/424b106d-c60f-40fb-739d-76fc8d54cb00/public"
    //     />
    //   </div>
    // ) : (
    <>
      {/* <Hero7/> */}
      <div className="header-margin"></div>
      <Hero3 onDataAvailable={handleDataAvailability} />
      {/* End Hero 3 */}

      <section className="layout-pt-md layout-pb-md ">
        <div className="container">
          <div className="row y-gap-22 justify-between items-start">
            <div className="col-8 col-lg-auto">
              <div className="sectionTitle -md">
                <h1 className="sectionTitle__title">Ziyarat In Makkah</h1>
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
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-22 justify-between items-start">
            <div className="col-8 col-lg-auto ">
              <div className="sectionTitle -md">
                <h1 className="sectionTitle__title">Ziyarat In Madina</h1>
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
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          {dataAvailable && (
            <div className="row y-gap-22 justify-between items-start">
              <div className="col-8 col-lg-auto">
                <div className="sectionTitle -md">
                  <h1 className="sectionTitle__title">Ziyarat In Jeddah</h1>
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
          )}
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <ToursJedda />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          {dataAvailable && (
            <div className="row y-gap-22 justify-between items-start">
              <div className="col-8 col-lg-auto">
                <div className="sectionTitle -md">
                  <h1 className="sectionTitle__title">Ziyarat In Taif</h1>
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
          )}
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <ToursTaif />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      {dataAvailable && (
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
      )}
      {/* End Why choose Section */}

      {dataAvailable && (
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
      )}
      {/* End Top Destinations Section */}

      {dataAvailable && (
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
                    You'll receive a full refund if you cancel at least 24 hours
                    in advance of most experiences.
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}
      {/* End Why choose Section */}
    </>
  );
};

// export default dynamic(() => Promise.resolve(home_3), { ssr: false });
export default home_3;
