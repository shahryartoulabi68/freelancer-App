import { useState } from "react"
import TextField from "../../ui/TextField"
import { useForm } from "react-hook-form"
import RHFselect from "../../ui/RHFselect"
import { TagsInput } from "react-tag-input-component"
import DatePickerFild from "../../ui/DatePickerFild"
import useCategories from "../../assets/Hooks/useCategories"
import useCreateProject from "./useCreateProject"
import useEditProject from "./useEditProject"
function CreateProjectForm({ onClose, projectToEdit = {} }) {

    const { _id: editId } = projectToEdit;
    const isEditSession = Boolean(editId)
    const { title, description, budget, category, deadline, tags: prevTAGS } = projectToEdit;

    let editValues = {}
    if (isEditSession) {
        editValues = {
            title,
            description,
            budget,
            category: category._id
        }
    }


    // const [title, setTitle] = useState("")
    const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: editValues })
    const [tags, setTags] = useState(prevTAGS || [])
    const [date, setDate] = useState(new Date(deadline || ""))
    const { category: categories } = useCategories()
    const { isCreating, createProject } = useCreateProject()
    const { editProject, isEditing } = useEditProject()

    const onSubmit = (data) => {

        const newProject = {
            ...data,
            deadline: new Date(date).toISOString(),
            tags
        }
        if (isEditSession) {
            editProject({ id: projectToEdit._id, newProject }, {
                onSuccess: () => {
                    onClose();
                   
                }
            })
        }
        else {
            createProject(newProject, {
                onSuccess: () => {
                    onClose();
                    reset();
                }
            })
        }


    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="عنوان پروژه"
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
                label="توضیحات پروژه"
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
                label="بودجه"
                name="budget"
                type="number"
                register={register}
                required
                validationSchema={{
                    required: "بودجه الزامی میباشد",
                    minLength: {
                        value: 1,
                        message: "طول توضیحات نامعتبر است"
                    },
                    maxLength: {
                        value: 100
                    }
                }}
                errors={errors}
            />
            <RHFselect label="دسته بندی" register={register} required name="category" options={categories} />
            <div className="m-4">
                <label className="mb-3">تگ</label>
                <TagsInput value={tags} onChange={setTags} name="tags" />
            </div>
            <DatePickerFild label="ددلاین" date={date} setDate={setDate} />
            <div>
                {isCreating
                    ?
                    <p>در حال ساخت پروژه....</p>
                    :
                    <button type="submit" className="btn btn--primary w-full mt-4">تایید</button>
                }
            </div>
        </form>
    )
}

export default CreateProjectForm
