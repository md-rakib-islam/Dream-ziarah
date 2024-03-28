"use client";
import { singleTourInfo } from "@/hooks/useTours";
import AccordionContent from "./ItineraryContent";
// import MarkerInfoWindow from "@/components/map/MarkerInfoWindow";
import { useSelector } from "react-redux";

const index = () => {
  const { tourItem } = useSelector((state) => state.tour);
  console.log("map sourch", singleTourInfo[tourItem?.name]?.itinerarySrc);
  return (
    <div className="row y-gap-30">
      <div className="col-lg-3">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <AccordionContent />
          </div>
        </div>
      </div>
      {/* End col-lg-4 */}

      <div className="col-lg-9 map_height">
        <div className="map  overflow-hidden" id="itineraryContent">
          {/* <MarkerInfoWindow /> */}
          <iframe
            className="itinerary_map"
            src={singleTourInfo[tourItem?.name]?.itinerarySrc}
          ></iframe>
        </div>
      </div>
      {/* End col-lg-8 */}
    </div>
  );
};

export default index;
