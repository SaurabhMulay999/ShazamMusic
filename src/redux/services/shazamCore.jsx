import React from 'react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            //it will prepare header before each and every call to an api
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
           // headers.set('X-RapidAPI-Host','shazam-core7.p.rapidapi.com');
            return headers;
        } 
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'charts/world' }),
        getSongDetail: builder.query({ query: ({ songid })=>`/tracks/details?track_id=${songid}`})
    })

    
})

export const { useGetTopChartsQuery,useGetSongDetailQuery } = shazamCoreApi;
