import { Interweave } from "interweave";
import { useSelector } from "react-redux";

const ImportantInfo = () => {
  const {tourItem} = useSelector(state => state.tour);
  return (
    <div className="row x-gap-40 y-gap-40 justify-between pt-20">
      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Inclusions</div>
        <Interweave
                allowAttributes
                allowElements
                disableLineBreaks={false}
                content={tourItem?.inclution}
              />
        {/* <ul className="list-disc">
          <li>Superior Coach, Wi-Fi and USB Charging On-board</li>
          <li>Expert guide</li>
          <li>Admission to Windsor Castle (if option selected)</li>
          <li>Admission to Stonehenge</li>
        </ul> */}
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Departure details</div>
        <div className="text-15">
        Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="fw-500 mb-10">Know before you go</div>
        <ul className="list-disc">
          <li>Duration: {tourItem?.duration}</li>
          <li>Mobile tickets accepted</li>
          <li>Instant confirmation</li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Exclusions</div>
        {/* <ul className="list-disc">
          <li>Hotel pick-up and drop-off</li>
          <li>Gratuities</li>
          <li>Lunch</li>
        </ul> */}
        <Interweave
                allowAttributes
                allowElements
                disableLineBreaks={false}
                content={tourItem?.exclusion}
              />
      </div>

      <div className="col-12">
        <div className="fw-500 mb-10">Additional information</div>
        <ul className="list-disc">
          <li><span className="text-dark fw-500">Confirmation:</span> You will receive a confirmation at the time of booking.</li>
          <li>
          <span className="text-dark fw-500">Participant Suitability:</span> Most travelers can participate.
          </li>
          <li>
          <span className="text-dark fw-500">Weather Consideration:</span> Weather-dependent experience. In case of poor weather, you'll be offered an alternative date or a full refund.
          </li>
          <li>
          <span className="text-dark fw-500">Private Experience:</span> This is a private tour/activity. Your group will be the sole participants.
          </li>
          <li>
          <span className="text-dark fw-500">Refund Window:</span> To receive a full refund, please cancel at least 24 hours before the experience start date.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImportantInfo;
