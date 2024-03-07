import CallToActions from "@/components/common/CallToActions";
// import DefaultHeader from "@/components/header/default-header";
// import DefaultFooter from "@/components/footer/default";
// import Activity from "@/components/activity/Activity";
import Slights from "@/components/block/Slights";
// import Cars from "@/components/cars/Cars";
// import LocationTopBar from "@/components/common/LocationTopBar";
import TopDestinations2 from "@/components/destinations/TopDestinations2";
import Banner from "@/components/destinations/components/Banner";
// import Categories from "@/components/destinations/components/Categories";
// import GeneralInfo from "@/components/destinations/components/GeneralInfo";
import IntroTown from "@/components/destinations/components/IntroTown";
import Weather from "@/components/destinations/components/Weather";
import Faq from "@/components/faq/Faq";
import Testimonial from "@/components/home/home-1/Testimonial";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";
// import Hotels from "@/components/hotels/Hotels2";
// import Rentals from "@/components/rentals/Rentals";
import Tours from "@/components/tours/Tours";
import ToursMadina from "@/components/tours/ToursMadina";
import ToursJedda from "@/components/tours/ToursJedda";
import ToursTaif from "@/components/tours/ToursTaif";
import { slightContent } from "@/data/desinations";
import getAllMenuItem from "@/services/menuService";
import Link from "next/link";
// import { useEffect, useState } from "react";

const destinationsMetadatas = {
  jedda: {
    title: "Jeddah: Gateway to Tranquil Beauty - Dream Ziarah",
    description:
      "Explore the enchanting city of Jeddah with DreamZiarah.com. Immerse yourself in the blend of modernity and tradition, where vibrant culture meets serene coastal beauty. Plan your journey to Jeddah and create unforgettable memories.",
  },
  makkah: {
    title: "Makkah: The Spiritual Heartbeat - Dream Ziarah",
    description:
      "Embark on a sacred pilgrimage to Makkah with DreamZiarah.com. Discover the spiritual heartbeat of Islam, where the iconic Kaaba stands as a symbol of devotion. Explore our Makkah packages and embark on a journey of profound spiritual significance.",
  },
  medina: {
    title: "Medina: Oasis of Peace and Spirituality - Dream Ziarah",
    description:
      "Experience the tranquility of Medina with DreamZiarah.com. Immerse yourself in the peaceful surroundings of the Prophet's Mosque and explore the rich Islamic history. Plan your spiritual journey to Medina with our curated packages.",
  },
  taif: {
    title: "Taif: Mountain Retreat and Cultural Gem - Dream Ziarah",
    description:
      "Discover the scenic beauty and cultural richness of Taif with DreamZiarah.com. Nestled in the mountains, Taif offers a refreshing escape with its lush landscapes and historical charm. Explore our Taif packages for a unique cultural experience.",
  },
  tabuk: {
    title: "Tabuk: Unveiling Historical Treasures - Dream Ziarah",
    description:
      "Uncover the historical treasures of Tabuk with DreamZiarah.com. Immerse yourself in the rich heritage of this ancient city, known for its archaeological wonders and unique landscapes. Explore Tabuk with our thoughtfully designed travel packages.",
  },
};

// export const metadata = {
//   title: "Destinations || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

export async function generateStaticParams() {
  const data = await getAllMenuItem();
  // console.log(menus);

  return data?.menus
    .find((item) => item.name === "Destinations")
    ?.children?.map((item) => ({
      slug: item.name,
    }));
}

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;

  return {
    title: destinationsMetadatas[slug]?.title,
    description: destinationsMetadatas[slug]?.description,
  };
}

