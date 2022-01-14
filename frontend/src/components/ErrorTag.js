import React from 'react'

const ErrorTag = ({ message }) => {
    return (
        <div className="text-sm text-red-500">{message}</div>
    )
}

export default ErrorTag
