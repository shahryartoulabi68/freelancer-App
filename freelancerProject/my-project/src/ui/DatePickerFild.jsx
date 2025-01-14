import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

function DatePickerFild({ label, date, setDate }) {
    return (
        <div>
            <span>{label}</span>
            <DatePicker
                containerClassName='w-full'
                value={date}
                onChange={(date) => setDate(date)}
                format='YYYY/MM/DD'
                calendar={persian}
                locale={persian_fa}
            />

        </div>
    )
}

export default DatePickerFild
