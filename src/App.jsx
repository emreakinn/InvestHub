import { useState } from 'react'
import './App.css'
import LoginBtn from './components/buttons/LoginBtn'
import RegisterBtn from './components/buttons/RegisterBtn'

function App() {


  return (
    <div className='flex justify-center items-center h-screen flex-col bg-[#f9f9f9] gap-15'>
      <h1 className="text-6xl font-bold text-gray-900">INVEST HUB</h1>
      <h3 className='text-3xl text-gray-600'>Girişim projelerine yatırım yap, büyümesini takip et, kazancını maksimize et!</h3>
      <div className='flex gap-5'>
        <LoginBtn
        />
        <RegisterBtn
        />
      </div>
    </div>
  )
}

export default App
