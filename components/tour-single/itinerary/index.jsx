import { singleTourInfo } from "@/hooks/useTours";
import AccordionContent from "./ItineraryContent";
// import MapPropertyFinder from "./MapPropertyFinder";
// import MarkerInfoWindow from "@/components/map/MarkerInfoWindow";
import { useSelector } from "react-redux";

const index = () => {
  const {tourItem} = useSelector(state => state.tour);
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

      <div className="col-lg-8">
        <div className="map rounded-4" id="itineraryContent">
          {/* <MapPropertyFinder /> */}
          {/* <MarkerInfoWindow /> */}

          <iframe style={{ height: '100%', width: '100%' }} src={singleTourInfo[tourItem?.name]?.itinerarySrc}></iframe>
        </div>
      </div>
      {/* End col-lg-8 */}
    </div>
  );
};

export default index;
