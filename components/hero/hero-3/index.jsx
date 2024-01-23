// import MainFilterSearchBox from "./MainFilterSearchBox";

'use client'
import Loading from "@/app/loading";
import { BASE_URL } from "@/constant/constants";
import { useGetSliderImagesQuery } from "@/features/image/imageApi";
import Image from "next/image";
// import { Interweave } from "interweave";
const index = () => {
  // const dispatch = useDispatch();
  // const exchangeRates = useCurrencyExchangeRates();
  // dispatch(addExchangeRates(exchangeRates));
  const {isSuccess, isLoading, data} = useGetSliderImagesQuery();
  let sliderImageItems = []
  if(isSuccess){
    sliderImageItems = data?.homepage_sliders?.map((item) => ({
      ...item,
      image : `${BASE_URL}/${item.image}`
    }))
    
  }
  // localStorage.clear();
  return (
    <div className="row justify-center text-center">
    <div className="col-auto">
      <div className="masthead__content">
        <div className="masthead__bg">
          {/* <img src={sliderImageItems[0]?.image} alt="image" /> */}
          {
            isLoading ? (<Loading></Loading>) : (<Image src={sliderImageItems[0]?.image} width={1920} height={660} loading="lazy" alt="Hajj, Umrah and Ziarah"/>)
          }
        </div>
        {/* <h1
        className="text-45 lg:text-40 md:text-30 text-white"
        data-aos="fade-up"
        data-aos-delay="300"
      >
         <Interweave
          allowAttributes
          allowElements
          disableLineBreaks={false}
          content={item.title}
        />
      </h1> */}
        {/* <div
          className="text-white text-30"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {item.subtitle}
        </div> */}
      </div>
    </div>
  </div>
    // <section className="masthead -type-3 z-5">
    //   <div className="">
       
    //     <Image src={sliderImageItems[0]?.image} fill={true}  style={{objectFit: "contain"}} alt="image"/>
    //   </div>
    //   <div className="container">
    //     <div className="row justify-center">
    //       <div className="col-auto">
    //         <div className="text-center">
    //           <h1
    //             className="text-60 lg:text-40 md:text-30 text-white"
    //             data-aos="fade-up"
    //           >
    //             Discover Your World
    //           </h1>
    //           <p
    //             className="text-white mt-6 md:mt-10"
    //             data-aos="fade-up"
    //             data-aos-delay="100"
    //           >
    //             Discover amzaing places at exclusive deals
    //           </p>
    //         </div>
           

    //         <div
    //           className="masthead__tabs"
    //           data-aos="fade-up"
    //           data-aos-delay="200"
    //         >
              
    //         </div>
         
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default index;
