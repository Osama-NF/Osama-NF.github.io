import PageLayout from "../components/PageLayout"; 
import { tools } from '../data/toolsData'; 

export default function ToolsPage() {

    return (
        <PageLayout>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <h1 className="text-3xl font-extrabold text-white mb-10 border-b border-gray-700 pb-3">
                    التقنيات
                </h1>

                <ul dir="ltr" className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {tools.map((tool, i) => {
                        const combinedClasses = [
                            // Card look
                            "flex items-center gap-3 rounded-2xl p-3",
                            "bg-zinc-900/60 backdrop-blur",
                            "border",
                            "shadow-sm",

                            // Entrance animation (staggered)
                            "opacity-0 translate-y-2",
                            "animate-fadeInFromUp",
                        ].join(" ");

                        return (
                            <li key={tool.title} className='group'>

                                <div
                                    // Combine static classes with dynamic color class
                                    className={`${combinedClasses} ${tool.color}`}
                                    style={{ animationDelay: `${i * 70}ms` }}
                                >

                                    <div className="shrink-0 grid place-content-center size-10 rounded-xl text-white shadow-inner select-none">
                                        <img
                                            src={tool.img}
                                            className="size-6 object-contain"
                                            draggable="false"
                                            alt={`${tool.title} logo`}
                                        />
                                    </div>

                                    <span className="font-medium text-zinc-100 select-none">
                                        {tool.title}
                                    </span>

                                </div>

                            </li>
                        );
                    })}
                </ul>

            </div>
        </PageLayout>
    );
}
