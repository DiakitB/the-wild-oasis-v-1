import { useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";


export function useCreateCabin() {
    const queryClient = useQueryClient()
    const { mutate: createNewCabin, isloading: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
          toast.success("New cabin successfully created");
          queryClient.invalidateQueries({ queryKey: ["cabins"] });
        
        },
        onError: (err) => {
          toast.error(err.message);
          // queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
    });
    return{createNewCabin, isCreating}
    
}
