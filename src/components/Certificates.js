import { useState } from "react";
import Modal from "./Modal";

const certificates = [
    {
        name: 'Bachelor of Data Science',
        img: '/certificates/ds-seu.png',
        issuer: 'Saudi Electronic University',
    },
    {
        name: 'Network+',
        img: '/certificates/network.png',
        issuer: 'CompTIA',
    },
    {
        name: 'Google IT Support',
        img: '/certificates/google-it-support.png',
        issuer: 'Google',
    },
    {
        name: 'Database Structures and Management with MySQL',
        img: '/certificates/Meta_DB.png',
        issuer: 'Meta',
    },
    {
        name: 'Python for everybody',
        img: '/certificates/python.png',
        issuer: 'Univerisity of Michigan',
    },
    {
        name: 'Django for everybody',
        img: '/certificates/django.png',
        issuer: 'University of Michigan',
    },
    {
        name: 'Programming with JavaScript',
        img: '/certificates/meta-js.png',
        issuer: 'Meta',
    },
    {
        name: 'Working with data',
        img: '/certificates/meta-data.png',
        issuer: 'Meta',
    },
    {
        name: 'Version Control',
        img: '/certificates/meta-version-control.png',
        issuer: 'Meta',
    },
    {
        name: 'Introduction to Front-end Devolopment',
        img: '/certificates/meta-frontend.png',
        issuer: 'Meta',
    },
    {
        name: 'Introduction to Back-end Devolopment',
        img: '/certificates/meta-backend.png',
        issuer: 'Meta',
    },
    {
        name: 'Javascript Programming',
        img: '/certificates/js-flexcourses.png',
        issuer: 'Flex Courses',
    },
    {
        name: 'jQuery From Zero to Hero',
        img: '/certificates/jQuery-flexcourses.png',
        issuer: 'Flex Courses',
    },
    {
        name: 'Self Learning Art',
        img: '/certificates/self-learning-flexcourses.png',
        issuer: 'Flex Courses',
    },
    {
        name: 'Learning how to Learn',
        img: '/certificates/Learning-how-to-learn.png',
        issuer: 'Deep Teaching Solutions',
    },
    {
        name: 'بكالوريوس شريعة',
        img: '/certificates/sharia.png',
        issuer: 'جامعة الامام محمد بن سعود الاسلامية',
    },
]

export default function Certificates({setShowCertificates}) {

    const [showCert, setShowCert] = useState(false)

    return (
        <Modal setShowModal={setShowCertificates}>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  p-2">
                    {certificates.map((cert, idx) => (
                        <button
                            key={`${cert.name}-${idx}`}
                            type="button"
                            onClick={() => setShowCert(cert)}
                            className="group opacity-0 animate-fadeInFromUp relative overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 min-h-24"
                            style={{ animationDelay: `${idx * 70}ms` }}
                        >
                            <img
                                src={cert.img}
                                alt={cert.name}
                                loading="lazy"
                                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Overlay info */}
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
                                <h3 className="text-sm font-semibold text-white">
                                    {cert.name}
                                </h3>
                                <p className="mt-0.5 text-xs text-gray-200">
                                    {cert.issuer}
                                </p>
                            </div>

                            {/* Static footer (visible even without hover on mobile) */}
                            <div className="pointer-events-none block md:hidden absolute bottom-0 w-full bg-black/55 px-3 py-2">
                                <h3 className="text-sm font-semibold text-white truncate">{cert.name}</h3>
                                <p className="text-xs text-gray-200 truncate">{cert.issuer}</p>
                            </div>
                        </button>
                    ))}
                    {
                        showCert &&
                        <Modal setShowModal={setShowCert} opacity={100} >
                            <div className="relative flex items-center justify-center">

                                <div className="absolute inset-0 rounded-2xl blur-2xl
                                        bg-[radial-gradient(60%_60%_at_50%_50%,rgba(251,191,36,0.28),transparent_65%)]
                                        animate-warmGlow [will-change:transform]">
                                </div>
                            
                                <img
                                    src={showCert.img}
                                    className="relative max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
                                />

                            </div>
                        </Modal>
                    }
                </div>
        </Modal>
    )
}
