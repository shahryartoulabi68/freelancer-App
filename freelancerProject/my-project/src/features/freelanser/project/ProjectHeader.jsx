import useCategories from '../../../assets/Hooks/useCategories'
import FilterDrupDown from '../../../ui/FilterDrupDown'
import Filter from '../../../ui/Filter'



const statusOptions = [
    {
        label: "همه",
        value: "ALL"
    },
    {
        label: "باز",
        value: "OPEN"
    },
    {
        label: "بسته",
        value: "CLOSED"
    },
]

function ProjectHeader() {
    const { transformedCategories ,category } = useCategories()

    return (
        <div className=' flex flex-col  items-center justify-between mb-8 text-secondary-700'>
            <h1 className='w-full font-bold text-lg mb-4'>لیست پروژه ها</h1>

            <div className='w-full flex flex-col md:flex-row items-start justify-start md:gap-x-8 gap-y-3'>
                <Filter filterField="status" options={statusOptions} />
                <FilterDrupDown filterField="category" options={[
                    {
                        value: "ALL",
                        label: "دسته بندی (همه)"
                    },
                    ...transformedCategories
                ]}
                />
                <FilterDrupDown filterField="sort" options={[
                    {
                        value: "latest",
                        label: "مرتپ سازی(جدیدترین)"
                    },
                    {
                        value: "earliest",
                        label: "مرتب سازی(قدیمی ترین)"
                    },
                ]}
                />

            </div>

        </div>
    )
}

export default ProjectHeader
