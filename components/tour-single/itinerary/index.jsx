import AccordionContent from "./ItineraryContent";
// import MapPropertyFinder from "./MapPropertyFinder";
import MarkerInfoWindow from "@/components/map/MarkerInfoWindow";

const index = () => {
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
        <div className="map rounded-4 overflow-hidden" id="itineraryContent">
          {/* <MapPropertyFinder /> */}
          <MarkerInfoWindow />
        </div>
      </div>
      {/* End col-lg-8 */}
    </div>
  );
};

export default index;
