import React from 'react'
import { Link } from 'react-router-dom';

function RegisterBtn() {
    return (
        <Link to='RegisterPage'><button className='bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-12 px-24 transition duration-200 text-3xl'>Kayıt Ol</button></Link>
    )
}

export default RegisterBtn