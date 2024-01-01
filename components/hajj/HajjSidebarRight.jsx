"use client";


// import { useGetContentsByMenuContentIdQuery } from '@/features/content/contentApi';
// import { useParams } from 'next/navigation';
import Script from 'next/script';

const HajjSidebarRight = () => {
//   const {data, isSuccess} = useGetContentsByMenuContentIdQuery(params.slug);
  
  return (

    <div  className="d-flex justify-end js-pin-content">
      <div  className="w-360 lg:w-full d-flex flex-column items-center">
        <div  className="bokunWidget" data-src="https://widgets.bokun.io/online-sales/d894d0d4-5eab-4e15-821d-6770f0186810/experience-calendar/828452"></div>
      </div>
      <Script type="text/javascript" src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d894d0d4-5eab-4e15-821d-6770f0186810" async={true}/>
    </div>
   
  );
};

export default HajjSidebarRight;
