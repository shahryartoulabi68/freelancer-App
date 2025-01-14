import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from "../../ui/TextField"
import useCreateProposal from './useCreatProposal'
function CreateProposal({ onClose, projectId }) {
    const { handleSubmit, register, formState = { errors } } = useForm()
    const { createProposal, isSending } = useCreateProposal()

    const onSubmit = (data) => {
        const newProposal = {
            ...data,
            projectId: projectId
        }
        createProposal(newProposal,{onSuccess:()=>onClose()});

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                            value: 30
                        }
                    }}
                // errors={errors}
                />
                <TextField
                    label="قیمت"
                    name="price"
                    type='number'
                    register={register}
                    required
                    validationSchema={{
                        required: "قیمت الزامی میباشد",

                    }}
                // errors={errors}
                />
                <TextField
                    label="مدت زمان"
                    name="duration"
                    type='number'
                    register={register}
                    required
                    validationSchema={{
                        required: "مدت زمان الزامی میباشد",
                    }}
                // errors={errors}
                />
                {isSending
                    ?
                    <p>در حال ارسال ...</p>
                    :
                    <button type="submit" className="btn btn--primary w-full mt-4">ارسال درخواست</button>
                }

            </form>
        </div>
    )
}

export default CreateProposal
