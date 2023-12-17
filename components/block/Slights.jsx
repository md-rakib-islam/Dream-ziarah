import Image from "next/image";
// import Link from "next/link";
import { slightContent } from "@/data/desinations";

const Slights = ({slug}) => {

  return (
    <>
      {slightContent[slug]?.items?.map((item) => (
        <div
          className="col-lg-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="rounded-4 border-light">
            <div className="d-lg-flex flex-wrap">
              <div className="col-auto d-flex justify-content-center align-items-center ">
                <div className="ratio ratio-1:1 w-200 py-lg-2 my-lg-0 my-2">
                  <Image
                    unoptimized
                    width={200}
                    height={200}
                    src={item.img}
                    alt="image"
                    className="mh-100 img-ratio"
                  />
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column justify-center h-full px-30">
                  <h3 className="text-lg-start text-center text-18 fw-500">{item.title}</h3>
                  <p className="text-15 mt-5">{item.text}</p>
                  {/* <Link
                    href="#"
                    className="d-block text-14 text-blue-1 fw-500 underline mt-5"
                  >
                    See More
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Slights;
