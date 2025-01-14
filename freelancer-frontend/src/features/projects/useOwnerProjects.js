import { useQuery } from '@tanstack/react-query'
import { getOwnerProjectsApi } from '../../services/projectsService'

function useOwnerProjects() {

    const { data, isLoading } = useQuery({
        queryKey: ["owner-projects"],
        queryFn: getOwnerProjectsApi,
    })

    const { projects } = data || {};
    return { projects, isLoading }
}
export default useOwnerProjects