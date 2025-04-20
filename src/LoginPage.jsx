import React, { useContext, useEffect } from 'react'
import LoginInput from './components/inputs/Login/LoginInput'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';


function LoginPage() {

    const navigate = useNavigate();
    const { email, setEmail, password, setPassword, users, setIsLoggedIn, err, setErr, setCurrentUser } = useContext(UserContext);

    useEffect(() => {
        setEmail('')
        setPassword('')
        setErr('')
    }, []);

    const handleLogin = () => {

        if (email && password) {
            const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email)
            if (isValidEmail(email)) {
                const user = users.find(user => user.email === email && user.password === password)
                if (user) {
                    setIsLoggedIn(true)
                    setCurrentUser(user)

                    navigate('/Dashboard');
                } else {
                    setEmail('')
                    setPassword('')
                    setErr('Kullanıcı bulunamadı')
                }
            } else {
                setErr('Geçerli bir mail adresi giriniz')
            }
        } else {
            setErr('Lütfen bütün bilgileri doldurun')
        }
    }


    return (
        <div className='flex justify-center items-center h-screen flex-col bg-[#f9f9f9] gap-15'>
            <h1 className='text-6xl font-bold'>GİRİŞ YAP</h1>
            <LoginInput

            />
            <button onClick={handleLogin} className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'>Giriş Yap</button>
            <span>Hesabınız yok mu? <Link to="/RegisterPage">Kayıt Ol</Link></span>
            <span className='text-red-500'>{err}</span>
        </div>
    )
}

export default LoginPage
