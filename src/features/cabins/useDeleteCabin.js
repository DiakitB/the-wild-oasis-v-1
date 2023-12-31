import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";
export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate:cabinDelete } = useMutation({
    mutationFn: deletCabins,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return{isDeleting, cabinDelete}
}