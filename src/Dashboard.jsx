import React from 'react'

function Dashboard() {

    const projects = [
        {
            id: 1,
            name: "BioTechX",
            category: "Biyoteknoloji",
            value: 87000,
            change: 4.1,
        },
        {
            id: 2,
            name: "SmartFarm",
            category: "Tarım Teknolojisi",
            value: 62500,
            change: -2.3,
        },
        {
            id: 3,
            name: "FinGo",
            category: "Finans Teknolojisi",
            value: 110300,
            change: 1.8,
        },
        {
            id: 4,
            name: "GreenVolt",
            category: "Yenilenebilir Enerji",
            value: 95800,
            change: 3.5,
        },
        {
            id: 5,
            name: "EduNova",
            category: "Eğitim Teknolojisi",
            value: 78200,
            change: -1.2,
        },
        {
            id: 6,
            name: "HealthSync",
            category: "Dijital Sağlık",
            value: 132000,
            change: 2.7,
        },
        {
            id: 7,
            name: "RoboCore",
            category: "Robotik",
            value: 120000,
            change: -0.9,
        },
        {
            id: 8,
            name: "SpaceLink",
            category: "Uzay Teknolojisi",
            value: 140000,
            change: 5.0,
        },
        {
            id: 9,
            name: "AquaPure",
            category: "Su Arıtma Sistemleri",
            value: 70400,
            change: -3.4,
        },
        {
            id: 10,
            name: "VRScene",
            category: "Sanal Gerçeklik",
            value: 91700,
            change: 2.2,
        },
        {
            id: 11,
            name: "FoodFusion",
            category: "Gıda Teknolojisi",
            value: 98000,
            change: 3.0,
        },
        {
            id: 12,
            name: "CleanTech",
            category: "Çevre Teknolojileri",
            value: 115000,
            change: -1.8,
        },
    ];

    return (
        <div className='flex items-center flex-col p-8 bg-gray-50 min-h-screen gap-10'>
            <h1 className='text-3xl font-bold'>Yatırım Yapılabilecek Projeler</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    projects.map((project, i) => (
                        <div key={project.id} className="bg-white p-6 rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold">{project.name}</h2>
                            <p className="text-sm text-gray-600">Kategori: {project.category}</p>
                            <p className="text-base font-bold text-gray-800">Değer: {project.value.toLocaleString()}₺</p>
                            <p className={`text-sm ${project.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                                {project.change >= 0 ? "+" : ""}
                                {project.change}%
                            </p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Yatırım Yap</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard