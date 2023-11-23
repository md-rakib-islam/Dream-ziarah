import { apiSlice } from "@/features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import menuReducer from "../features/menu/menuSlice";
import paginatonReducer from "../features/pagination/paginationSlice";
import siteSettingReducer from "../features/site-setting/siteSettingSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        hero: findPlaceSlice,
        menus : menuReducer,
        siteSettings : siteSettingReducer,
        pagination : paginatonReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
