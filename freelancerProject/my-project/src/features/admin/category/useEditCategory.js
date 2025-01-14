import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCategoryApi } from "../../../services/categoryService";

export default function useEditCategory() {
    const queryClient = useQueryClient()

    const { isPending: isEditing, mutate: editCategory } = useMutation({
        mutationFn: editCategoryApi,
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["category"]
            })
        },
        onError: (err) => toast.error(err?.response?.data?.message)

    })
    return { isEditing, editCategory }
}