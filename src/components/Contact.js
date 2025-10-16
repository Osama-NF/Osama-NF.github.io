import Modal from "./Modal";

export default function Contact({setShowContact}) {

    return (
        <Modal setShowModal={setShowContact} title="معلومات التواصل" >
            {/* <p>Email: osama.nhf@gmail.com</p>
            <p>Phone: +966537250424</p>
            <p>Living in: Saudi Arabia</p>
            <p>LinkedIn (hyperlink)</p> */}

            <div dir="ltr" className="rounded-2xl p-6 shadow-lg max-w-md w-full text-center space-y-4">

                <div className="flex flex-col gap-3 text-left">

                    {/* PHONE */}
                    <div className="flex items-center gap-3 animate-fadeInToUp">
                        <img
                        src='/contact/phone.svg'
                        className="size-6 object-contain"
                        draggable="false"
                        />
                        <p className="font-medium">+966 53 725 0724</p>
                    </div>

                    {/* EMAIL */}
                    <div className="flex items-center gap-3 animate-fadeInToUp">
                        <img
                        src='/contact/email.svg'
                        className="size-6 object-contain"
                        draggable="false"
                        />
                        <p className="font-medium">osama.nhf@gmail.com</p>
                    </div>

                    {/* LOCATION */}
                    <div className="flex items-center gap-3 animate-fadeInToUp">
                        <img
                        src='/contact/location.svg'
                        className="size-6 object-contain"
                        draggable="false"
                        />
                        <p className="font-medium">Riyadh, Saudi Arabia</p>
                    </div>


                    <div className="flex mt-6 gap-3 animate-fadeInToUp">
                        
                        {/* LINKEDIN */}
                        <a
                        href="https://www.linkedin.com/in/osamaalfahad-b19748211/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:bg-cyan-900 rounded-lg p-2 transition underline"
                        >
                            <img
                            src='/contact/linkedin.svg'
                            className="size-6 object-contain"
                            draggable="false"
                            />
                            <p className="font-medium hover:underline">
                                LinkedIn
                            </p>
                        </a>

                        {/* CV */}
                        <a
                        href="/MyCV-2025-10-16.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:bg-cyan-900 rounded-lg p-2 transition underline"
                        >
                            <img
                            src='/contact/cv.svg'
                            className="size-6 object-contain"
                            draggable="false"
                            />
                            <p className="font-medium hover:underline">
                                CV
                            </p>
                        </a>
                    </div>
                </div>
            </div>

        </Modal>
    )

}