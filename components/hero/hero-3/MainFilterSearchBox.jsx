"use client";
import { useRouter } from "next/navigation";
import DateSearch from "./DateSearch";
import { useSelector } from "react-redux";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  const Router = useRouter();
  const { searchValue } = useSelector((state) => state.search);

  return (
    <>
      <div
        className="mainSearch -w-900 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100 mt-40 is-in-view"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Check in - Check out
              </h4>
              <DateSearch />
            </div>
          </div>
          {/* End check-in-out */}

          {/* End guest */}

          <div className="button-item">
            <button
              className="mainSearch__submit button -dark-1 h-60 px-35 col-11 rounded-100 bg-blue-1 text-white"
              onClick={() => Router.push(`/tours/?location=${searchValue}`)}
            >
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
