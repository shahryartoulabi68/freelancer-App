import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../services/projectsService";
import { getProposalsApi } from "../../services/proposalService";

export default function useProposals() {
    const { data, isLoading } = useQuery({
        queryKey: ["proposals"],
        queryFn: getProposalsApi
    })
    const { proposals } = data || {}
    return { proposals, isLoading }
}