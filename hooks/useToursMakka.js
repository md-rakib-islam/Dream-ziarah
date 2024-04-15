import { BASE_URL } from "@/constant/constants";
import { useGetAllContentQuery } from "@/features/content/contentApi";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import convertCurrency from "@/utils/currency";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const singleTourInfo = {
  "Madinah City Ziarah Vehicle Sharing With Guide": {
    location: "Madinah, Saudi Arabia",
    numberOfReviews: "55",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-50",
    departure:
      "Start your Madinah tour with an easy pickup from Silver Karam Hotel. Be there on time, and our guide will meet you and take you to the tour vehicle. To help us leave on time, please arrive 15 minutes early. This way, we can get going quickly and begin our journey through the city's history.",
    itinerarySrc:
      "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
  },
  "Madinah City Ziarah Luxury Private Vehicle With Guide (3 Person Luxury)": {
    location: "Madinah, Saudi Arabia",
    numberOfReviews: "78",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-3",
    departure:
      "Start your Madinah tour with an easy pickup from Silver Karam Hotel. Be there on time, and our guide will meet you and take you to the tour vehicle. To help us leave on time, please arrive 15 minutes early. This way, we can get going quickly and begin our journey through the city's history.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
  },
  "Madinah City Ziarah Luxury Private Vehicle With Guide (5 Person Family)": {
    location: "Madinah, Saudi Arabia",
    numberOfReviews: "98",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "4-5",
    departure:
      "Start your Madinah tour with an easy pickup from Silver Karam Hotel. Be there on time, and our guide will meet you and take you to the tour vehicle. To help us leave on time, please arrive 15 minutes early. This way, we can get going quickly and begin our journey through the city's history.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
  },
  "Madinah City Ziarah Luxury Private Vehicle With Guide (10 Person Group)": {
    location: "Madinah, Saudi Arabia",
    numberOfReviews: "75",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "6-10",
    departure:
      "Start your Madinah tour with an easy pickup from Silver Karam Hotel. Be there on time, and our guide will meet you and take you to the tour vehicle. To help us leave on time, please arrive 15 minutes early. This way, we can get going quickly and begin our journey through the city's history.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
  },
  "Madinah City Ziarah Luxury Private Vehicle With Guide (15 Person Large Group)":
    {
      location: "Madinah, Saudi Arabia",
      numberOfReviews: "58",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "11-15",
      departure:
        "Start your Madinah tour with an easy pickup from Silver Karam Hotel. Be there on time, and our guide will meet you and take you to the tour vehicle. To help us leave on time, please arrive 15 minutes early. This way, we can get going quickly and begin our journey through the city's history.",

      itinerarySrc:
        "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
    },
  "Madinah City Ziarah Luxury Private Vehicle Without Guide (3 Person Luxury)":
    {
      location: "Madinah, Saudi Arabia",
      numberOfReviews: "63",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "1-50",
      departure: `For your private tour experience, enjoy the convenience of being picked up from any location within a 9 km radius of "Silver Karam Hotel". Our driver will meet you at your chosen spot and time, ensuring a personalized and seamless start to your journey through Madinah. To ensure a timely departure, we recommend being ready to go 15 minutes before your scheduled pickup time. This exclusive service is tailored for comfort, privacy, and a deep dive into the city's spiritual heritage`,

      itinerarySrc:
        "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
    },
  "Madinah City Ziarah Luxury Private Vehicle Without Guide (5 Person Family)":
    {
      location: "Madinah, Saudi Arabia",
      numberOfReviews: "57",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "1-50",
      departure: `For your private tour experience, enjoy the convenience of being picked up from any location within a 9 km radius of "Silver Karam Hotel". Our driver will meet you at your chosen spot and time, ensuring a personalized and seamless start to your journey through Madinah. To ensure a timely departure, we recommend being ready to go 15 minutes before your scheduled pickup time. This exclusive service is tailored for comfort, privacy, and a deep dive into the city's spiritual heritage`,

      itinerarySrc:
        "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
    },
  "Madinah City Ziarah Luxury Private Vehicle Without Guide (10 Person Group)":
    {
      location: "Madinah, Saudi Arabia",
      numberOfReviews: "48",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "1-50",
      departure: `For your private tour experience, enjoy the convenience of being picked up from any location within a 9 km radius of "Silver Karam Hotel". Our driver will meet you at your chosen spot and time, ensuring a personalized and seamless start to your journey through Madinah. To ensure a timely departure, we recommend being ready to go 15 minutes before your scheduled pickup time. This exclusive service is tailored for comfort, privacy, and a deep dive into the city's spiritual heritage`,

      itinerarySrc:
        "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
    },
  "Madinah City Ziarah Luxury Private Vehicle Without Guide (15 Person Large Group)":
    {
      location: "Madinah, Saudi Arabia",
      numberOfReviews: "78",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "1-50",
      departure: `For your private tour experience, enjoy the convenience of being picked up from any location within a 9 km radius of "Silver Karam Hotel". Our driver will meet you at your chosen spot and time, ensuring a personalized and seamless start to your journey through Madinah. To ensure a timely departure, we recommend being ready to go 15 minutes before your scheduled pickup time. This exclusive service is tailored for comfort, privacy, and a deep dive into the city's spiritual heritage`,

      itinerarySrc:
        "https://fortress.maptive.com/ver4/1efe3aa6825a1923f42d78e85817942a/639490",
    },

  "Day Trip From Makkah To Taif Vehicle Sharing With Guide": {
    location: "Taif, Saudi Arabia",
    numberOfReviews: "63",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-50",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/8db40da5064f3fff6e35d8f2879413fd/639498",
  },
  "Day Trip From Makkah To Taif Luxury Private Vehicle (3 Person Luxury)": {
    location: "Taif, Saudi Arabia",
    numberOfReviews: "33",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-3",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/8db40da5064f3fff6e35d8f2879413fd/639498",
  },
  "Day Trip From Makkah To Taif Luxury Private Vehicle (5 Person Family)": {
    location: "Taif, Saudi Arabia",
    numberOfReviews: "40",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "4-5",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/8db40da5064f3fff6e35d8f2879413fd/639498",
  },
  "Day Trip From Makkah To Taif Luxury Private Vehicle (10 Person Group)": {
    location: "Taif, Saudi Arabia",
    numberOfReviews: "64",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "6-10",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/8db40da5064f3fff6e35d8f2879413fd/639498",
  },
  "Day Trip From Makkah To Taif Luxury Private Vehicle (15 Person Large Group)":
    {
      location: "Taif, Saudi Arabia",
      numberOfReviews: "58",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "11-15",
      departure:
        "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

      itinerarySrc:
        "https://fortress.maptive.com/ver4/8db40da5064f3fff6e35d8f2879413fd/639498",
    },
  "Day Trip From Makkah To Taif Vehicle Sharing With Guide": {
    location: "Taif, Saudi Arabia",
    numberOfReviews: "63",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-50",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/8db40da5064f3fff6e35d8f2879413fd/639498",
  },
  "Day Trip From Makkah To Taif Luxury Private Vehicle": {
    location: "Taif, Saudi Arabia",
    numberOfReviews: "53",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-50",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/8db40da5064f3fff6e35d8f2879413fd/639498",
  },
  "Day Trip From Makkah To Jeddah Vehicle Sharing With Guide": {
    location: "Jeddah, Saudi Arabia",
    numberOfReviews: "57",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-50",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/e1603d039ef860eec3629158991cd67b/641125",
  },
  "Day Trip From Makkah To Jeddah Luxury Private Vehicle (3 Person Luxury)": {
    location: "Jeddah, Saudi Arabia",
    numberOfReviews: "60",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-3",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/e1603d039ef860eec3629158991cd67b/641125",
  },
  "Day Trip From Makkah To Jeddah Luxury Private Vehicle (5 Person Family)": {
    location: "Jeddah, Saudi Arabia",
    numberOfReviews: "44",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "4-5",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/e1603d039ef860eec3629158991cd67b/641125",
  },
  "Day Trip From Makkah To Jeddah Luxury Private Vehicle (10 Person Group)": {
    location: "Jeddah, Saudi Arabia",
    numberOfReviews: "44",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "6-10",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/e1603d039ef860eec3629158991cd67b/641125",
  },
  "Day Trip From Makkah To Jeddah Luxury Private Vehicle (15 Person Large Group)":
    {
      location: "Jeddah, Saudi Arabia",
      numberOfReviews: "24",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "11-15",
      departure:
        "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

      itinerarySrc:
        "https://fortress.maptive.com/ver4/e1603d039ef860eec3629158991cd67b/641125",
    },
  "Day Trip From Makkah To Jeddah Luxury Private Vehicle": {
    location: "Jeddah, Saudi Arabia",
    numberOfReviews: "61",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-50",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://www.google.com/maps/d/u/1/embed?mid=1nIIELr6rEaC9U7iIE_8kFC0jItIlC00&ehbc=2E312F&z=10",
  },
  "Makkah City Ziarah Vehicle Sharing With Guide": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "78",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-50",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
  },
  "Makkah City Ziarah Luxury Private Vehicle With Guide (3 Person Luxury)": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "45",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-3",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
  },
  "Makkah City Ziarah Luxury Private Vehicle With Guide (5 Person Family)": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "67",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "4-5",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
  },
  "Makkah City Ziarah Luxury Private Vehicle With Guide (10 Person Group)": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "66",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "6-10",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
  },
  "Makkah City Ziarah Luxury Private Vehicle With Guide (15 Person Large Group)":
    {
      location: "Mecca, Saudi Arabia",
      numberOfReviews: "23",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "11-15",
      departure:
        "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

      itinerarySrc:
        "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
    },
  "Makkah City Ziarah Luxury Private Vehicle Without Guide (3 Person Luxury)": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "56",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "1-3",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
  },
  "Makkah City Ziarah Luxury Private Vehicle Without Guide (5 Person Family)": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "60",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "4-5",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
  },
  "Makkah City Ziarah Luxury Private Vehicle Without Guide (10 Person Group)": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "56",
    languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
    groupSize: "6-10",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
  },
  "Makkah City Ziarah Luxury Private Vehicle Without Guide (15 Person Large Group)":
    {
      location: "Mecca, Saudi Arabia",
      numberOfReviews: "52",
      languages: "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
      groupSize: "11-15",
      departure:
        "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

      itinerarySrc:
        "https://fortress.maptive.com/ver4/340f5e1fb6abcb39936f253495f11edc/639488",
    },

  "Makkah City Ziarah Luxury Private Vehicle Without Guide": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "65",
    languages: "",
    groupSize: "3-15",
    departure:
      "Our service includes convenient traveler pickup within the Makkah City area, within a distance not exceeding 9 kilometers from your hotel. We are pleased to offer pickup services for all tourists and Umrah pilgrims from their respective hotels. We ensure a timely and efficient pickup process to make your journey as smooth as possible. Please be ready for pickup at your hotel within the specified distance limit in the Makkah City area.",

    itinerarySrc:
      "https://www.google.com/maps/d/u/1/embed?mid=1iqwSAEp3RWgC4awxv4Sh8cZUVDlxW-Q&ehbc=2E312F&z=6",
  },
  "Hajj 2024: Embrace the Divine": {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "65",
    languages: "",
    groupSize: "1-42",

    itinerarySrc:
      "https://fortress.maptive.com/ver4/5dd42db317c11e9700d4713ca36e6426/640397",
  },
  Umrah: {
    location: "Mecca, Saudi Arabia",
    numberOfReviews: "57",
    languages: "",
    groupSize: "3-8",
    itinerarySrc:
      "https://fortress.maptive.com/ver4/5dd42db317c11e9700d4713ca36e6426/640397",
  },
};

