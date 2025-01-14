import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { checkOTP } from '../../services/authService'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { CiEdit } from 'react-icons/ci'
import Loading from '../../ui/Loading'

function CheckOTPform({ phoneNumber, onBack, onReSendOtp, otpResponse }) {


    const [otp, setOtp] = useState("")
    const [time, setTime] = useState(300)

    const navigate = useNavigate()
    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: checkOTP,
    })

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000)
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time, setTime])

    const checkOTPhandle = async (e) => {
        e.preventDefault();
        try {
            const { user, message } = await mutateAsync({ phoneNumber, otp })
            toast.success(message)
            if (!user.isActive) return navigate("/complete-profile")
            if (user.status !== 2) {
                navigate("/")
                toast.error("پروفایل شما در انتظار تایید است")
                return;
            }
            if (user.role === "OWNER") return navigate("/owner")
            if (user.role === "FREELANCER") return navigate("/freelancer")
            if (user.role === "ADMIN") return navigate("/admin")

        }
        catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (<div className='space-y-4'>
        <button onClick={onBack}><HiArrowRight className='w-7 h-6 text-secondary-700' /></button>
        {otpResponse && <p>{otpResponse.message} <button onClick={onBack}>
            <CiEdit className='w-7 h-6 text-primary-900' />
        </button></p>}
        <div>{time > 0 ?
            (<span>{time} ثانیه تا ارسال مجدد کد </span>
            ) : (<button onClick={onReSendOtp}>ارسال مجدد کد</button>)}</div>
        <form action="" className='space-y-10' onSubmit={checkOTPhandle}>
            <p className='font-bold text-secondary-800'>کد تایید را وارد نمایید</p>
            <OTPInput value={otp} onChange={setOtp} numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input type='number'{...props} />}
                containerStyle="flex flex-row-reverse gap-x-2 justify-center "
                inputStyle={{
                    width: "2.5rem",
                    padding: ".5rem .3rem",
                    border: "1px solid rgb(var( --color-primary-300))",
                    borderRadius: ".5rem"

                }}
            />
            <div>{isPending ? <Loading /> : <button type="onsubmit" className='btn btn--primary w-full'>تایید</button>}</div>
        </form>

    </div>
    )
}

export default CheckOTPform
