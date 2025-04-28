import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { PortfolioContext } from '../context/PortfolioContext';

const Yatirimlar = ({ projects, investments }) => {

    const { err, setErr, currentUser, setCurrentUser } = useContext(UserContext);
    const { setInvestments } = useContext(PortfolioContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInvestment, setSelectedInvestment] = useState(null);

    const openModal = (yatirim) => {
        setSelectedInvestment(yatirim);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedInvestment(null);
    };

    return (
        <div className="container mx-auto flex gap-6">
            {investments.length > 0 ? (
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6'>
                    {investments.map((yatirim, index) => {
                        // Proje değerini dinamik olarak projects dizisinden al
                        const proje = projects.find(p => p.name === yatirim.projeAdi);
                        const guncelDeger = proje?.value || 0; // Eğer proje bulunamazsa varsayılan olarak 0ü
                        const fark = (guncelDeger - yatirim.alinanDeger) / yatirim.alinanDeger * 100

                        return (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                                <p>Proje Adı: <span className="font-bold">{yatirim.projeAdi}</span></p>
                                <p>Yatırılan Tutar: <span className="font-bold">{yatirim.yatirilanTutar}₺</span></p>
                                <p>Adet: <span className="font-bold">{yatirim.adet}</span></p>
                                <p>Mevcut Değer: <span className="font-bold">{yatirim.alinanDeger}₺</span></p>
                                <p>Proje Değeri: <span className="font-bold">{parseFloat(guncelDeger).toFixed(2)}₺</span></p> {/* Dinamik değer */}
                                <p>Fark: <span className={`text-sm ${fark >= 0 ? "text-green-600 font-bold" : "text-red-600 font-bold"}`}>{parseFloat(fark).toFixed(2)}%</span></p> {/* Dinamik değer */}
                                <button onClick={() => openModal(yatirim)} className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Sat</button>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>Henüz bir yatırım yapılmadı.</p>
            )}

            {/* Modal  */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-md w-96">
                        <h2 className="text-lg font-bold mb-4">Yatırım Sat</h2>
                        <button onClick={closeModal} className="bg-gray-300 text-black px-4 py-2 rounded">İptal</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Yatirimlar