export default function Myimg(){
    return(
        <div className="relative mb-8">
            {/* Outer glow ring */}
            <div className="
                absolute inset-0 rounded-full 
                bg-gradient-to-r from-blue-500 via-orange-500 to-red-500 
                blur-lg opacity-75 animate-pulse
            "></div>

            {/* Actual image */}
            <img
            src="/myimg.jpg"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-gray-800 shadow-2xl object-cover"
            />
        </div>
    )
}