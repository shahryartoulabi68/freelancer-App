

function Select({value, options, onChange}) {
    console.log(options);

    return (
        <select value={value} onChange={onChange} className="text-secondary-700 rounded-lg p-2 text-sm bg-secondary-0">
            {options.map((item) => <option key={item.value} value={item.value} >{item.label}</option>)}
        </select>
    )
}

export default Select
