import React from 'react'
import Table from '../../ui/Table'
import CategoryList from './category/CategoryList'
import Modal from '../../ui/Modal'
import CreateProjectForm from '../projects/CreateProjectForm'
import { useState } from 'react'
import CreateCategory from './category/CreateCategory'

function Category() {
    const [addCategory, setAddCategory] = useState(false)

    return (
        <div>
            < div className='flex items-center justify-between mb-4' >
                <h2 className='text-lg md:text-xl font-bold text-secondary-900'>دسته بندی ها</h2>
                <button onClick={() => setAddCategory(true)} className='btn btn--primary whitespace-nowrap'>ایجاد دسته بندی جدید</button>
                <Modal open={addCategory} title={`اضافه کردن پروژه`} onClose={() => setAddCategory(false)}>
                    <CreateCategory onClose={() => setAddCategory(false)} />
                </Modal>
            </div >
            <CategoryList />
        </div>
    )
}

export default Category
