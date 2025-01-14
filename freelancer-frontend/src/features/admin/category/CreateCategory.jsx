import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../../ui/TextField'
import convertToUppercase from '../../../utils/convertToUppercase'
import useCreateCategory from './useCreateCategory'
import Category from '../Category'
import useEditCategory from './useEditCategory'

function CreateCategory({ onClose, Category = {} }) {
    const { _id: editId } = Category;


    const isEditSession = Boolean(editId)
    const { title, description, englishTitle, type } = Category

    let editValues = {}
    if (isEditSession) {
        editValues = {
            title,
            description,
            englishTitle,
            type,
        }
    }



    const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: editValues })
    const { isCreating, createCategory } = useCreateCategory()
    const { isEditing, editCategory } = useEditCategory()
    const onSubmit = (data) => {
        const newCategory = {
            ...data,
            type: "project",
            englishTitle: convertToUppercase(data.englishTitle)
        }

        if (isEditSession) {
            console.log(newCategory);

            editCategory({ id: Category._id, newCategory }, {
                onSuccess: () => {
                    onClose()
                }
            })
        }
        else {
            createCategory(newCategory, {
                onSuccess: () => {
                    onClose()
                }
            })
        }


    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="عنوان"
                name="title"
                register={register}
                required
                validationSchema={{
                    required: "عنوان الزامی میباشد",
                    minLength: {
                        value: 5,
                        message: "طول عنوان نامعتبر است"
                    },
                    maxLength: {
                        value: 30
                    }
                }}
                errors={errors}
            />
            <TextField
                label="توضیحات"
                name="description"
                register={register}
                required
                validationSchema={{
                    required: "توضیحات الزامی میباشد",
                    minLength: {
                        value: 5,
                        message: "طول توضیحات نامعتبر است"
                    },
                    maxLength: {
                        value: 50
                    }
                }}
                errors={errors}
            />
            <TextField
                label="عنوان انگلیسی"
                name="englishTitle"
                register={register}
                required
                validationSchema={{
                    required: "عنوان انگلیسی الزامی میباشد",
                    minLength: {
                        value: 5,
                        message: "طول عنوان انگلیسی نامعتبر است"
                    },
                    maxLength: {
                        value: 50
                    }
                }}
                errors={errors}
            />

            <div>
                {isCreating || isEditing
                    ?
                    <p>در حال ساخت پروژه....</p>
                    :
                    <button type="submit" className="btn btn--primary w-full mt-4">تایید</button>
                }
            </div>

        </form>
    )
}

export default CreateCategory
