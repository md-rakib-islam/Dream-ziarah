
import { apiSlice } from "../api/apiSlice";

export const newsLetterApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        createNewsLetter : builder.mutation({
            query : (data) => ({
                url : "/api",
                method : 'POST',
                body : data
            })
        })
    })
});

export const {useCreateNewsLetterMutation} = newsLetterApi;