"use client";
import { singleTourInfo } from "@/hooks/useTours";
import AccordionContent from "./ItineraryContent";
// import MarkerInfoWindow from "@/components/map/MarkerInfoWindow";
import { useSelector } from "react-redux";
import useWindowSize from "@/hooks/useWindowSize";

const index = ({ name }) => {
  const { tourItem } = useSelector((state) => state.tour);
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="row y-gap-30">
      <div className="col-lg-4">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <AccordionContent />
          </div>
        </div>
      </div>
      {/* End col-lg-4 */}

      <div className="col-lg-8 map_height">
        <div className="map  overflow-hidden" id="itineraryContent">
          {/* <MarkerInfoWindow /> */}
          <iframe
            className="itinerary_map map_height"
            style={
              {
                // marginLeft:
                //   isMobile && name && name.includes("makkah-city")
                //     ? "-250px"
                //     : isMobile && name && name.includes("madinah-city")
                //     ? "-320px"
                //     : isMobile && name && name.includes("madinah-city")
                //     ? "-320px"
                //     : isMobile && name && name.includes("taif")
                //     ? "-200px"
                //     : "",
                // marginRight:
                //   !isMobile && name && name.includes("makkah-city")
                //     ? "-200px"
                //     : "",
              }
            }
            src={singleTourInfo[tourItem?.name]?.itinerarySrc}
          ></iframe>
        </div>
      </div>
      {/* End col-lg-8 */}
    </div>
  );
};

export default index;
