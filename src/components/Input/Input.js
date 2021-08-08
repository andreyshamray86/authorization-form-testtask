import React from 'react'
import InputStyled from './Input.styles'

const Input = ({type, name, placeholder, value, setValue}) => {
    return (
        <>
            {/* <label htmlFor={name}>Username</label> */}
            <InputStyled
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                minlength="3"
            />
        </>
    )
}

export default Input
