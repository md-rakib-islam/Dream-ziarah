"use client";
import { useGetContentsByMenuContentIdQuery } from '@/features/content/contentApi';
import convertCurrency from '@/utils/currency';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import { useState } from 'react';
import { useSelector } from "react-redux";
import FilterBox from "../../components/tour-single/filter-box";

const bokunUrls = {
  "Makkah City Ziarah Luxury Private Vehicle With Guide" : {
    "3" : "https://widgets.bokun.io/online-sales/aa4c5059-8d0b-43dc-8bd3-bac143537416/experience-calendar/820419",
    "4" : "https://widgets.bokun.io/online-sales/aa4c5059-8d0b-43dc-8bd3-bac143537416/experience-calendar/834199",
    "6" : "https://widgets.bokun.io/online-sales/aa4c5059-8d0b-43dc-8bd3-bac143537416/experience-calendar/834200",
    "11" : "https://widgets.bokun.io/online-sales/aa4c5059-8d0b-43dc-8bd3-bac143537416/experience-calendar/834203",
  }
}

const SidebarRight = () => {
  const [isShowBokun, setIsShowBokun] = useState(true);
  const [bokunUrl, setBokunUrl] = useState("");
  const {tourItem} = useSelector(state => state.tour);
  const { guests } = useSelector(state => state.bokun)
  const {currentCurrency} = useSelector(state => state?.currency);
  const params = useParams()
  const {data, isSuccess} = useGetContentsByMenuContentIdQuery(params.slug);
  // useEffect(() => {
  //   if(guests.Adults === 3){
  //     console.log(tourItem?.name)
  //     console.log("fdf", bokunUrls[tourItem?.name])
  //   }else if(guests.Adults === 4 || guests.Adults === 5){
  //     setBokunUrl("https://widgets.bokun.io/online-sales/aa4c5059-8d0b-43dc-8bd3-bac143537416/experience-calendar/820419")
  //   }
  // }, [guests]);

  return  !isShowBokun ? (
   
    <div className="d-flex justify-end js-pin-content">
      <div  className="w-360 lg:w-full d-flex flex-column items-center">
      {
        isSuccess && (<div className="bokunWidget" data-src={data?.url}></div>)
      }
        
      </div>
      <Script type="text/javascript" src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=aa4c5059-8d0b-43dc-8bd3-bac143537416" async={true}/>
    </div>
   
     
  ) : (<div className="d-flex justify-end js-pin-content">
  <div className="w-360 lg:w-full d-flex flex-column items-center">
    <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
      <div className="text-14 text-light-1">
        From {currentCurrency?.symbol}
        <span className="text-20 fw-500 text-dark-1 ml-5">
          {convertCurrency(parseInt(tourItem?.price), "USD", currentCurrency?.currency)}
        </span>
      </div>
      {/* End div */}

      <div className="row y-gap-20 pt-30">
        <FilterBox setIsShowBokun={setIsShowBokun}/>
      </div>
      {/* End div */}

      {/* <div className="d-flex items-center pt-20">
        <div className="size-40 flex-center bg-light-2 rounded-full">
          <i className="icon-heart text-16 text-green-2" />
        </div>
        <div className="text-14 lh-16 ml-10">
          94% of travelers recommend this experience
        </div>
      </div> */}
    </div>
    {/* End px-30 */}

    {/* <div className="px-30">
      <div className="text-14 text-light-1 mt-30">
        Not sure? You can cancel this reservation up to 24 hours in advance
        for a full refund.
      </div>
    </div> */}
    {/* End div */}
  </div>
</div>);
};

export default SidebarRight;
