import React, { useEffect, useState } from 'react'
import SentOTPform from './SentOTPform'
import CheckOTPform from './CheckOTPform'
import { useMutation } from '@tanstack/react-query'
import { getOTP } from '../../services/authService'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import useUser from './useUser'
import useAuthorize from './useAuthorize'
import { replace, useNavigate } from 'react-router-dom'

function Authcontainer() {
    // const [phoneNumber, setPhoneNumber] = useState("")
    const [step, setStep] = useState(1)
    const { register, handleSubmit, getValues } = useForm()
    const navigate = useNavigate()

    const { user } = useUser()
    useEffect(() => {
        if (user) navigate("/", { replace: true })
    }, [user, navigate])

    const { isPending, error, data: otpResponse, mutateAsync } = useMutation({
        mutationFn: getOTP,
    })

    const sentOtpHandle = async (data) => {
        try {
            const { message } = await mutateAsync(data)
            toast.success(message)
            setStep(2)
        }
        catch (error) {            
            toast.error(error?.response?.message)
        }
    }


    function renderStep() {
        switch (step) {
            case 1:
                return <SentOTPform
                    isPending={isPending}
                    onSubmit={handleSubmit(sentOtpHandle)}
                    setStep={setStep}
                    register={register}
                />
            case 2:
                return <CheckOTPform
                    otpResponse={otpResponse}
                    onReSendOtp={sentOtpHandle}
                    phoneNumber={getValues("phoneNumber")}
                    oncBack={(e) => setStep(1)}
                />
        }
    }

    return <div>{renderStep()}</div>
}

export default Authcontainer
