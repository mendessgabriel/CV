import React, { useEffect, useState } from 'react';
import './App.css';
import Curriculum from './Classes/Curriculum';

function App() {
  const [cv] = useState<Curriculum>(new Curriculum());
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [toast, setToast] = useState<string>();

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = document.body.style.backgroundColor === "rgb(25, 25, 25)" ? "#9d9b9b" : "rgb(25, 25, 25)";
  }
  
  const handleToast = async (event: React.MouseEvent<HTMLSpanElement>, copied?: any) => {
    console.log(event)
    if (copied) {
      await navigator.clipboard.writeText(copied);
        setToast("Copiado!");
        setTimeout(() => {
          setToast("");
        }, 2000);
    }
  }

  useEffect(() => {
    console.log(cv);
    document.body.style.backgroundColor = darkMode ? "rgb(25, 25, 25)" : "#9d9b9b";
  }, []);

  return (
    <div className="App">
      <div className="darkmodebtn">
        {darkMode ? <svg className='icon-moon' /> : <svg className='icon-sun' />}
        <div className='icon-sunmoon'></div>
        <label className="switch">
          <input type="checkbox" onClick={handleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className={darkMode ? "darkmode-cv" : "cv"}>
        <div className={darkMode ? 'darkmode-header' : 'header'}>
          <div className='header-divisor'>
            <h1>{cv.name}</h1>
            <h2>{cv.currentJob}</h2>
          </div>
          <div className='header-photo'>
            <div className='header-photo-radius'></div>
          </div>
        </div>

        <div className={darkMode ? 'darkmode-main' : 'main'}>
          <section className='main-contact'>
            <h3>Contact</h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <span style={{cursor: "pointer"}} title='Copiar número' onClick={(e) => handleToast(e, cv.phone)}>
                <div className='main-icon-phone'></div>
              </span>
              <span style={{cursor: "pointer"}} title='Copiar e-mail' onClick={(e) => handleToast(e, cv.email)}>
                <div className='main-icon-email'></div>
              </span>
              {cv.urls.map((url, index) => {
                return (
                  <a key={index} target="_blank" href={url.value}><div className={`main-icon-${url.key}`}></div></a>
                )
              })}
            </div>
          </section>
          <section className='main-graduation'>
            <h3>Graduation</h3>
            {cv.graduations.map((grad, index) => {
              return (
                <div key={index}>
                  <h4>{grad.place} {grad.stillActive ? " - Studying until " + grad.finishMonth + "/" + grad.finishYear : null}</h4>
                  <span>{grad.name}</span>
                </div>
              );
            })}
          </section>
        </div>

        <div className={darkMode ? 'darkmode-hardskillandexperience' : 'hardskillandexperience'}>
          <section className='hardskills'>
            <div>
              <h3>Hard Skills</h3>
              <div className='hardskills-each'>
                {cv.hardSkills.map((skill, index) => {
                  return (
                    <svg key={index} className={`hard-skill-icon-${skill.key}`}></svg>
                  )
                })}
              </div>
            </div>
            <br />
            <br />
            <div>
              <h3>Certifications</h3>
              <div className='hardskills-each'>
                {cv.certifications.map((cert, index) => {
                  return (
                    <a key={index} target="_blank" href={cert.link}><img width={80} height={80} src={cert.image} /></a>
                  )
                })}
              </div>
            </div>
            <br />
            <br />
            <div>
              <h3>Languages</h3>
              <div className='idioms-each'>
                {cv.idioms.map((idiom, index) => {
                  return (
                    <span key={index}><svg className={`img-idiom-${idiom.key}`} /><span style={{bottom: "2rem", fontWeight: "bold", position: "relative"}}>{" - " + idiom.value}</span></span>
                  )
                })}
              </div>
            </div>
          </section>
          <section className='experiences'>
            <h3>Experiences</h3>
            {cv.experiences.map((expe, index) => {
              return (
                <div key={index}>
                  <h3>{expe.enterprise + " - " + expe.role}</h3>
                  <p>{expe.startedMonth + "/" + expe.startedYear} {expe.stillWorking ? " - Current" : ""}</p>
                  
                  <span>{expe.description}</span>
                  <hr />
                </div>
              );
            })}
          </section>
        </div>
      </div>
      {toast && toast.length > 0 ? <div className='toast'>{toast}</div> : null}
    </div>
  );
}

export default App;
