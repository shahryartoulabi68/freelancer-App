import toast from "react-hot-toast"
import { changeUserStatusApi } from "../../../services/authService"
import {  useMutation, useQueryClient } from "@tanstack/react-query"
import { removeCategoryApi } from "../../../services/categoryService"

export default function useRemoveCategory() {
    const queryClient = useQueryClient()
    const { isPending, mutate: deleteCategory } = useMutation({
        mutationFn: removeCategoryApi,
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["category"]
            })
        },
        onError: (err) => toast.error(err?.response?.data?.message)

    })
    return { isPending, deleteCategory }

}
