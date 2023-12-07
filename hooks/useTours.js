import { BASE_URL } from "@/constant/constants";
import { useGetAllContentQuery } from "@/features/content/contentApi";
import { useGetImagesByMenuIdQuery } from "@/features/image/imageApi";
import convertCurrency from "@/utils/currency";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useTours = () => {
    const [tourItems, setTourItems] = useState([]);
    const {menuItems} = useSelector(state => state.menus);
    const {currentCurrency, exchangeRates} = useSelector(state => state.currency);
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
        location: "Mecca, Saudi Arabia",
        duration: tour?.duration,
        numberOfReviews: tour.id === 10 ? "57": tour.id === 9 ? "51" : "61",
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