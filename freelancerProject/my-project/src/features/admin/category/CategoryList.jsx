import React from 'react'
import Table from '../../../ui/Table'
import useCategories from '../../../assets/Hooks/useCategories'
import CategoryRow from './CategoryRow';

function CategoryList() {
    const { rowCategories } = useCategories()
    console.log(rowCategories);

    return (
        <Table>
            <Table.Headr>
                <th className='w-auto p-2'>#</th>
                <th className='w-auto p-2'>عنوان</th>
                <th className='w-auto p-2'>توضیحات</th>
                <th className='w-auto p-2'>عنوان انگلیسی</th>
                <th className='w-auto p-2'>تایپ</th>
                <th className='w-auto p-2'>وضعیت</th>
            </Table.Headr>
            <Table.body>
                {rowCategories.map((category, index) => <CategoryRow key={category._id} category={category} index={index} />)
                }
            </Table.body>

        </Table>
    )
}

export default CategoryList
