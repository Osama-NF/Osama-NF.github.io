import { useState } from "react";
import MainButton from "./MainButton";
import Myimg from "./Myimg";
import ToolkitList from "./ToolkitList";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Exp from "./Exp";

export default function Home() {

  const [showToolkit, setShowToolkit] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false)
  const [showExp, setShowExp] = useState(false)
  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">

      <h1 className="text-5xl font-bold mb-4">أسامة الفهد</h1>
      <Myimg/>

      <p className="text-lg text-gray-300 max-w-xl mb-8">
        مطور ويب, محب للتعلم ونشر المعرفة
        <img src="/smile.svg" className="inline w-6 h-6 m-2 align-middle"/>
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-xl">

        {/* <MainButton text={'المشاريع'} bgColor={'blue'} /> */}
        <MainButton text={'الخبرات'} bgColor={'cyan'} clickFunction={() => setShowExp((pre) => !pre)}/>
        {
          showExp &&
          <Exp setShowExp={setShowExp} />
        }

        <MainButton text={'الشهادات'} bgColor={'cyan'} clickFunction={() => setShowCertificates((pre) => !pre)}/>
        {
          showCertificates &&
          <Certificates setShowCertificates={setShowCertificates} />
        }
        
        <MainButton text={'التقنيات'} bgColor={'cyan'} clickFunction={() => setShowToolkit((pre) => !pre)}/>
        {
          showToolkit &&
          <ToolkitList setShowToolkit={setShowToolkit} />
        }

        <MainButton text={'للتواصل'} bgColor={'cyan'} clickFunction={() => setShowContact((pre) => !pre)}/> {/* This should have my PDF too*/}
        {
          showContact &&
          <Contact setShowContact={setShowContact}/>
        }

        <MainButton text={'قناتي على اليوتيوب'} bgColor={'red'} clickFunction={
          ()=> window.open("https://www.youtube.com/@Osama-AlFahad", "_blank")
        }/>

        
      
      </div>
    </main>
  );
}
