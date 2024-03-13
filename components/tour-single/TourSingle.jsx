"use client";
import CallToActions from "@/components/common/CallToActions";
import {
  useGetContentsByMenuContentTitleQuery,
  useGetItenariesByMenuContentIdQuery,
} from "@/features/content/contentApi";
import "photoswipe/dist/photoswipe.css";
// import DefaultFooter from "@/components/footer/default";
// import Header3 from "@/components/header/header-3";
import ImportantInfo from "@/components/tour-single/ImportantInfo";
import TourGallery from "@/components/tour-single/TourGallery";
// import DetailsReview2 from "@/components/tour-single/guest-reviews/DetailsReview2";
// import ReviewProgress2 from "@/components/tour-single/guest-reviews/ReviewProgress2";
import ReviewProgress2 from "@/components/activity-single/guest-reviews/ReviewProgress2";
import Itinerary from "@/components/tour-single/itinerary";
import Tours from "@/components/tours/Tours";
import ToursMadina from "@/components/tours/ToursMadina";
import ToursJedda from "@/components/tours/ToursJedda";
import ToursTaif from "@/components/tours/ToursTaif";
import { BASE_URL } from "@/constant/constants";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import { addItenarayItems, addtourItem } from "@/features/tour/tourSlice";
import { singleTourInfo } from "@/hooks/useTours";
// import dynamic from 'next/dynamic';
import Loading from "@/app/loading";
import { capitalize } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const TourSingleV1Dynamic = ({ params, children }) => {
  const dispatch = useDispatch();
  const [makka, setMakka] = useState(false);
  const [jedda, setJedda] = useState(false);
  const [madina, setMadina] = useState(false);
  const [taif, setTaif] = useState(false);
  const id = params?.slug;
  const { menuItems } = useSelector((state) => state.menus);
  const tourId = menuItems.find((item) => item.name === "Tour")?.id;

  // const ziarahId = menuItems
  //   .find((item) => item.name === "Tours")
  //   ?.children?.find((child) => child?.name == "Makka Tours")?.id;
  // const {data, isSuccess, isFulfilled} = useGetContentsByMenuContentIdQuery(id);
  const { data, isSuccess, isFulfilled } =
    useGetContentsByMenuContentTitleQuery(capitalize(params?.name));

  // const {data : itenarayItems, isSuccess: isItenariesSuccess} = useGetItenariesByMenuContentIdQuery(id);

  const {
    data: imageContents,
    isSuccess: isImageContentsSuccess,
    isLoading,
  } = useGetImagesByMenuIdQuery(tourId);

  const { data: itenarayItems, isSuccess: isItenariesSuccess } =
    useGetItenariesByMenuContentIdQuery(data?.id);

  if (isItenariesSuccess) {
    dispatch(addItenarayItems(itenarayItems));
  }
  let tour = {};
  if (isSuccess && isImageContentsSuccess) {
    // console.log("images", imageContents.content_images[data?.name]);
    tour = {
      id: data?.id,
      tag: "",
      slideImg: Array.isArray(imageContents?.content_images[data?.name])
        ? imageContents?.content_images[data?.name]
        : [`${imageContents.content_images[data?.name]}`],
      title: data?.name,
      location: singleTourInfo[data?.name]?.location,
      duration: data?.duration,
      numberOfReviews: singleTourInfo[data?.name]?.numberOfReviews,
      price: data?.price,
      tourType: "Attractions & Museums",
      delayAnimation: "200",
      languages: singleTourInfo[data?.name]?.languages,
      departure: singleTourInfo[data?.name]?.departure,
    };
    // checkLocation(params?.name);
    // console.log("Hele", data);
    dispatch(addtourItem(data));
  }
  useEffect(() => {
    const hasReloaded = localStorage.getItem("tourHasReloaded" || "");

    if (!hasReloaded) {
      localStorage.setItem("tourHasReloaded", "true");
      window.location.reload();
      checkLocation(params?.name);
    }
    localStorage.removeItem("hasReloaded" || "");
  }, []);
  useEffect(() => {
    if (params?.name && params?.name.includes("makkah-city")) {
      setMakka(true);
    } else if (params?.name && params?.name.includes("madinah-city")) {
      setMadina(true);
    } else if (params?.name && params?.name.includes("taif")) {
      setTaif(true);
    } else if (params?.name && params?.name.includes("jeddah")) {
      setJedda(true);
    } else {
      setMakka(false);
      setMadina(false);
      setTaif(false);
      setJedda(false);
    }
  }, [params?.name]);

  console.log(
    "imageContents",
    // data?.name,
    imageContents,
    data?.id,
    // capitalize(params?.name),
    imageContents?.content_images[data?.name]
  );

  // function checkLocation(params) {
  //   // Convert params.name to lowercase for case-insensitive comparison

  //   // Check if params.name includes "makkah-city"
  //   if (params.includes("makkah-city")) {
  //     setMakka(true);
  //   } else {
  //     setTaif(false);
  //   }

  //   // Check if params.name includes "taif"
  //   if (params.includes("taif")) {
  //     setTaif(true);
  //   } else {
  //     setTaif(false);
  //   }
  //   // Check if params.name includes "makkah-city"
  //   if (params.includes("madina-city")) {
  //     setMadina(true);
  //   } else {
  //     setMadina(false);
  //   }
  //   // Check if params.name includes "jedda"
  //   if (params.includes("jedda")) {
  //     setJedda(true);
  //   } else {
  //     setJedda(false);
  //   }

  //   // Return the states
  // }

  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-30 justify-between items-end">
            {/* <div className="col-auto">
              <h1 className="text-30 fw-600">{tour?.title}</h1>
              <div className="row x-gap-20 y-gap-20 items-center pt-10">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="d-flex x-gap-5 items-center">
                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>
                    </div>

                    <div className="text-14 text-light-1 ml-10">
                      {tour?.numberOfReviews} reviews
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-placeholder text-16 text-light-1"></i>
                        <div className="text-15 text-light-1">
                          {tour?.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {children}
            {/* End .col */}

            <div className="col-lg-4 col-sm-12">
              <div className="row x-gap-10 y-gap-10 ml-15">
                <div className="col-auto btn-group dropup">
                  <button
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="button px-10 py-10 -blue-1 "
                  >
                    <i className="icon-share mr-10"></i>
                    Share
                  </button>
                  <ul className="dropdown-menu">
                    <li className="d-flex my-2">
                      <FacebookShareButton
                        className="me-2"
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <FacebookIcon size={32} round={true} />
                      </FacebookShareButton>
                      <FacebookMessengerShareButton
                        className="me-2"
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <FacebookMessengerIcon size={32} round={true} />
                      </FacebookMessengerShareButton>
                      <WhatsappShareButton
                        className="me-2"
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <WhatsappIcon size={32} round={true} />
                      </WhatsappShareButton>
                      <EmailShareButton
                        className="me-2"
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <EmailIcon size={32} round={true} />
                      </EmailShareButton>
                      <LinkedinShareButton
                        url={`https://dreamziarah.com/tours/${tour?.title
                          ?.toLowerCase()
                          ?.split(" ")
                          ?.join("-")}`}
                      >
                        <LinkedinIcon size={32} round={true} />
                      </LinkedinShareButton>
                    </li>
                  </ul>
                </div>

                <div className="col-auto">
                  <button className="button px-10 py-10 -blue-1 bg-light-2">
                    <i className="icon-heart mr-10"></i>
                    Save
                  </button>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}

      {isLoading ? (
        <div className="col-12 h-50 text-center">
          <Loading />
        </div>
      ) : (
        <TourGallery tour={tour} />
      )}

      {/* End single page content */}

      <section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row x-gap-40 y-gap-40">
              <div className="col-auto">
                <h3 className="text-22 fw-600">Important information</h3>
              </div>
            </div>
            {/* End row */}
            <ImportantInfo departure={tour} />
          </div>
          {/* End pt-40 */}
        </div>
        {/* End .container */}
      </section>
      {/* End important info */}

      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-600 mb-20">Itinerary</h3>
          <Itinerary />
        </div>
      </section>
      {/* End Itinerary */}

      {/* <section className="mt-40 border-top-light pt-40">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-3">
              <h3 className="text-22 fw-600">Guest reviews</h3>
              <ReviewProgress2 />
            </div>

            <div className="col-xl-8">
              <DetailsReview2 />
            </div>
          </div>
        </div>
      </section> */}
      {/* End Review section */}

      {/* <section className="mt-40 border-top-light pt-40">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-3">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-600">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>
          

              <ReplyFormReview2 />
          
            </div>
         

            <div className="col-xl-8">
              <ReplyForm />
            </div>
      
          </div>
        
        </div>
   
      </section> */}
      {/* End Reply Comment box section */}

      {makka && data?.name && (
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
              <Tours filterTour={data?.name} />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}

      {/* End Tours Sections */}

      {madina && data?.name && (
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
              <ToursMadina filterTour={data?.name} />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}
      {/* End Tours Sections */}

      {jedda && data?.name && (
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
              <ToursJedda filterTour={data?.name} />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}
      {/* End Tours Sections */}

      {taif && data?.name && (
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
              <ToursTaif filterTour={data?.name} />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
      )}
      {/* End Tours Sections */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
    </>
  );
};

// export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
//   ssr: false,
// });
export default TourSingleV1Dynamic;
