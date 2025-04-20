import React, { useContext } from 'react'
import RegisterInput from './components/inputs/Register/RegisterInput'
import { Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';


function RegisterPage() {

    const { username, setUsername, email, setEmail, password, setPassword, users, setUsers, setCurrentUser, setIsLoggedIn, err, setErr } = useContext(UserContext);

    const handleRegister = () => {
        if (username && email && password) {
            const emailControl = users.find(user => user.email === email)
            if (!emailControl) {
                const newUser = {
                    id: Date.now(),
                    username,
                    email,
                    password
                }
                setUsers([...users, newUser])
                setCurrentUser(newUser)
                setIsLoggedIn(true)
                setUsername('')
                setEmail('')
                setPassword('')
            } else {
                setErr('Bu mail daha önce kullanılmış')
            }
        } else {
            setErr('Lütfen bütün bilgileri doldurun')
        }
    }

    console.log(users)


    return (
        <div className='flex justify-center items-center h-screen flex-col bg-[#f9f9f9] gap-15'>
            <h1 className='text-6xl font-bold'>KAYIT OL</h1>
            <RegisterInput

            />
            <button onClick={handleRegister} className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'>Kayıt Ol</button>
            <span>Zaten hesabınız var mı? <Link to="/LoginPage">Giriş Yap</Link></span>
            <span className='text-red-500'>{err}</span>
        </div>
    )
}

export default RegisterPage