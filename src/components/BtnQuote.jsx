import React from 'react'

const BtnQuote = ({ objStyleBtn, handleClick }) => {
    return (
        <button className='btn' style={objStyleBtn} onClick={handleClick}>&gt;</button>
    )
}

export default BtnQuote