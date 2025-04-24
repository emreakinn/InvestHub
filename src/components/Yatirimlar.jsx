import React from 'react'

const Yatirimlar = ({ investments }) => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investments.length > 0 ? (
                <ul>
                    {investments.map((yatirim, index) => (
                        <li key={index} className="p-4 border-b">
                            <p>Proje Adı: <span className="font-bold">{yatirim.projeAdi}</span></p>
                            <p>Yatırılan Tutar: <span className="font-bold">{yatirim.yatirilanTutar}₺</span></p>
                            <p>Adet: <span className="font-bold">{yatirim.adet}</span></p>
                            <p>Mevcut Değer: <span className="font-bold">{yatirim.alinanDeger}₺</span></p>
                            <p>Mevcut Değer: <span className="font-bold">{yatirim.projeDegeri}₺</span></p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Henüz bir yatırım yapılmadı.</p>
            )}
        </div>
    )
}

export default Yatirimlar