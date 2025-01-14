import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendNewProposalsApi } from "../../services/proposalService";

export default function useCreateProposal() {
    const queryClient = useQueryClient()

    const { isPending: isSending, mutate: createProposal } = useMutation({
        mutationFn: sendNewProposalsApi,
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey: ["proposals"]
            })
        },
        onError: (err) => {
            toast.error("")
        }
    })
    return { isSending, createProposal }
}