import { useState } from "react";
import Modal from "../components/Modal";
import PageLayout from "../components/PageLayout";
import { certificates } from "../data/certificatesData";


export default function Certificates() {
    const [showCert, setShowCert] = useState(null)

    return (
        <PageLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                <h1 className="text-3xl font-extrabold text-white mb-8 border-b border-gray-700 pb-3">
                    الشهادات والتعليم
                </h1>

                {/* Grid Container */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
                    {certificates.map((cert, idx) => (
                        <button
                            key={`${cert.name}-${idx}`}
                            type="button"
                            onClick={() => setShowCert(cert)}
                            className="group opacity-0 animate-fadeInFromUp relative overflow-hidden rounded-xl bg-gray-800 shadow-xl ring-1 ring-gray-700 transition-all hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 min-h-24"
                            style={{ animationDelay: `${idx * 70}ms` }}
                        >
                            <img
                                src={cert.img}
                                alt={cert.name}
                                loading="lazy"
                                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
                                <h3 className="text-sm font-semibold text-white">
                                    {cert.name}
                                </h3>
                                <p className="mt-0.5 text-xs text-gray-200">
                                    {cert.issuer}
                                </p>
                            </div>

                            <div className="pointer-events-none block md:hidden absolute bottom-0 w-full bg-black/55 px-3 py-2">
                                <h3 className="text-sm font-semibold text-white truncate">{cert.name}</h3>
                                <p className="text-xs text-gray-200 truncate">{cert.issuer}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal - Certificate Detailed View */}
            {
                showCert && (
                    <Modal
                        setShowModal={() => setShowCert(null)} // Function to close the inner modal
                        opacity={100} // Opaque background for image view
                        title={showCert.name}
                    >
                        <div className="relative flex items-center justify-center">

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl blur-2xl
                                    bg-[radial-gradient(60%_60%_at_50%_50%,rgba(251,191,36,0.28),transparent_65%)]
                                    animate-warmGlow [will-change:transform]">
                            </div>

                            {/* Certificate Image */}
                            <img
                                src={showCert.img}
                                alt={showCert.name}
                                className="relative max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>
                    </Modal>
                )
            }
        </PageLayout>
    )
}
