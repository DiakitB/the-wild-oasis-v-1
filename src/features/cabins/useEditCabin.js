import { useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export function useEditCabin() {
    const queryClient = useQueryClient()
    const { mutate: editCabin, isloading: isEditing } = useMutation({
        mutationFn: ({newCabinData, id}) =>createEditCabin(newCabinData, id),
        onSuccess: () => {
          toast.success("New cabin edited successfully created");
          queryClient.invalidateQueries({ queryKey: ["cabins"] });
        
        },
        onError: (err) => {
          toast.error(err.message);
          // queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
      });
    return{editCabin, isEditing}
}