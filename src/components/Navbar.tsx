import React from 'react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

function Navbar() {

    const iconStyle = {
        width: '36px', 
        height: '36px', 
    }; 

    return (
        <nav className='bg-[#DECFC8] h-[6vh] p-2 flex justify-between'>
            <p className='text-3xl font-semibold'>
                Seshat
            </p>
            <div className='flex gap-2'>
                <FaLinkedin style={iconStyle}  />
                <FaGithubSquare style={iconStyle} />
            </div>
        </nav>
    )
}

export default Navbar