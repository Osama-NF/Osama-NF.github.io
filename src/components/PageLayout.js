import Header from "./Header";

export default function PageLayout({ children }) {
    return (
        
        <div className="min-h-screen bg-gray-900 text-zinc-100">
            <Header />
            <main className="pt-10">
                {children}
            </main>
            {/* <Footer/> */}
        </div>
    );
}