import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";


export function useBooking() {
  const [searchParams] = useSearchParams()
  const filterValue = searchParams.get("status")
  //FILTER
  const filter = !filterValue || filterValue === "all" ? null :
    { field: "status", value: filterValue }
  
  //PAGINATION

  const page = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  
  
  
    const {
        isLoading,
        data: {data:bookings, count} = {},
        error,
      } = useQuery({
        queryKey: ["bookings", filter, page],
        queryFn:()=> getAllBookings({filter, page}),
      });
    
    return{isLoading, bookings,count, error}
}