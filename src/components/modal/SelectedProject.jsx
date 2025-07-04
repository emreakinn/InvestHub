import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { PortfolioContext } from '../../context/PortfolioContext';

function SelectedProject({ selectedProject, onClose, projects }) {

    const { err, setErr, currentUser, updateBalance } = useContext(UserContext);
    const { investments, setInvestments } = useContext(PortfolioContext);
    const [yatirimMiktari, setYatirimMiktari] = useState('')
    const [adet, setAdet] = useState('')
    const projectValue = projects.find((project => project.id === selectedProject.id))

    const YatirimYap = () => {
        const miktar = Number(yatirimMiktari);
        if (miktar <= currentUser?.balance) {
            const mevcutYatirim = investments.find(yatirim => yatirim.projeAdi === selectedProject?.name)
            if (mevcutYatirim) {
                mevcutYatirim.yatirilanTutar += miktar;
                mevcutYatirim.adet += parseFloat((miktar / Number(projectValue?.value || 1)).toFixed(2))
                mevcutYatirim.guncelDeger += parseFloat((projectValue?.value || 0).toFixed(2))
            } else {
                setAdet(miktar / Number(projectValue?.value || 1))
                const yeniYatirim = {
                    projeAdi: selectedProject?.name,
                    yatirilanTutar: miktar,
                    adet: parseFloat((miktar / Number(projectValue.value)).toFixed(2)),
                    alinanDeger: parseFloat((selectedProject.value).toFixed(2)),
                    guncelDeger: parseFloat((projectValue?.value || 0).toFixed(2)),
                }

                setInvestments([...investments, yeniYatirim])
                onClose()
            }


            const yeniBakiye = currentUser.balance - miktar;
            updateBalance(yeniBakiye);
            setYatirimMiktari('')
        } else {
            setErr('Yeterli Paranız Yok')
            setYatirimMiktari('')
        }
    }

    useEffect(() => {
        setErr('')
    }, [selectedProject])

    return (
        < div className='w-[400px] h-[400px] flex flex-col justify-center gap-5 p-6 rounded-2xl shadow-xl bg-blue-700 text-white absolute top-[279px] left-[568px]]' >
            <p>Proje: <span className='font-bold'>{selectedProject?.name}</span></p>
            <p>Bakiyeniz: <span className='font-bold'>{currentUser?.balance || 0}₺</span></p>
            <p>Proje Değeri: <span className='font-bold'>{parseFloat(projectValue?.value).toFixed(2)}₺</span></p>
            <p className={`text-sm ${projectValue.change >= 0 ? "text-green-300" : "text-red-300"}`}><span>{projectValue.change >= 0 ? "+" : ""}
                {parseFloat(projectValue.change).toFixed(2)}% değişim (son 24 saat)</span></p>
            <p>{adet ? parseFloat(adet).toFixed(2) : "0.00"}</p>
            <input
                className='placeholder-white p-2 rounded-md outline-none border'
                type="number"
                placeholder='Yatırım Miktarı'
                value={yatirimMiktari}
                onChange={(e) => setYatirimMiktari(e.target.value)}
            />
            <p className='text-red-500'>
                {err}
            </p>
            <div className='flex justify-between'>
                <button onClick={onClose} className='bg-gray-200 text-blue-700 px-3 py-1 rounded-md'>Vazgeç</button>
                <button onClick={YatirimYap} className='bg-gray-200 text-blue-700 px-3 py-1 rounded-md'>Yatır</button>
            </div>
        </div >
    )
}

export default SelectedProject