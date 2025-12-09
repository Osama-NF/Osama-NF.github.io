import { useNavigate } from 'react-router-dom';


// Not used, kept because maybe i will use it later
export default function Footer() {
    const navigate = useNavigate();

    const handleGoHome = () => navigate('/')

    return (
        <footer className="w-full bg-gray-800 py-4 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                
                {/* Go Back Button */}
                <button
                    onClick={handleGoHome}
                    className="flex items-center text-zinc-300 hover:text-white transition-colors duration-200 p-2 rounded-lg border border-zinc-700 hover:border-white"
                    aria-label="Go back to the previous page"
                >
                    العودة للصفحة الرئيسية
                </button>

            </div>
        </footer>
    );
}