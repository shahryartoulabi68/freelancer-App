import React from 'react'

function TextField({ label, name, register, type = "text", required, validationSchema, errors }) {
    return (
        <div className='space-y-3'>
            <label htmlFor={name} className='mt-6 block text-secondary-900'>
                {label} {required && <span className='text-error'>*</span>}

            </label>
            <input
                {...register(name, validationSchema)}
                className='textFiled__input bg-secondary-0 text-secondary-800'
                type={type}
                id={name}
                autoComplete='off'
            />
            {errors && errors[name] && (
                <span className='text-error text-sm block mb-2'>{errors[name]?.message}</span>
            )}
        </div>
    )
}

export default TextField
