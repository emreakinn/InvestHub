import React from 'react'

function LoginPage() {
    return (
        <div className='flex justify-center items-center h-screen flex-col bg-[#f9f9f9] gap-15'>
            <h1 className='text-6xl font-bold'>GİRİŞ YAP</h1>
            <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
                <input
                    className='border border-gray-300 rounded-md p-2 w-full mt-4'
                    type="email"
                    placeholder='Mail Adresi'
                />
                <input
                    className='border border-gray-300 rounded-md p-2 w-full mt-4'
                    type="password"
                    placeholder='Şifre'
                />
            </div>
            <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'>Giriş Yap</button>
            <span>Hesabınız yok mu? Kayıt Ol</span>
        </div>
    )
}

export default LoginPage