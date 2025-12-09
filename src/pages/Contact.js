import PageLayout from "../components/PageLayout";
import ContactItem from "../components/ContactItem";
import { contactInfo, socialLinks } from "../data/contactData"; // Import the data

export default function Contact() {

    return (
        <PageLayout>
            {/* Outer container: Centers the content on the page */}
            <div className="flex justify-center items-center min-h-[80vh] py-12">
                
                {/* Contact Card Container */}
                <div 
                    dir="ltr"
                    className="
                        rounded-2xl p-8 shadow-2xl bg-gray-800/80 backdrop-blur-sm 
                        max-w-md w-full text-left space-y-6 border border-gray-700
                    "
                >

                    {/* Information Section (Phone, Email, Location) */}
                    <div className="flex flex-col gap-4">
                        {contactInfo.map((item) => (
                            <ContactItem 
                                key={item.id}
                                icon={item.icon}
                                text={item.text}
                                isLink={false}
                                ariaLabel={item.aria}
                            />
                        ))}
                    </div>

                    {/* Social/Link Section (LinkedIn, CV) */}
                    <div className="flex pt-4 gap-4 border-t border-gray-700">
                        {socialLinks.map((item) => (
                            <ContactItem 
                                key={item.id}
                                icon={item.icon}
                                text={item.text}
                                href={item.href}
                                isLink={true} // Mark as a link
                            />
                        ))}
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}