import { GET_CONTENTS, GET_CONTENTS_BY_MENU_CONTENT_ID, GET_CONTENTS_WITH_URL_BY_MENU_ID, GET_ITENARIES_BY_CONTENT_ID } from "@/constant/constants";
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
        getContentsByMenuContentId : builder.query({
            query : (menuContentId) => ({
                url : `${GET_CONTENTS_BY_MENU_CONTENT_ID}/${menuContentId}`,
                method : 'GET'
            })
        }),
        getItenariesByMenuContentId : builder.query({
            query : (menuContentId) => ({
                url : `${GET_ITENARIES_BY_CONTENT_ID}/${menuContentId}`,
                method : 'GET'
            })
        }),
    })
});

export const {useGetAllContentQuery, useGetAllBlogContentsQuery, useGetContentsByMenuContentIdQuery, useGetItenariesByMenuContentIdQuery} = contentApi;