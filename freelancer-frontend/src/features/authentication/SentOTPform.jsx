import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import { useMutation } from '@tanstack/react-query'
import { getOTP } from '../../services/authService'
import toast from 'react-hot-toast'
import Loading from '../../ui/Loading'
import { useForm } from 'react-hook-form'

function SentOTPform({ isPending, register, onSubmit }) {


    return (
        <div className='space-y-4'>
            <form className='space-y-8' action="" onSubmit={onSubmit}>
                <TextField
                    label="شماره مبایل"
                    name="phoneNumber"
                    register={register}

                />
                <div>{isPending ? <Loading /> :
                    <button type="onsubmit" className='btn btn--primary w-full'>ارسال کد تایید</button>}</div>
            </form>
        </div>
    )
}

export default SentOTPform
