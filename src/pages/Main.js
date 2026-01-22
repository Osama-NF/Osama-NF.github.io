import MainButton from "../components/MainButton";
import Myimg from "../components/Myimg";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()
  const YOUTUBE_URL = 'https://www.youtube.com/@Osama-AlFahad'

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">

      <h1 className="text-5xl font-bold mb-4">أسامة الفهد</h1>
      <Myimg/>

      <p className="text-lg text-gray-300 max-w-xl mb-8">
        مطور ويب, محب للتعلم ونشر المعرفة
        <img src="/smile.svg" alt="" className="inline w-6 h-6 m-2 align-middle"/>
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-xl">
        <MainButton text={'الخبرات'} bgColor={'cyan'} clickFunction={() => navigate('/experience')} />
        <MainButton text={'الشهادات'} bgColor={'cyan'} clickFunction={() => navigate('/certificates')} />
        <MainButton text={'التقنيات'} bgColor={'cyan'} clickFunction={() => navigate('/techs')} />
        <MainButton text={'المشاريع'} bgColor={'cyan'} clickFunction={() => navigate('/projects')}/>
        <MainButton text={'للتواصل'} bgColor={'cyan'} clickFunction={() => navigate('/contact')} />
        <MainButton text={'قناتي على اليوتيوب'} bgColor={'red'} clickFunction={()=> window.open(YOUTUBE_URL, "_blank")}/>
      </div>

    </main>
  );
}
