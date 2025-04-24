import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import RadioInput from '../../ui/RadioInput'
import { useMutation } from '@tanstack/react-query'
import { completeProfile } from '../../services/authService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function CompleteProfailForm() {
    const { register, handleSubmit, watch } = useForm()
    const navigate = useNavigate()
    const { isPending, mutateAsync } = useMutation({
        mutationFn: completeProfile,
    })

    const onSubmit = async (data) => {
        try {
            const { user, message } = await mutateAsync(data)
            toast.success(message)
            if (user.status !== 2) {
                navigate("/")
                toast.error("پروفایل شما در انتظار تایید است")
                return;
            }
            if (user.role === "OWNER") return navigate("/owmer")
            if (user.role === "FREELANCER") return navigate("/freelancer")
            console.log(user, message);
        }
        catch (error) {
            toast.error(error?.response?.message)
        }
    }

    return (
        <div className="flex justify-center pt-10">
            <div className='w-full sm:max-w-sm '>
                <form action="" className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="نام و نام خانوادگی"
                        name="name"
                        register={register}
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="ایمیل خود را وارد کنید"
                        name="email"
                        register={register}
                    />
                    <div className="flex items-center justify-center gap-x-8">
                        <RadioInput
                            type="radio"
                            name="role"
                            value="OWNER" lable="کارفرما"
                            checked={watch("role") === "OWNER"}
                            register={register}
                        // onChange={(e) => setRole(e.target.value)}
                        />
                        <RadioInput
                            type="radio"
                            name="role"
                            value="FREELANCER"
                            lable="فریلنسر"
                            checked={watch("role") === "FREELANCER"}
                            register={register}
                        // onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <button className='btn btn--primary w-full '>تایید</button>
                </form>
            </div>
        </div>
    )
}

export default CompleteProfailForm
