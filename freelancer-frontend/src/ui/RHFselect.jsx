import React from 'react'

function RHFselect({ label, name, register, options, required }) {
    // console.log(options);
    
    return (
        <div>
            <label htmlFor={name} className='mt-4 mb-2 text-secondary-700 block'>
                {label} {required && <span className='text-error'>*</span>}

            </label>
            <select {...register(name)} id={name} className='textFiled__input text-secondary-700'>
                {options.map((option) => {                    
                    return <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                })}
            </select>
        </div>
    )
}

export default RHFselect
