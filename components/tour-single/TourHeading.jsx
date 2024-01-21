import { GET_CONTENT_BY_TITLE } from '@/constant/constants';
import { capitalize } from '@/utils';


export const singleTourInfo = {
    "Day Trip From Makkah To Taif Vehicle Sharing With Guide" : {
        location : "Taif, Saudi Arabia",
        numberOfReviews : "63",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1XdwewvF4NOyYwvTRAKEt2s3elk0Jc6U&ehbc=2E312F&z=9"
    },
    "Day Trip From Makkah To Taif Luxury Private Vehicle" : {
        location : "Taif, Saudi Arabia",
        numberOfReviews : "53",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1rQuDRVLt4RMV0ojn7AtB5vhr9CgCt2Y&ehbc=2E312F&z=10"
    },
    "Day Trip From Makkah To Jeddah Vehicle Sharing With Guide": {
        location : "Jeddah, Saudi Arabia",
        numberOfReviews : "57",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1ucOabmqQaTyhe91RypSigvaZl_5UG-E&ehbc=2E312F&z=10"
    },
    "Day Trip From Makkah To Jeddah Luxury Private Vehicle": {
        location : "Jeddah, Saudi Arabia",
        numberOfReviews : "61",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1nIIELr6rEaC9U7iIE_8kFC0jItIlC00&ehbc=2E312F&z=10"
    },
    "Makkah City Ziarah Vehicle Sharing With Guide" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "55",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1oq8duyGvFqjaYzmTdOgZ6m6RHZKH6-4&ehbc=2E312F&z=6"
    },
    "Makkah City Ziarah Luxury Private Vehicle With Guide" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "67",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "3-15",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=12hqGh2hTCmUqQIo60aGhSTOz3wqtpSQ&ehbc=2E312F&z=6"
    },
    "Makkah City Ziarah Luxury Private Vehicle Without Guide" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "65",
        languages : "",
        groupSize : "3-15",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1iqwSAEp3RWgC4awxv4Sh8cZUVDlxW-Q&ehbc=2E312F&z=6"
    },
    "Hajj 2024: Embrace the Divine" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "65",
        languages : "",
        groupSize : "1-42",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1zyUakEQI3Oi8hrnipIJ1Hhkl1NtzG4c&ehbc=2E312F&z=12"
    },
    "Umrah" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "57",
        languages : "",
        groupSize : "3-8",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1CM8PjQjW7zWc_PpHMpNHHHRYlZU1-cw&ehbc=2E312F&z=7"
    }
}



const TourHeading = async({ params}) => {
    // const name = params?.name;
    
    const res = await fetch(`${GET_CONTENT_BY_TITLE}/${capitalize(params?.name)}`, { next: { revalidate: 3600 } });
    let data;
    if(res.ok){
         data = await res.json();
    }
   

  return (
    <div className="col-auto">
              <h1 className="text-30 fw-600">{data?.name}</h1>
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
                    {singleTourInfo[data?.name]?.numberOfReviews} reviews
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-placeholder text-16 text-light-1"></i>
                        <div className="text-15 text-light-1">
                          {singleTourInfo[data?.name]?.location}
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
  )
}

export default TourHeading