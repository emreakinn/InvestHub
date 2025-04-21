import React, { useState } from 'react'

function SelectedProject({ currentUser, selectedProject, onClose }) {

    const [yatirimMiktari, setYatirimMiktari] = useState('')

    return (
        <div className='w-[400px] h-[400px] flex flex-col justify-center gap-5 p-6 rounded-2xl shadow-xl bg-blue-700 text-white absolute top-[279px] left-[568px]]'>
            <p>Proje: <span className='font-bold'>{selectedProject?.name}</span></p>
            <p>Bakiyeniz: <span className='font-bold'>{currentUser?.balance || 0}₺</span></p>
            <p>Proje Değeri: <span className='font-bold'>{parseFloat(selectedProject?.value).toFixed(2)}₺</span></p>
            <input
                className='placeholder-white p-2 rounded-md outline-none border'
                type="number"
                placeholder='Yatırım Miktarı'
                value={yatirimMiktari}
                onChange={(e) => setYatirimMiktari(e.target.value)}
            />
            <div className='flex justify-between'>
                <button onClick={onClose} className='bg-gray-200 text-blue-700 px-3 py-1 rounded-md'>Vazgeç</button>
                <button className='bg-gray-200 text-blue-700 px-3 py-1 rounded-md'>Yatır</button>
            </div>
        </div>
    )
}

export default SelectedProject