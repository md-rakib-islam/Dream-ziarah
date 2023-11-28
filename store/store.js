import { apiSlice } from "@/features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import currencyReducer from "../features/currency/currencySlice";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import menuReducer from "../features/menu/menuSlice";
import paginatonReducer from "../features/pagination/paginationSlice";
import siteSettingReducer from "../features/site-setting/siteSettingSlice";
import tourReducer from "../features/tour/tourSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        hero: findPlaceSlice,
        menus : menuReducer,
        tour : tourReducer,
        blog : blogReducer,
        currency : currencyReducer,
        siteSettings : siteSettingReducer,
        pagination : paginatonReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
