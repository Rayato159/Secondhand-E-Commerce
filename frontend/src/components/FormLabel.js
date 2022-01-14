import React from 'react'

const FormLabel = ({ label }) => {
    return (
        <label htmlFor="" className="flex items-center">
            <div className="font-bold text-md">{label}</div>
            <div className="text-sm text-red-500 ml-1">*</div>
        </label>
    )
}

export default FormLabel
