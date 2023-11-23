"use client";
import Link from "next/link";
import { useSelector } from 'react-redux';
// import { destinations5 } from "../../data/desinations";

const TopDestinations = () => {
  const {menuItems} = useSelector(state => state.menus);
  const destinations = menuItems.find((item) => item.name === "Destinations")?.children;
  const modifiedDestinations = destinations?.map((item, indx) => ({
    id: item.id,
    colClass: (indx + 1) <= 3 ? (indx + 1) % 2 !== 0? "col-xl-3 col-md-4 col-sm-6" : "col-xl-6 col-md-4 col-sm-6" : "col-xl-6 col-md-4 col-sm-6",
    img: "/img/destinations/2/1.png",
    name: item.name,
    numberOfProperties: "1714",
    delayAnimation: "200",
  }))
  return (
    <>
      {modifiedDestinations?.map((item) => (
        <div
          className={item.colClass}
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href="/tour-list-v3"
            className="citiesCard -type-3 d-block h-full rounded-4 "
          >
            <div className="citiesCard__image ratio ratio-1:1">
              <img className="col-12 js-lazy" src={item.img} alt="image" />
            </div>
            <div className="citiesCard__content px-30 py-30">
              <h4 className="text-26 fw-600 text-white text-capitalize">
                {item.name}
              </h4>
              <div className="text-15 text-white">
                {item.numberOfProperties} properties
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TopDestinations;
