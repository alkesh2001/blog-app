import React,{forwardRef} from 'react'


const Button = forwardRef(function Button ({
    context="" ,
    className="",
    ...props
} , ref) {
    return (
        <div>
          <button ref={ref} className={`${className}  text-md font-medium `} {...props}>
            {context}
          </button>
        </div>
      )
})

export default Button
