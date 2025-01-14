import { useQuery } from '@tanstack/react-query'
import { getProjectApi } from '../../services/projectsService'
import { useParams } from 'react-router-dom';

function useProject() {
    const { id } = useParams()
    const { data, isLoading } = useQuery({
        queryKey: ["project", id],
        queryFn: () => getProjectApi(id),
    })

    const { project } = data || {};
    return { project, isLoading }
}
export default useProject