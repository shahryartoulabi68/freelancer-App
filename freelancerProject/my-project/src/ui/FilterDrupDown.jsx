import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Select from '../ui/Select'

function FilterDrupDown({ options, filterField }) {
    // console.log(options);
    
    const [searchParams, setSearchParams] = useSearchParams()
    const value = searchParams.get(filterField) || ""
    
    const handleCheang = (e) => {
        searchParams.set(filterField, e.target.value)
        setSearchParams(searchParams)
    }


    return <Select onChange={handleCheang} value={value} options={options} />
}

export default FilterDrupDown
