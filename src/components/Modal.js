export default function Modal({setShowModal, children, title='', opacity=75}) {
    return (
    <div 
    className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto`}
    >
        <div className={`bg-black p-6 rounded-lg shadow-xl bg-opacity-${opacity} max-h-full`}>
            
            {/* Title of modal (if there is any) */}
            {
                title && 
                <h2 className="text-xl font-bold mb-4">{title}</h2>
            }
            
            {/* Content Area */}
            <div className="mb-4 text-gray-400">
                {children}
            </div>

            {/* Close btn */}
            <button
                onClick={() => setShowModal(false)}
                className="mt-5 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 min-h-12"
            >
                اغلاق
            </button>

        </div>
    </div>
  );
}