import { baseApi } from "../baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
  
    getDashboardData: builder.query({
      query: () => ({
        url: "/dashboard/overview",
        method: "GET",
      }),
     
      providesTags: ["DASHBOARD"],
    }),

    
   
  }),
});


export const { 
  useGetDashboardDataQuery, 
   
} = dashboardApi;