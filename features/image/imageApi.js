import { GET_IMAGE_BY_MENU_ID, GET_SLIDERSETTINGS } from "@/constant/constants";
import { apiSlice } from "../api/apiSlice";

export const imageApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getImagesByMenuId : builder.query({
            query : (menuId) => ({
                url : `${GET_IMAGE_BY_MENU_ID}/${menuId}`,
                method : 'GET'
            }),
            keepUnusedDataFor : 120
        }),
        getSliderImages : builder.query({
            query : () => ({
                url : GET_SLIDERSETTINGS,
                method : 'GET'
            }),
            keepUnusedDataFor : 120
        })
    })
});

export const {useGetImagesByMenuIdQuery, useGetSliderImagesQuery} = imageApi;