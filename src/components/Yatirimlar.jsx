import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { PortfolioContext } from '../context/PortfolioContext';

const Yatirimlar = ({ projects, investments }) => {

    const { err, setErr, currentUser, setCurrentUser } = useContext(UserContext);
    const { setInvestments } = useContext(PortfolioContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInvestment, setSelectedInvestment] = useState(null);
    const [satilanAdet, setSatilanAdet] = useState('')


    const openModal = (yatirim) => {
        setSelectedInvestment(yatirim);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedInvestment(null);
    };

    const yatirimSat = () => {
        const miktar = Number(satilanAdet);

        // Geçerli miktar kontrolü
        if (isNaN(miktar) || miktar <= 0) {
            alert('Lütfen geçerli bir miktar girin. Miktar sıfırdan küçük olamaz.');
            return;
        }

        if (miktar > 0 && miktar <= selectedInvestment.adet) {
            const proje = projects.find(p => p.name === selectedInvestment.projeAdi);
            const guncelDeger = Number(proje?.value || 0);

            const gelir = miktar * guncelDeger;


            setCurrentUser({ ...currentUser, balance: Number((currentUser.balance + gelir).toFixed(2)) });


            const yeniInvestments = investments.map((yatirim) => {
                if (yatirim.projeAdi === selectedInvestment.projeAdi) {
                    const yeniAdet = yatirim.adet - miktar;

                    if (yeniAdet > 0) {

                        return {
                            ...yatirim,
                            adet: yeniAdet.toFixed(2),  // Yatırımın yeni adet değeri
                            yatirilanTutar: (yatirim.yatirilanTutar * (yeniAdet / yatirim.adet)).toFixed(2),  // 
                        };
                    } else {

                        return null;
                    }
                }
                return yatirim;
            }).filter(Boolean);


            setInvestments(yeniInvestments);


            closeModal();
        } else {
            alert('Geçersiz miktar! Satılacak adet, mevcut adetten fazla olamaz.');
        }
    }


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
                <div className="w-[400px] h-[400px] flex flex-col justify-center gap-5 p-6 rounded-2xl shadow-xl bg-blue-700 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p>Proje: <span className='font-bold'>{selectedInvestment?.projeAdi}</span></p>
                    <p>Bakiye: <span className='font-bold'>{currentUser?.balance || 0}₺</span></p>
                    <p>Adet: <span className='font-bold'>{selectedInvestment?.adet}</span></p>
                    {investments.map((i, index) => {
                        const proje = projects.find(p => p.name === i.projeAdi);
                        const guncelDeger = proje?.value || 0;
                        return (
                            <div key={index}>
                                <p>Proje Değeri: <span className="font-bold">{parseFloat(guncelDeger).toFixed(2)}₺</span></p>
                                <p>Değeri: <span className="font-bold">{(satilanAdet * guncelDeger).toFixed(2)}₺</span></p>
                            </div>
                        )

                    })}

                    <input
                        className='placeholder-white p-2 rounded-md outline-none border'
                        type="number"
                        placeholder='Satılacak Adet'
                        value={satilanAdet}
                        onChange={(e) => setSatilanAdet(e.target.value)}
                    />
                    <div className='flex justify-between'>
                        <button onClick={closeModal} className='bg-gray-200 text-blue-700 px-3 py-1 rounded-md'>Vazgeç</button>
                        <button onClick={yatirimSat} className='bg-gray-200 text-blue-700 px-3 py-1 rounded-md'>Sat</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Yatirimlar