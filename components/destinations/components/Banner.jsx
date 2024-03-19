"use client";
import Loading from "@/app/loading";
import { BASE_URL } from "@/constant/constants";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Banner = ({ slug }) => {
  const { menuItems } = useSelector((state) => state.menus);
  const destinationId = menuItems
    ?.find((item) => item.name === "Destinations")
    ?.children?.find((item) => item.name.toLowerCase() === slug)?.id;

  const { isSuccess, data, isLoading } =
    useGetImagesByMenuIdQuery(destinationId);
  let bannerUrl = "";
  if (isSuccess) {
    bannerUrl = `${
      data?.content_images[slug.charAt(0).toUpperCase() + slug.slice(1)]
    }`;
  }
  console.log("skdfjsdfwer", slug);
  useEffect(() => {
    localStorage.clear();
  }, []);

  return isLoading ? (
    <div className="col-12 h-50 text-center">
      <Loading />
    </div>
  ) : (
    <div className="col-12">
      <div className="relative d-flex">
        <Image
          src={bannerUrl}
          alt={slug}
          className="col-12 rounded-4 destination_banner_img"
          // loading="lazy"
          height={860}
          width={1920}
          style={{ maxHeight: "448px" }}
        />
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1
            className="text-50 fw-600 text-white lg:text-40 md:text-30"
            style={{
              fontFamily: "Khumairoh, sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Explore{" "}
            {slug == "medina"
              ? "Madina"
              : slug == "jedda"
              ? "Jeddah"
              : slug.charAt(0).toUpperCase() + slug.slice(1)}
          </h1>
          <div
            className="text-white"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontFamily: "Khumairoh, sans-serif",
            }}
          >
            Explore deals, travel guides and things to do in{" "}
            {slug == "medina"
              ? "Madina"
              : slug == "jedda"
              ? "Jeddah"
              : slug.charAt(0).toUpperCase() + slug.slice(1)}
          </div>
        </div>
        {/* <div className="absolute d-flex justify-end items-end col-12 h-full z-1 px-10 py-10">
      <button className="button -md -blue-1 bg-white text-dark-1 text-14 fw-600">
        See All Photos
      </button>
    </div> */}
      </div>
    </div>
  );
};

export default Banner;
