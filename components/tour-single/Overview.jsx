import { singleTourInfo } from "@/hooks/useTours";
import { Interweave } from "interweave";
import { useSelector } from "react-redux";
const Overview = () => {
  const {tourItem} = useSelector(state => state.tour);

  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12 text-dark-1 text-15">
          <h3 className="text-22 fw-500">Overview</h3>
          <Interweave
                allowAttributes
                allowElements
                disableLineBreaks={true}
                content={tourItem?.description}
              />

          {/* <p className="text-dark-1 text-15 mt-20">
          Over the course of 3 hours, you will embark on a spiritual odyssey that will deepen your understanding of this sacred city.

          Our experienced guide will lead you on a profound journey of discovery, offering insights into the historical and religious significance of each site. Your ziarah will take you to:
          </p>

          <ul className="list-disc text-15 mt-10">
            <li>
            <span className="fw-bold">Jabal al Thawr :</span> Begin your journey at the majestic Jabal al Thawr, an awe-inspiring mountain that holds a special place in Islamic history.
            </li>
            <li>
            <span className="fw-bold">Mina : </span>Visit the holy valley of Mina, where pilgrims participate in symbolic rituals during Hajj.
            </li>
            <li>
            <span className="fw-bold">Jabal al Thawr :</span> Begin your journey at the majestic Jabal al Thawr, an awe-inspiring mountain that holds a special place in Islamic history.
            </li>
            <li>
            <span className="fw-bold">Jabal al Thawr :</span> Begin your journey at the majestic Jabal al Thawr, an awe-inspiring mountain that holds a special place in Islamic history.
            </li>
            <li>
            <span className="fw-bold">Jabal al Thawr :</span> Begin your journey at the majestic Jabal al Thawr, an awe-inspiring mountain that holds a special place in Islamic history.
            </li>
            <li>
            <span className="fw-bold">Jabal al Thawr :</span> Begin your journey at the majestic Jabal al Thawr, an awe-inspiring mountain that holds a special place in Islamic history.
            </li>
            <li>
            <span className="fw-bold">Jabal al Thawr :</span> Begin your journey at the majestic Jabal al Thawr, an awe-inspiring mountain that holds a special place in Islamic history.
            </li>
            <li>
            <span className="fw-bold">Jabal al Thawr :</span> Begin your journey at the majestic Jabal al Thawr, an awe-inspiring mountain that holds a special place in Islamic history.
            </li>
          </ul> */}

          {/* <a
            href="#"
            className="d-block text-14 text-blue-1 fw-500 underline mt-10"
          >
            Show More
          </a> */}
        </div>

       {/* {
        tourItem?.id === 1 ? "": ( <div className="col-md-6">
        <h5 className="text-16 fw-500">Available languages</h5>
        <div className="text-15 mt-10">
          
          Bengali, English, Hindi, Urdu, Malay, Indonesian.
        </div>
      </div>)
       } */}
       {
        singleTourInfo[tourItem?.name]?.languages && (<div className="col-md-6">
        <h5 className="text-16 fw-500">Available languages</h5>
        <div className="text-15 mt-10">
          {singleTourInfo[tourItem?.name]?.languages}
        </div>
      </div>)
       }

        <div className="col-md-6">
          <h5 className="text-16 fw-500">Cancellation policy</h5>
          <div className="text-15 mt-10">
            {/* For a full refund, cancel at least 24 hours in advance of the start
            date of the experience. */}
            <ul className="list-disc">
              <li>We will charge a cancellation fee of 100% if booking is cancelled 1 day or less before the event</li>
              {/* <li>We will charge a cancellation fee of 0% if booking is cancelled 1000 days or less before the event</li> */}
            </ul>
          </div>
        </div>

        {/* <div className="col-12">
          <h5 className="text-16 fw-500">Highlights</h5>
          <ul className="list-disc text-15 mt-10">
            <li>
              Travel between the UNESCO World Heritage sites aboard a
              comfortable coach
            </li>
            <li>Explore with a guide to delve deeper into the history</li>
            <li>Great for history buffs and travelers with limited time</li>
          </ul>
        </div> */}
      </div>

      {/* <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">What&lsquo;s Included</h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-6">
                <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i> Entry ticket to
                  Harry Potter Warner Bros Studio Tour London
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i> Return transfers
                  in air-conditioned coach
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i> Food
                  and drinks
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i>{" "}
                  Gratuities
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i>{" "}
                  Digital guide available in 10 different languages at
                  additional cost
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Overview;
