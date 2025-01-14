import React from 'react'

function RadioInput({ type, register, value, name, lable, checked }) {
    return (
        <div className='flex items-center justify-center gap-x-2 text-secondary-700'>
            <input
                className='cursor-pointer w-4 h-5 accent-blue-600'
                type="radio"
                name={name}
                id={value}
                value={value}
                checked={checked}
                {...register(name)}
            />
            <label htmlFor={value}>{lable}</label>
        </div>
    )
}

export default RadioInput
