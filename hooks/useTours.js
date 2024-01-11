import { BASE_URL } from "@/constant/constants";
import { useGetAllContentQuery } from "@/features/content/contentApi";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import convertCurrency from "@/utils/currency";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export const singleTourInfo = {
    "Day Trip from Makkah to Taif" : {
        location : "Taif, Saudi Arabia",
        numberOfReviews : "63",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1XdwewvF4NOyYwvTRAKEt2s3elk0Jc6U&ehbc=2E312F&z=9"
    },
    "Day Trip from Makkah to Taif Luxury Private Vehicle" : {
        location : "Taif, Saudi Arabia",
        numberOfReviews : "53",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1rQuDRVLt4RMV0ojn7AtB5vhr9CgCt2Y&ehbc=2E312F&z=10"
    },
    "Day Trip from Makkah to Jeddah": {
        location : "Jeddah, Saudi Arabia",
        numberOfReviews : "57",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1ucOabmqQaTyhe91RypSigvaZl_5UG-E&ehbc=2E312F&z=10"
    },
    "Day Trip from Makkah to Jeddah Luxury Private Vehicle": {
        location : "Jeddah, Saudi Arabia",
        numberOfReviews : "61",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1nIIELr6rEaC9U7iIE_8kFC0jItIlC00&ehbc=2E312F&z=10"
    },
    "Makkah City Ziarah Vehicle Sharing With Guide" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "55",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "1-50",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1oq8duyGvFqjaYzmTdOgZ6m6RHZKH6-4&ehbc=2E312F&z=6"
    },
    "Makkah City Ziarah Luxury Private Vehicle With Guide" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "67",
        languages : "Bengali, English, Hindi, Urdu, Malay, Indonesian.",
        groupSize : "3-15",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=12hqGh2hTCmUqQIo60aGhSTOz3wqtpSQ&ehbc=2E312F&z=6"
    },
    "Makkah City Ziarah Luxury Private Vehicle Without Guide" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "65",
        languages : "",
        groupSize : "3-15",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1iqwSAEp3RWgC4awxv4Sh8cZUVDlxW-Q&ehbc=2E312F&z=6"
    },
    "Hajj 2024: Embrace the Divine" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "65",
        languages : "",
        groupSize : "1-42",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1zyUakEQI3Oi8hrnipIJ1Hhkl1NtzG4c&ehbc=2E312F&z=12"
    },
    "Umrah" : {
        location : "Mecca, Saudi Arabia",
        numberOfReviews : "57",
        languages : "",
        groupSize : "3-8",
        itinerarySrc : "https://www.google.com/maps/d/u/1/embed?mid=1CM8PjQjW7zWc_PpHMpNHHHRYlZU1-cw&ehbc=2E312F&z=7"
    }
}



const useTours = () => {
    const [tourItems, setTourItems] = useState([]);
    const {menuItems} = useSelector(state => state?.menus);
    const {currentCurrency, exchangeRates} = useSelector(state => state?.currency);
    const ziarahId = menuItems.find((item) => item.name === "Ziarah")?.id;
    const {isSuccess, data, isLoading} = useGetImagesByMenuIdQuery(ziarahId);
    const {isSuccess: isContentSuccess, data : contentItems, isLoading: isContentLoading} = useGetAllContentQuery(ziarahId);
  
    useEffect(() => {
        if(isSuccess && isContentSuccess){

        let tours = contentItems.filter((item) => {
        if(item.name === "makkah" || item.name ==="medina" || item.name ==="jedda" || item.name === "tabuk" || item.name === "taif") return false;
        return true;
        }).map((tour) => ({
        id: tour.id,
        // tag:  tour.id === 10 ? "top rated": tour.id === 9 ? "best seller" : "LIKELY TO SELL OUT*",
        tag : "",
        slideImg: [`${BASE_URL}/media/${data.content_images[tour.name]}`],
        title: tour.name,
        location: singleTourInfo[tour?.name]?.location,
        duration: tour?.duration,
        numberOfReviews: singleTourInfo[tour?.name]?.numberOfReviews,
        price: convertCurrency(parseInt(tour?.price), "USD", currentCurrency?.currency, exchangeRates),
        tourType: "Full-day Tours",
        delayAnimation: "100",
        }));

        setTourItems(tours);
        
    }

    }, [isSuccess, isContentSuccess, currentCurrency]);

    return tourItems;
};

export default useTours;