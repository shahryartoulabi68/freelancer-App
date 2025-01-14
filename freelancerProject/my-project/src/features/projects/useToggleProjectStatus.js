import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectsService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
    const queryClient = useQueryClient()

    const { isPending: isUpdateing, mutate: toggleProjectStatus } = useMutation({
        mutationFn: toggleProjectStatusApi,
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["owner-projects"]
            })
        },
        onError: (err) => toast.error(err?.response?.data?.message)

    })
    return { isUpdateing, toggleProjectStatus }
}