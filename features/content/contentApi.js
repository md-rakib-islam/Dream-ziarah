import { GET_CONTENTS, GET_CONTENTS_WITH_URL_BY_MENU_ID } from "@/constant/constants";
import { apiSlice } from "../api/apiSlice";

export const contentApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getAllContent : builder.query({
            query : (menuId) => ({
                url : `${GET_CONTENTS_WITH_URL_BY_MENU_ID}/${menuId}`,
                method : 'GET'
            })
        }),
        getAllBlogContents : builder.query({
            query : (blogId) => ({
                url : `${GET_CONTENTS}/${blogId}`,
                method : 'GET'
            })
        }),
    })
});

export const {useGetAllContentQuery, useGetAllBlogContentsQuery} = contentApi;