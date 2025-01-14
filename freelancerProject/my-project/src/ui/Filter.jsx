import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get(filterField) || options.at(0).value
    const handleClick = (value) => {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }

    return (
        <div className='flex items-center gap-x-2'>
            <span className='hidden lg:block'>وضعیت</span>

            <div className='flex items-center p-1 gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg'>
                {
                    options.map((item) => {
                        const isActive = item.value === currentFilter;
                        return <button
                            disabled={isActive}
                            onClick={() => handleClick(item.value)}
                            className={`whitespace-nowrap rounded-md px-3 py-1 font-bold transition-all duration-100
                               ${isActive ? "bg-primary-900 text-secondary-0" : "bg-secondary-0 text-secondary-700"}
                               `}
                            key={item.value}>{item.label}</button>
                    })
                }
            </div>

        </div>
    )
}

export default Filter
