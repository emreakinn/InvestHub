import React from 'react'
import { Link } from 'react-router-dom';

function LoginBtn() {
    return (
        <Link to='LoginPage'><button className='bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-12 px-24 transition duration-200 text-3xl'>Giriş Yap</button></Link>
    )
}

export default LoginBtn