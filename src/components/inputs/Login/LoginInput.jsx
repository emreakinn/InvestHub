import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext';

function LoginInput() {

    const { email, setEmail, password, setPassword } = useContext(UserContext);

    return (
        <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
            <input
                className='border border-gray-300 rounded-md p-2 w-full mt-4'
                type="email"
                placeholder='Mail Adresi'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className='border border-gray-300 rounded-md p-2 w-full mt-4'
                type="password"
                placeholder='Şifre'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )
}

export default LoginInput