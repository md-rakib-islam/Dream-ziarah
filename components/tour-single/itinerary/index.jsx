import { singleTourInfo } from "@/hooks/useTours";
import AccordionContent from "./ItineraryContent";
// import MarkerInfoWindow from "@/components/map/MarkerInfoWindow";
import { useSelector } from "react-redux";

const index = () => {
  const { tourItem } = useSelector((state) => state.tour);
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
        <div className="map rounded-4 overflow-hidden" id="itineraryContent">
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
