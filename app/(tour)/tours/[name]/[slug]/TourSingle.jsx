"use client";
// import toursData from "@/data/tours";
import { useGetContentsByMenuContentIdQuery, useGetItenariesByMenuContentIdQuery } from "@/features/content/contentApi";
import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
// import Header11 from "@/components/header/header-11";
import CallToActions from "@/components/common/CallToActions";
// import DefaultFooter from "@/components/footer/default";
// import Header3 from "@/components/header/header-3";
import ImportantInfo from "@/components/tour-single/ImportantInfo";
// import TopBreadCrumb from "@/components/tour-single/TopBreadCrumb";
import TourGallery from "@/components/tour-single/TourGallery";
// import DetailsReview2 from "@/components/tour-single/guest-reviews/DetailsReview2";
// import ReviewProgress2 from "@/components/tour-single/guest-reviews/ReviewProgress2";
import ReviewProgress2 from "@/components/activity-single/guest-reviews/ReviewProgress2";
import Itinerary from "@/components/tour-single/itinerary";
import Tours from "@/components/tours/Tours";
import { BASE_URL } from "@/constant/constants";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import { addItenarayItems, addtourItem } from "@/features/tour/tourSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

// export const metadata = {
//   title: "Tour Single || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const TourSingleV1Dynamic = ({ params }) => {
  // console.log("params", params);
  // useWeather()
  const dispatch = useDispatch();
  const id = params?.slug;
  const {menuItems} = useSelector(state => state.menus);
  const tourId = menuItems.find((item) => item.name === "Tour")?.id;
  // const tour = toursData.find((item) => item.id == id) || toursData[0];
  const {data, isSuccess} = useGetContentsByMenuContentIdQuery(id);
  const {data : itenarayItems, isSuccess: isItenariesSuccess} = useGetItenariesByMenuContentIdQuery(id);
  const {data : imageContents, isSuccess: isImageContentsSuccess} = useGetImagesByMenuIdQuery(tourId);

  if(isItenariesSuccess){
    // console.log("Itenaries", itenarayItems);
    dispatch(addItenarayItems(itenarayItems));
  }
  let tour = {};
  if(isSuccess && isImageContentsSuccess){
    // console.log("images", imageContents.content_images[data?.name]);
    tour =   {
      id: data?.id,
      tag: "",
      slideImg: [`${BASE_URL}/media/${imageContents.content_images[data?.name]}`],
      title: data?.name,
      location: "Mecca, Saudi Arabia",
      duration: data?.duration,
      numberOfReviews: tour.id === 10 ? "57": tour.id === 9 ? "51" : "61",
      price: data?.price,
      tourType: "Attractions & Museums",
      delayAnimation: "200",
    }
    // console.log("Hele", data);
    dispatch(addtourItem(data));
  }

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      {/* <Header11 /> */}
      {/* <Header3/> */}
      {/* End Header 1 */}

      {/* <TopBreadCrumb /> */}
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
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

                    {/* <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10">
                <div className="col-auto btn-group dropup">
                  <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="button px-15 py-10 -blue-1 ">
                    <i className="icon-share mr-10"></i>
                    Share
                  </button>
                  <ul className="dropdown-menu">
                    <li className="d-flex my-2">
                      <FacebookShareButton className="me-2" url={`https://dreamziarah.com/tours/${tour?.title?.split(" ")?.join("_")}/${tour.id}`}>
                        <FacebookIcon size={32} round={true}/>
                      </FacebookShareButton>
                      <FacebookMessengerShareButton className="me-2" url={`https://dreamziarah.com/tours/${tour?.title?.split(" ")?.join("_")}/${tour.id}`}>
                        <FacebookMessengerIcon size={32} round={true}/>
                      </FacebookMessengerShareButton>
                      <WhatsappShareButton className="me-2" url={`https://dreamziarah.com/tours/${tour?.title?.split(" ")?.join("_")}/${tour.id}`}>
                        <WhatsappIcon size={32} round={true}/>
                      </WhatsappShareButton>
                      <EmailShareButton className="me-2" url={`https://dreamziarah.com/tours/${tour?.title?.split(" ")?.join("_")}/${tour.id}`}>
                        <EmailIcon size={32} round={true}/>
                      </EmailShareButton>
                      <LinkedinShareButton url={`https://dreamziarah.com/tours/${tour?.title?.split(" ")?.join("_")}/${tour.id}`}>
                        <LinkedinIcon size={32} round={true}/>
                      </LinkedinShareButton>
                    </li>
                  </ul>
                </div>

                <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1 bg-light-2">
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

      <TourGallery tour={tour} />

      {/* End single page content */}

      <section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row x-gap-40 y-gap-40">
              <div className="col-auto">
                <h3 className="text-22 fw-500">Important information</h3>
              </div>
            </div>
            {/* End row */}
            <ImportantInfo />
          </div>
          {/* End pt-40 */}
        </div>
        {/* End .container */}
      </section>
      {/* End important info */}

      <section className="border-top-light  mt-40 pt-40">
        <div className="container">
          <h3 className="text-22 fw-500 mb-20">Itinerary</h3>
          <Itinerary />
        </div>
      </section>
      {/* End Itinerary */}

      {/* <section className="mt-40">
        <div className="container ">
          <div className="pt-40 border-top-light">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-22 fw-500">
                  FAQs about
                  <br /> The Crown Hotel
                </h2>
              </div>
              

              <div className="col-lg-8">
                <div
                  className="accordion -simple row y-gap-20 js-accordion"
                  id="Faq1"
                >
                  <Faq />
                </div>
              </div>
              
            </div>
           
          </div>
         
        </div>
     
      </section> */}
      {/* End Faq about sections */}

      <section className="mt-40 border-top-light pt-40">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-3">
              <h3 className="text-22 fw-500">Guest reviews</h3>
              <ReviewProgress2 />
             
            </div>
        

            {/* <div className="col-xl-8">
              <DetailsReview2 />
            </div> */}
           
          </div>

        </div>


      </section>
      {/* End Review section */}

      {/* <section className="mt-40 border-top-light pt-40">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-3">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
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

      <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
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

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