const useToursMakka = (filterTour) => {
  const [tourItems, setTourItems] = useState([]);
  const { menuItems } = useSelector((state) => state?.menus);
  const { currentCurrency } = useSelector((state) => state?.currency);
  const ziarahId = menuItems
    .find((item) => item.name === "Tours")
    ?.children?.find((child) => child?.name == "Makka Tours")?.id;
  const { isSuccess, data, isLoading } = useGetImagesByMenuIdQuery(ziarahId);
  const {
    isSuccess: isContentSuccess,
    data: contentItems,
    isLoading: isContentLoading,
  } = useGetAllContentQuery(ziarahId);

  useEffect(() => {
    if (isSuccess && isContentSuccess) {
      let tours = contentItems
        .filter((item) => {
          if (
            item.name === "makkah" ||
            item.name === "medina" ||
            item.name === "jedda" ||
            item.name === "jeddah" ||
            item.name === "tabuk" ||
            item.name === "taif" ||
            item.name == filterTour
          )
            return false;
          return true;
        })
        .map((tour) => ({
          id: tour.id,
          // tag:  tour.id === 10 ? "top rated": tour.id === 9 ? "best seller" : "LIKELY TO SELL OUT*",
          tag: "",
          slideImg: [`${data?.content_images[tour?.name]}`],
          title: tour.name,
          location: singleTourInfo[tour?.name]?.location,
          duration: tour?.duration,
          numberOfReviews: singleTourInfo[tour?.name]?.numberOfReviews,
          price: convertCurrency(
            parseInt(tour?.price),
            "USD",
            currentCurrency?.currency
          ),
          tourType: "Full-day Tours",
          delayAnimation: "100",
          position: tour?.position,
        }));
      tours?.sort((a, b) => a.position - b.position);
      setTourItems(tours);
    }
  }, [isSuccess, isContentSuccess, currentCurrency]);

  return tourItems;
};

export default useToursMakka;
