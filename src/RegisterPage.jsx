import React, { useContext, useEffect } from 'react'
import RegisterInput from './components/inputs/Register/RegisterInput'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';


function RegisterPage() {

    const navigate = useNavigate();
    const { username, setUsername, email, setEmail, password, setPassword, users, setUsers, setCurrentUser, currentUser, setIsLoggedIn, err, setErr } = useContext(UserContext);

    useEffect(() => {
        setErr('')
        setUsername('')
        setEmail('')
        setPassword('')
    }, []);

    const handleRegister = () => {
        setErr('')
        if (username && email && password) {
            const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
            if (isValidEmail(email)) {
                const emailControl = users?.find(user => user.email === email)
                if (!emailControl) {
                    const newUser = {
                        id: Date.now(),
                        username,
                        email,
                        password,
                        balance: 1000000,
                        investments: []
                    }
                    setUsers([...users, newUser])
                    setCurrentUser(newUser)
                    setIsLoggedIn(true)

                    navigate('/Dashboard');
                } else {
                    setErr('Bu mail daha önce kullanılmış')
                }
            } else {
                setErr('Geçerli bir mail adresi giriniz')
            }
        } else {
            setErr('Lütfen bütün bilgileri doldurun')
        }
    }

    return (
        <div className='flex justify-center items-center h-screen flex-col bg-[#f9f9f9] gap-5'>
            <h1 className='text-6xl font-bold'>KAYIT OL</h1>
            <RegisterInput

            />
            <button onClick={handleRegister} className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'>Kayıt Ol</button>
            <span>Zaten hesabınız var mı? <Link to="/LoginPage" className='text-blue-700 font-bold'>Giriş Yap</Link></span>
            <span className='text-red-500'>{err}</span>
        </div>
    )
}

export default RegisterPage
