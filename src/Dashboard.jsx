import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';
import SelectedProject from './components/modal/SelectedProject';
import { PortfolioContext } from './context/PortfolioContext';
import Yatirimlar from './components/Yatirimlar';


function Dashboard() {

    const initialProjects = [
        { id: 1, name: "BioTechX", category: "Biyoteknoloji", initialValue: 87000, value: 87000, change: 0, lastUpdated: Date.now() },
        { id: 2, name: "SmartFarm", category: "Tarım Teknolojisi", initialValue: 62500, value: 62500, change: 0, lastUpdated: Date.now() },
        { id: 3, name: "FinGo", category: "Finans Teknolojisi", initialValue: 110300, value: 110300, change: 0, lastUpdated: Date.now() },
        { id: 4, name: "GreenVolt", category: "Yenilenebilir Enerji", initialValue: 95800, value: 95800, change: 0, lastUpdated: Date.now() },
        { id: 5, name: "EduNova", category: "Eğitim Teknolojisi", initialValue: 78200, value: 78200, change: 0, lastUpdated: Date.now() },
        { id: 6, name: "HealthSync", category: "Dijital Sağlık", initialValue: 132000, value: 132000, change: 0, lastUpdated: Date.now() },
        { id: 7, name: "RoboCore", category: "Robotik", initialValue: 120000, value: 120000, change: 0, lastUpdated: Date.now() },
        { id: 8, name: "SpaceLink", category: "Uzay Teknolojisi", initialValue: 140000, value: 140000, change: 0, lastUpdated: Date.now() },
        { id: 9, name: "AquaPure", category: "Su Arıtma Sistemleri", initialValue: 70400, value: 70400, change: 0, lastUpdated: Date.now() },
        { id: 10, name: "VRScene", category: "Sanal Gerçeklik", initialValue: 91700, value: 91700, change: 0, lastUpdated: Date.now() },
        { id: 11, name: "FoodFusion", category: "Gıda Teknolojisi", initialValue: 98000, value: 98000, change: 0, lastUpdated: Date.now() },
        { id: 12, name: "CleanTech", category: "Çevre Teknolojileri", initialValue: 115000, value: 115000, change: 0, lastUpdated: Date.now() },
    ];

    const [projects, setProjects] = useState(initialProjects);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [sellProject, setSellProject] = useState(null)

    const updateProjectValues = () => {
        setProjects(prevProjects =>
            prevProjects.map(project => {
                const randomChange = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 0.001;
                const newValue = project.value * (1 + randomChange);
                const changePercentage = ((newValue - project.initialValue) / project.initialValue) * 100;

                return {
                    ...project,
                    value: newValue,
                    change: changePercentage,
                };
            })
        );
    };

    useEffect(() => {
        const interval = setInterval(updateProjectValues, 1000);


        return () => clearInterval(interval);
    }, []);

    const navigate = useNavigate();

    const { setIsLoggedIn, currentUser, setCurrentUser } = useContext(UserContext);
    const { investments } = useContext(PortfolioContext);

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        navigate('/');
    };

    const yatirimYap = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    return (
        <div className='flex items-center flex-col p-8 bg-gray-50 min-h-screen gap-10'>
            <h1 className='text-3xl font-bold'>Yatırım Yapılabilecek Projeler</h1>
            {currentUser && (
                <div className="container w-full flex justify-between text-left text-2xl font-semibold">
                    <h1>Hoş geldin, <span className="text-blue-700">{currentUser.username}</span>!</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                        Çıkış Yap
                    </button>
                </div>
            )}
            <div className='container'>
                <p className="text-lg font-medium text-gray-800">Yatırım Bakiye: <span className="font-bold text-green-600">{(currentUser?.balance || 0).toFixed(2)}₺</span></p>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
                {
                    projects.map((project, i) => (
                        <div key={project.id} className="bg-white p-6 rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold">{project.name}</h2>
                            <p className="text-sm text-gray-600">Kategori: {project.category}</p>
                            <p className="text-base font-bold text-gray-800">Değer: {parseFloat(project.value).toFixed(2)}₺</p>
                            <p className={`text-sm ${project.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                                {project.change >= 0 ? "+" : ""}
                                {parseFloat(project.change).toFixed(2)}% değişim (son 24 saat)
                            </p>
                            <button onClick={() => yatirimYap(project)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">Yatırım Yap</button>
                        </div>
                    ))
                }
            </div>
            {isModalOpen && (
                <SelectedProject
                    selectedProject={selectedProject}
                    onClose={() => setIsModalOpen(false)}
                    projects={projects}
                />)}
            <h1 className='text-3xl font-bold'>Yatırımlar</h1>
            <Yatirimlar
                investments={investments}
                selectedProject={selectedProject}
                projects={projects}
                sellProject={sellProject}
                setSellProject={setSellProject}
            />
        </div>
    )
}

export default Dashboard