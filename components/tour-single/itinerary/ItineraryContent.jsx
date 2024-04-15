"use client";
// import Image from "next/image";
import { useState } from "react"; // Import useState
import { Interweave } from "interweave";
import { useSelector } from "react-redux";

const ItineraryContent = () => {
  const { itenarayItems } = useSelector((state) => state.tour);

  // Maintain state for expanded items
  const [expandedItems, setExpandedItems] = useState({});

  const modifiedItenarayItem = itenarayItems?.map((item, indx) => ({
    id: item.id,
    targetCollapse: `item_${indx + 1}`,
    itemNo: indx + 1,
    title: item.title,
    img: "/img/tours/list.png",
    content: item.description,
    classShowHide: "",
    location: item.location,
  }));

  modifiedItenarayItem.reverse();

  // Function to toggle item expansion
  const toggleItem = (itemId) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [itemId]: !prevExpandedItems[itemId],
    }));
  };

  return (
    <>
      {modifiedItenarayItem.map((item, index) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-600">{index + 1}</div>
              </div>
              <div className="ml-20">
                <div
                  className={`text-16 lh-15 fw-600 ${
                    expandedItems[item.id] ? "text-blue-1" : ""
                  }`}
                >
                  {item.title}
                </div>
                <div
                  className={`accordion-collapse collapse ${
                    expandedItems[item.id] ? "show" : ""
                  } ${expandedItems[item.id] ? "expanded" : ""}`}
                  id={item.targetCollapse}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                    <div className="text-14 lh-17 mt-15 text-black">
                      <Interweave
                        className="text-black"
                        content={item.content}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="accordion__button"
                  onClick={() => toggleItem(item.id)}
                >
                  {/* Toggle button text based on item expansion state */}
                  <button className="d-block lh-15 text-14 text-blue-1 underline fw-600 mt-5">
                    {expandedItems[item.id] ? "See less" : "See more"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
