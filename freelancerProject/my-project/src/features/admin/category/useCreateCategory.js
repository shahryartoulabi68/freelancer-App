import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategoryApi } from "../../../services/categoryService";

export default function useCreateCategory() {
    const queryClient = useQueryClient()

    const { isPending: isCreating, mutate: createCategory } = useMutation({
        mutationFn: createCategoryApi,
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["category"]
            })
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    

    })
return { isCreating, createCategory }
}