const Destinations = ({ params }) => {
  // const [makka, setMakka] = useState(false);
  // const [jedda, setJedda] = useState(false);
  // const [madina, setMadina] = useState(false);
  // const [taif, setTaif] = useState(false);
  const slug = params.slug;

  // useEffect(() => {
  //   if (params?.slug && params?.slug.includes("makkah-city")) {
  //     setMakka(true);
  //   } else if (params?.slug && params?.slug.includes("madinah-city")) {
  //     setMadina(true);
  //   } else if (params?.slug && params?.slug.includes("taif")) {
  //     setTaif(true);
  //   } else if (params?.slug && params?.slug.includes("Jeddah")) {
  //     setJedda(true);
  //   } else {
  //     setMakka(false);
  //     setMadina(false);
  //     setTaif(false);
  //     setJedda(false);
  //   }
  // }, [params?.slug]);
  // console.log("slug", params.slug);

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <DefaultHeader /> */}
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <section className="layout-pb-md">
        <div className="container">
          <div className="row">
            <Banner slug={slug} />
          </div>
          {/* End .row */}

          {/* <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div> */}
          {/* End .row */}

          <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>
                What to know before visiting{" "}
                {slug == "medina"
                  ? "Madina"
                  : slug == "jedda"
                  ? "Jeddah"
                  : slug.charAt(0).toUpperCase() + slug.slice(1)}
              </h2>
            </div>
            {/* End .col-auto */}

            <IntroTown slug={slug} />
          </div>
          {/* End .row */}

          <div className="pt-30 mt-30 border-top-light" />
          {/* border separation */}

          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">Local weather</h2>
            </div>
            {/* End. col-12 */}

            <Weather slug={slug} />
          </div>
          {/* End local weather */}

          <div className="pt-30 mt-30 border-top-light" />
          {/* <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
            
            <GeneralInfo />
          </div> */}

          {/* <div className="mt-30 border-top-light" /> */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Banner,categorie,intro,weather, generic info section */}

      {params?.slug && params?.slug.includes("makkah") && (
        <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h2 className="sectionTitle__title">
                    Popular Tours In Makkah
                  </h2>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Find Your Perfect Makkah Tour: Private, Shared, and More
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
      )}

      {/* End Tours Sections */}

      {params?.slug && params?.slug.includes("medina") && (
        <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h1 className="sectionTitle__title">
                    Popular Tours In Madina
                  </h1>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Find Your Perfect Madina Tour: Private, Shared, and More
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
              <ToursMadina />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}
      {/* End Tours Sections */}

      {params?.slug && params?.slug.includes("jedda") && (
        <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h1 className="sectionTitle__title">
                    Popular Tours In Jeddah
                  </h1>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Find Your Perfect Jeddah Tour: Private, Shared, and More
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
              <ToursJedda />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}
      {/* End Tours Sections */}

      {params?.slug && params?.slug.includes("taif") && (
        <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="sectionTitle -md">
                  <h1 className="sectionTitle__title">Popular Tours In Taif</h1>
                  <p className=" sectionTitle__text mt-5 sm:mt-0">
                    Find Your Perfect Taif Tour: Private, Shared, and More
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
              <ToursTaif />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}
      {/* End Tours Sections */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Top sights in{" "}
                  {slug == "medina"
                    ? "Madina"
                    : slug == "jedda"
                    ? "Jeddah"
                    : slug.charAt(0).toUpperCase() + slug.slice(1)}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {slightContent[slug]?.title}
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <Slights slug={slug} />
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-auto">
              <div className="mt-20 sectionTitle -md">
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  {slightContent[slug]?.footerContent}
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-center mt-40">
            <div className="col-auto">
              <Link
                href="#"
                className="button h-50 w-250 -outline-blue-1 text-blue-1"
              >
                Explore more <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top sights in London */}

      <section className="layout-pt-lg layout-pb-lg bg-light-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                FAQs about
                <br />
                {slug == "medina"
                  ? "Madina"
                  : slug == "jedda"
                  ? "Jeddah"
                  : slug.charAt(0).toUpperCase() + slug.slice(1)}
              </h2>
            </div>
            {/* End .col */}

            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq slug={slug} />
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Faq Section */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Destinations near{" "}
                  {slug == "medina"
                    ? "Madina"
                    : slug == "jedda"
                    ? "Jeddah"
                    : slug.charAt(0).toUpperCase() + slug.slice(1)}
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="pt-40 relative">
            <TopDestinations2 slug={slug} />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End top destinations */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
      {/* End Call To Actions Section */}
    </>
  );
};

// export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
export default Destinations;
