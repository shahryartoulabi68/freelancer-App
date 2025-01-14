import { TbPencilMinus } from 'react-icons/tb'
import Table from '../../../ui/Table'
import { HiOutlineTrash } from 'react-icons/hi'
import Modal from '../../../ui/Modal'
import { useState } from 'react'
import ConfirmDelete from '../../../ui/ConfirmDelete'
import useRemoveCategory from './useRemoveCategory'
import CreateCategory from './CreateCategory'

function CategoryRow({ category, index, }) {
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const { isPending, deleteCategory } = useRemoveCategory()

    return (
        <Table.Row key={category._id} className='bg-secondary-0 border-b rounded-xl'>
            <td className='w-auto text-center p-2'>{index + 1}</td>
            <td className='w-auto text-center p-2'>{category.title}</td>
            <td className='w-auto text-center p-2'>{category.description}</td>
            <td className='w-auto text-center p-2'>{category.englishTitle}</td>
            <td className='w-auto text-center p-2'>{category.type}</td>
            <td className='w-auto text-center p-2 text-secondary-600 flex items-center justify-center'>
                <div className='flex items-center gap-4 '>
                    <>
                        <button onClick={() => setEditOpen(true)}>
                            <TbPencilMinus className='w-5 h-5 text-primary-900' />
                        </button>
                        <Modal open={editOpen} title={`ویرایش ${category.title}`} onClose={() => setEditOpen(false)}>
                            <CreateCategory onClose={() => setEditOpen(false)} Category={category} />
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setDeleteOpen(true)} >
                            <HiOutlineTrash className='w-5 h-5 text-error' />
                        </button>
                        <Modal open={deleteOpen} title={`حذف ${category.title}`} onClose={() => setDeleteOpen(false)}>
                            <ConfirmDelete projectName={category.title}
                                onConfirm={() => deleteCategory(category._id, {
                                    onSuccess: (data) => setDeleteOpen(false)
                                })}
                                disabled={false}
                                onClose={() => setDeleteOpen(false)} />
                        </Modal>
                    </>
                </div>
            </td>
        </Table.Row>
    )
}

export default CategoryRow
