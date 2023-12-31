import { useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";

export function useEditSetting() {
    const queryClient = useQueryClient()
    const { mutate: editSetting, isloading: isSetting } = useMutation({
        mutationFn: updateSetting,
        onSuccess: () => {
          toast.success("New setting successefully added");
          queryClient.invalidateQueries({ queryKey: ["settings"] });
        
        },
        onError: (err) => {
          toast.error(err.message);
          // queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
      });
    return{editSetting, isSetting}
}