"use client";
// import Image from "next/image";
import { Interweave } from "interweave";
import { useSelector } from "react-redux";

const ItineraryContent = () => {
  const {itenarayItems} = useSelector(state => state.tour);
  // console.log("itenaray",itenarayItems)
  
  const modifiedItenarayItem = itenarayItems?.map((item, indx) => ({
    id: item.id,
    targetCollapse: `item_${indx + 1}`,
    itemNo: indx + 1,
    title: item.title,
    img: "/img/tours/list.png",
    content: item.description,
    classShowHide: "",
    location : item.location
  }))

  modifiedItenarayItem.reverse();

  return (
    <>
      {modifiedItenarayItem.map((item, index) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-500">{index + 1}</div>
              </div>
              {/* End item number */}

              <div className="ml-20">
                <div className="text-16 lh-15 fw-500">{item.title}</div>
                <div
                  className={`accordion-collapse collapse ${item.classShowHide}`}
                  id={item.targetCollapse}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                    {/* <Image
                      width={350}
                      height={160}
                      src={item.img}
                      alt="image"
                      className="rounded-4 mt-15"
                    /> */}
                    <div className="text-14 lh-17 mt-15">
                      <Interweave
                        allowAttributes
                        allowElements
                        disableLineBreaks={true}
                        content={item.content}
                      />
                    </div>
                  </div>
                </div>
                {/* End accordion conent */}

                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.targetCollapse}`}
                >
                  <button className="d-block lh-15 text-14 text-blue-1 underline fw-500 mt-5">
                    {/* See details &amp; photo */}
                    See details
                  </button>
                </div>
                {/* End accordion button */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
