"use client";
import Image from "next/image";
import MainFilterSearchBox from "../hero/hero-3/MainFilterSearchBox";
const CoverSkeleton = () => {
  // localStorage.clear();
  return (
    <>
      {/* <div className="row justify-center text-center bannar_mobile overflow-hidden">
        <div className="col-auto">
          <div className="masthead__content position-relative">
            <div className="masthead__bg">
            
              <Image
                className="bannar_height"
                src={sliderImageItems[1]?.image}
                width={1420}
                height={460}
                  loading="eager"

                alt="Hajj, Umrah and Ziarah"
              />
            </div>
            <div className="position-absolute bannar_content">
              {sliderImageItems[1]?.image && (
                <h1
                  className="text-white fw-bold bannar_content_title"
                  data-aos="fade-up"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Ziyarat in <br />
                  Makkah & Madina
                </h1>
              )}
              {sliderImageItems[1]?.image && (
                <p
                  // className="text-white mt-6 md:mt-10"
                  className="bannar_content_subtile text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  }}
                >
                  Immerse in Spiritual Quests
                </p>
              )}
            </div>

            <div
              className="masthead__tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>

           
          </div>
        </div>
      </div>

      <div className="row justify-center text-center bannar_desktop overflow-hidden">
        <div className="col-auto">
          <div className="masthead__content position-relative">
            <div className="masthead__bg">
              {isLoading ? (
                <Loading></Loading>
              ) : (
                <Image
                  className="bannar_height"
                  src={sliderImageItems[0]?.image}
                  width={1420}
                  height={460}
                    loading="eager"

                  alt="Hajj, Umrah and Ziarah"
                />
              )}
            </div>
            <div className="position-absolute bannar_content text-center">
              {sliderImageItems[0]?.image && (
                <h1
                  className="text-white fw-bold bannar_content_title"
                  data-aos="fade-up"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Ziyarat in Makkah & Madina
                </h1>
              )}
              {sliderImageItems[0]?.image && (
                <p
                  // className="text-white mt-6 md:mt-10"
                  className="bannar_content_subtile text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Immerse in Spiritual Quests
                </p>
              )}
            </div>

            <div
              className="masthead__tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>

          
          </div>
        </div>
      </div> */}

      <section className="masthead -type-6">
        <div className="masthead__bg skeleton">
          <Image
            src="https://imagedelivery.net/dIKhvGtesTiRSxhQ2oKWkA/6aafa0cd-5281-4800-ceba-a21d23d57a00/public"
            width={1920}
            height={860}
            alt="image"
          />
        </div>
        <div className="container">
          <div className="row justify-center">
            <div
              className="col-xl-9 d-lg-flex flex-column justify-content-center align-items-center"
              style={{ visibility: "hidden" }}
            >
              <div className="text-center">
                <h1
                  className="text-45 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    visibility: "hidden",
                  }}
                >
                  Ziyarat in Makkah & Madina
                </h1>
                <p
                  className="text-white mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    isibility: "hidden",
                  }}
                >
                  Immerse in Spiritual Quests
                </p>
              </div>
              {/* End hero title */}
              <MainFilterSearchBox />
            </div>
          </div>
        </div>
      </section>
    </>
    // <section className="masthead -type-3 z-5">
    //   <div className="">

    //     <Image src={sliderImageItems[0]?.image} fill={true}  style={{objectFit: "contain"}} alt="image"/>
    //   </div>
    // <div className="container">
    //   <div className="row justify-center">
    //     <div className="col-auto">
    //       <div className="text-center">
    //         <h1
    //           className="text-60 lg:text-40 md:text-30 text-white"
    //           data-aos="fade-up"
    //         >
    //           Discover Your World
    //         </h1>
    //         <p
    //           className="text-white mt-6 md:mt-10"
    //           data-aos="fade-up"
    //           data-aos-delay="100"
    //         >
    //           Discover amzaing places at exclusive deals
    //         </p>
    //       </div>

    //       <div
    //         className="masthead__tabs"
    //         data-aos="fade-up"
    //         data-aos-delay="200"
    //       >

    //       </div>

    //     </div>
    //   </div>
    // </div>
    // </section>
  );
};

export default CoverSkeleton;
