import dynamic from 'next/dynamic';
// import TopDestinations from "@/components/destinations/TopDestinations";
// import Hero7 from "@/components/hero/hero-7";
// import Hero3 from "@/components/hero/hero-3";
// import WhyChoose from "@/components/home/home-3/WhyChoose";
// import Tours from "@/components/tours/Tours";
import Link from "next/link";

const TopDestinations = dynamic(() => import("@/components/destinations/TopDestinations"));
const Hero3 = dynamic(() => import("@/components/hero/hero-3"));
const WhyChoose = dynamic(() => import("@/components/home/home-3/WhyChoose"));
const Tours = dynamic(() => import("@/components/tours/Tours"));

// export const metadata = {
//   title: "Home-3 || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const home_3 = () => {
  
  return (
    <>
      {/* <Hero7/> */}
      <div className="header-margin"></div>
      <Hero3/>
      {/* End Hero 3 */}
      
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h1 className="sectionTitle__title">Most Popular Tours</h1>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Explore Our Best Sellers: Unmatched Experiences in Every Journey
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      
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

      <section style={{backgroundColor : "#d3f6ee"}} className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Free cancellation</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                You'll receive a full refund if you cancel at least 24 hours in advance of most experiences.
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}
    </>
  );
};

// export default dynamic(() => Promise.resolve(home_3), { ssr: false });
export default home_3;
