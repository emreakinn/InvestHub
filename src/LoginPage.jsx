import React from 'react'
import LoginInput from './components/inputs/Login/LoginInput'
import { Link } from 'react-router-dom';


function LoginPage() {




    return (
        <div className='flex justify-center items-center h-screen flex-col bg-[#f9f9f9] gap-15'>
            <h1 className='text-6xl font-bold'>GİRİŞ YAP</h1>
            <LoginInput

            />
            <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'>Giriş Yap</button>
            <span>Hesabınız yok mu? <Link to="/RegisterPage">Kayıt Ol</Link></span>
            <span></span>
        </div>
    )
}

export default LoginPage