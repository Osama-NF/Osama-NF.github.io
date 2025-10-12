import Modal from "./Modal";

const tools = [
    {title: 'Javascript', img: '/tools/js.svg', color: 'border-yellow-400'},
    {title: 'React', img: '/tools/react.svg', color: 'border-cyan-500'},
    {title: 'Tailwind', img: '/tools/tailwind.svg', color: 'border-blue-500'},
    {title: 'Git', img: '/tools/git.svg', color: 'border-orange-600'},
    {title: 'RHEL', img: '/tools/rhel.svg', color: 'border-red-600'},
    {title: 'SQL', img: '/tools/sql.svg', color: ''},
    {title: 'PHP', img: '/tools/php.svg', color: 'border-indigo-500'},
    {title: 'Python', img: '/tools/python.svg', color: 'border-r-yellow-400 border-b-yellow-400 border-t-blue-400 border-l-blue-400'},
    {title: 'Django', img: '/tools/django.svg', color: 'border-green-600'},
]


function ToolkitList({setShowToolkit}) {

    

  return (
    <Modal setShowModal={setShowToolkit}>
        <ul dir="ltr" className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tools.map((tool, i) => {
                return (
                    <li key={tool.title} className='group'>

                        <div
                        className={[
                            // Card look
                            "flex items-center gap-3 rounded-2xl p-3",
                            "bg-zinc-900/60 backdrop-blur",
                            "border " + tool.color,
                            "shadow-sm",

                            // Entrance animation (staggered)
                            "opacity-0 translate-y-2",
                            "animate-fadeInFromUp",

                            // Hover/focus interaction
                            "transition-transform duration-300 ease-out",
                            "hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg",
                            "focus-within:ring-2 focus-within:ring-indigo-400/50"
                        ].join(" ")}
                        style={{ animationDelay: `${i * 70}ms` }}
                        >

                            <div className="shrink-0 grid place-content-center size-10 rounded-xl text-white shadow-inner select-none">
                                <img
                                src={tool.img}
                                className="size-6 object-contain"
                                draggable="false"
                                />
                            </div>

                            <span className="font-medium text-zinc-800 dark:text-zinc-100 select-none">
                                {tool.title}
                            </span>

                        </div>

                    </li>
                );
            })}
        </ul>
    </Modal>
  );
}

export default ToolkitList;

