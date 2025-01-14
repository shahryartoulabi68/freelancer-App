import React from 'react'
import RHFselect from '../../../ui/RHFselect'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useChangeUserStatus from './useChangeUserStatus'
import { useQueryClient } from '@tanstack/react-query'


const options = [
    {
        label: "رد شده",
        value: 0
    },
    {
        label: "در انتظار تایید",
        value: 1
    },
    {
        label: "تایید شده",
        value: 2
    },
]

function ChangeUserStatus({ onClose, userId }) {

    const { register, handleSubmit } = useForm()
    const { changeUserStatus, isUpdating } = useChangeUserStatus()
    const queryClient = useQueryClient()

    const onSubmit = (data) => {
        console.log(data);
        changeUserStatus({ userId, data }, {
            onSuccess: () => {
                onClose()
                queryClient.invalidateQueries({ queryKey: ["users"] })
            }
        })
    }
    return (
        (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <RHFselect
                        label="تغییر وضعیت"
                        name="status"
                        options={options}
                        register={register}
                        required
                    />
                    <div>
                        <button className='btn btn--primary w-full my-4' type='submit'>تایید</button>
                    </div>
                </form>
            </div>
        )
    )
}

export default ChangeUserStatus
