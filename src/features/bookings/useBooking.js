import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";


export function useBooking() {
    
    const {
        isLoading,
        data: bookings,
        error,
      } = useQuery({
        queryKey: ["bookings"],
        queryFn: getAllBookings,
      });
    
    return{isLoading, bookings, error}
}