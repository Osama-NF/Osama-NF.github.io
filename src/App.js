import './App.css';
import Main from './pages/Main'
import Exp from './pages/Exp';
import { Routes, Route } from 'react-router-dom';
import Certificates from './pages/Certificates';
import ToolkitList from './pages/ToolkitList';
import Contact from './pages/Contact';
import Projects from './pages/Projects'


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Main />} />

        <Route path='/experience' element={<Exp />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/techs' element={<ToolkitList />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
