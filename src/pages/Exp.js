import PageLayout from "../components/PageLayout";

const data = [
    {
        id: 4,
        icon: "/exp/elm.svg",
        role: "Senior Technical Support",
        company: "علم",
        period: "2025 – Current",
        highlights: [
            "أنشأت مقاطع فيديو تدريبية لمساعدة أعضاء الفريق على التكيّف السريع والتعرّف على التقنيات الجديدة.",
            "ضمنت بقاء حلّ التذاكر بمستوى عالٍ من الجودة، مما ساهم في رفع كفاءة الدعم وتحسين جودة الاستجابة بشكل عام."
        ]
    },
    {
        id: 3,
        icon: "/exp/tabadul.svg",
        role: "L2 Application Support",
        company: "تبادل",
        period: "2024 – 2025",
        highlights: [
            "طوّرت تطبيق ويب حسّن عملية البحث في السجلات ونقل الملفات وعرض البيانات، مما سرّع سير عمل فريق الدعم بشكل كبير.",
            "حسّنت أداء تطبيق ويب بنسبة 97.5%، بخفض زمن التحميل من 16 ثانية إلى 0.4 ثانية من خلال تحسينات في الأكواد والاستعلامات."
        ]
    },
    {
        id: 2,
        icon: "/exp/tabadul.svg",
        role: "Application Support",
        company: "تبادل",
        period: "2022 – 2024",
        highlights: [
            "تكفلت بتصميم وتطوير وادارة تطبيق ويب يقدّم بوابة للموظفين للوصول إلى الموارد والمعلومات.",
            "قدّمت الدعم للمستخدمين من خلال الرد على الاستفسارات وحل المشكلات بهدف تعزيز رضا المستخدمين."
        ]
    },
    {
        id: 1,
        icon: "/exp/alsabt.png",
        role: "مساعد اداري",
        company: "مركز السبت لمساعدات السيارات",
        period: "2016 - 2022",
        highlights: [
            "عمل جزئي خلال فترة الثانوية والجامعة.",
            "ساهمت في الامتثال للأنظمة وضمان جودة العمليات وإدارة عمليات الاستيراد.",
            "طوّرت سكربتات لأتمتة إنشاء وتعبئة بيانات جداول Excel المطلوبة لأغراض الامتثال التنظيمي."
        ],
    },
];

export default function Exp() {
    return (
        // <section className="w-full h-full mx-auto p-10 text-zinc-100 bg-gray-900">
        <PageLayout>
            <section className="w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-4xl text-zinc-100">

                <h1 className="text-3xl font-extrabold text-white mb-8 border-b border-gray-700 pb-3">
                    الخبرات العملية
                </h1>
                
                <div className="relative">
                    {/* Central line */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-700"></div>

                    <ol className="space-y-10">
                        {data.map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <li key={item.id} className="relative flex gap-6 md:gap-10 opacity-0 animate-fadeInFromUp" style={{ animationDelay: `${idx * 250}ms` }}>
                                    {/* Dot with icon */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 z-10 flex items-center justify-center">
                                        <span
                                            className="
                                    flex items-center justify-center h-10 w-10 rounded-full bg-zinc-900 ring-4 ring-zinc-800 shadow-lg
                                    transition-transform duration-500 ease-out hover:scale-110 hover:rotate-12
                                    "
                                        >
                                            <img
                                                src={item.icon}
                                                alt=''
                                                className='w-8 h-8 rounded-full'
                                            />
                                        </span>
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`
                                relative w-full md:w-1/2 p-5 rounded-2xl 
                                border border-zinc-700 
                                bg-zinc-900/70 backdrop-blur shadow-sm 
                                hover:shadow-md hover:border-zinc-600 
                                transition-all duration-500 ease-out
                                hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110
                                ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                            `}
                                    >
                                        <header className="mb-2">
                                            <div className={`flex justify-between align-middle mb-1 pl-8 ${isLeft
                                                ? 'md:pr-4 md:flex-row-reverse'
                                                : 'md:pl-4'
                                                }`}>
                                                <h3 dir='ltr' className="text-xs text-zinc-400">{item.period}</h3>
                                                <span className="text-xs inline-block  rounded-full bg-zinc-800 px-2 py-0.5 text-zinc-300">
                                                    {item.company}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-center">
                                                <p className="text-lg font-semibold text-zinc-50 ">{item.role}</p>
                                            </div>
                                        </header>

                                        <ul
                                            className={`list-disc text-right ${isLeft
                                                ? "pl-5 md:pl-0 md:pr-5"
                                                : "pl-5 "
                                                } text-sm text-zinc-300 space-y-1`}
                                        >
                                            {item.highlights.map((h, i) => (
                                                <li key={i}>{h}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>
        </PageLayout>
    );
}
