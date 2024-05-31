import React from 'react'
import { forwardRef } from 'react'

const Input = forwardRef( function Input({
    type = "text",
    className="",
    ...props
}, ref){
    return ( 
        <div>
            <input ref={ref} type={type} {...props} className={`${className} w-full rounded-md outline-none px-3 py-2`} />
        </div>
    )
})

export default Input
