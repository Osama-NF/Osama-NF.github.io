import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Header() {
    
    const navigate = useNavigate();
    const websiteName = "أسامة الفهد"; 

    const handleGoBack = () => navigate(-1)
    const handleGoHome = () => navigate('/')

    return (
        <header className="sticky top-0 z-20 bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                
                <button
                    onClick={handleGoBack}
                    className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 p-2 rounded-lg"
                    aria-label="Go back"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>

                <button 
                    onClick={handleGoHome}
                    className="text-xl font-bold text-white tracking-wider cursor-pointer hover:opacity-90 transition-opacity"
                    aria-label="Home"
                >
                    {websiteName}
                </button>

                <div className="h-6 w-6 p-2"></div> 

            </div>
        </header>
    );
}