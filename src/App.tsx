import React, { useEffect, useState } from 'react';
import './App.css';
import Curriculum from './Classes/Curriculum';
import Graduation from './Components/Graduation/Graduation';
import Contact from './Components/Contact/Contact';
import DarkModeSwitch from './Components/DarkModeSwitch/DarkModeSwitch';
import Header from './Components/Header/Header';
import HardSkills from './Components/HardSkills/HardSkills';
import Certifications from './Components/Certifications/Certifications';
import Languages from './Components/Languages/Languages';
import Experiences from './Components/Experiences/Experiences';
import { CacheService } from './Services/CacheService';
import WhoAmI from './Components/WhoAmI/WhoAmI';

function App() {
  const [cv, setCv] = useState<Curriculum>(new Curriculum());
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [toast, setToast] = useState<string>();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = document.body.style.backgroundColor === "rgb(25, 25, 25)" ? "#9d9b9b" : "rgb(25, 25, 25)";
  }
  
  const handleToast = async (copied?: any) => {
    if (copied) {
      try {
        await navigator.clipboard.writeText(copied);
        setToast("Copiado!");
        setTimeout(() => {
          setToast("");
        }, 2000);
      } catch(err: any) {
        console.error(err);
        setToast("Erro ao copiar. Feature ainda não criada para Mobile.");
        setTimeout(() => {
          setToast("");
        }, 2000);
      }
    }
  }

  useEffect(() => {
    let cachedCV = CacheService.getCurriculumInCache(cv);
    if (cachedCV === cv) setCv(cachedCV);
    document.body.style.backgroundColor = darkMode ? "rgb(25, 25, 25)" : "#9d9b9b";
  }, [cv, darkMode]);

  return (
    <div className="App">
      {DarkModeSwitch(darkMode, handleDarkMode)}
      <div >
                    {cv.portfolio.map((port, index) => {
                        if (port.value === "") return null;
                        return (
                            <a title={port.key} target='_blank' key={index} rel="noreferrer" href={port.value}></a>
                        )
                    })}
                </div>
      <div className={darkMode ? "darkmode-cv" : "cv"}>
      
        {Header(cv, darkMode)}
        <div className={darkMode ? 'darkmode-main' : 'main'}>
          {Contact(cv, darkMode, handleToast)}
          {Graduation(cv, darkMode)}
        </div>
        <div className={darkMode ? 'darkmode-hardskillandexperience' : 'hardskillandexperience'}>
          <section className='hardskills'>
            {HardSkills(cv, darkMode)}
            <br />
            {Certifications(cv, darkMode)}
            <br />
            {Languages(cv, darkMode)}
          </section>
          {Experiences(cv, darkMode)}
        </div>
      </div>
      {toast && toast.length > 0 ? <div className={`toast-${toast.includes("Erro") ? 'red' : 'green'}`}>{toast}</div> : null}
    </div>
  );
}

export default App;
