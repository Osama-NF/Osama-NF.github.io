// src/components/ContactItem.jsx

const defaultClasses = "size-6 object-contain"
const itemBaseClasses = "flex items-center gap-3 animate-fadeInToUp";
const textClasses = "font-medium text-zinc-300";

export default function ContactItem({ icon, text, href, isLink, ariaLabel }) {
    
    if (isLink) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${itemBaseClasses} hover:bg-gray-700/50 rounded-lg p-2 transition-colors`}
                aria-label={ariaLabel || text}
            >
                <img
                    src={icon}
                    className={defaultClasses}
                    draggable="false"
                    alt={text + ' Icon'}
                />
                <p className={`${textClasses} hover:underline`}>
                    {text}
                </p>
            </a>
        );
    }

    return (
        <div className={itemBaseClasses} aria-label={ariaLabel}>
            <img
                src={icon}
                className={defaultClasses}
                draggable="false"
                alt={text + ' Icon'}
            />
            <p className={textClasses}>
                {text}
            </p>
        </div>
    );
}