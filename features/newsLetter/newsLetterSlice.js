
import { CREATE_NEWS_LETTER } from "@/constant/constants";
import { apiSlice } from "../api/apiSlice";

export const newsLetterApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        createNewsLetter : builder.mutation({
            query : (data) => ({
                url : CREATE_NEWS_LETTER,
                method : 'POST',
                body : data
            })
        })
    })
});

export const {useCreateNewsLetterMutation} = newsLetterApi;