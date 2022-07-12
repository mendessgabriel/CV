import Curriculum from '../../Classes/Curriculum';
import './Contact.css';

const Contact = (curriculum: Curriculum, darkMode: boolean, handleToast: (event: React.MouseEvent<HTMLSpanElement>, copied?: any) => void) => {
    return (
        <section className={darkMode ? 'darkmode-main-contact' : 'main-contact'}>
            <h3>Contact</h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <span style={{ cursor: "pointer" }} title='Copiar número' onClick={(e) => handleToast(e, curriculum.phone)}>
                    <div className='main-icon-phone'></div>
                </span>
                <span style={{ cursor: "pointer" }} title='Copiar e-mail' onClick={(e) => handleToast(e, curriculum.email)}>
                    <div className='main-icon-email'></div>
                </span>
                {curriculum.urls.map((url, index) => {
                    return (
                        <a key={index} target="_blank" href={url.value}><div className={`main-icon-${url.key}`}></div></a>
                    )
                })}
            </div>
        </section>
    );
}

export default Contact;