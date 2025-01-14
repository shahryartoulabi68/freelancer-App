import { useQuery } from '@tanstack/react-query'
import { getProjectsApi } from '../../services/projectsService';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function useProjects() {
    const { search } = useLocation()
    const queryAbject = queryString.parse(search)

    const { data, isLoading } = useQuery({
        queryKey: ["projects", queryAbject],
        queryFn: () => getProjectsApi(search),
    })

    const { projects } = data || {};
    return { projects, isLoading }
}
export default useProjects