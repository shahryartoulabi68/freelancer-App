import { useQuery } from '@tanstack/react-query';
import getCategoryApi from '../../services/categoryService';

function useCategories() {

    const { data, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: getCategoryApi
    })

    const { categories: rowCategories = [] } = data || {}

    const category = rowCategories.map((item) => ({
        label: item.title,
        value: item._id
    }))

    const transformedCategories = rowCategories.map((item) => ({
        label: item.title,
        value: item.englishTitle,
    }))

    return { isLoading, category, transformedCategories, rowCategories, data }

}

export default useCategories
