import Curriculum from '../../Classes/Curriculum';
import './Contact.css';

const Contact = (curriculum: Curriculum, darkMode: boolean, handleToast: (copied?: any) => void) => {
    return (
        <section className={darkMode ? 'darkmode-main-contact' : 'main-contact'}>
            <h3>Contact</h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {curriculum.urls.map((url, index) => {
                    if (url.value === "") return null;
                    return (
                        url.key === 'email' ?
                            <span key={index} style={{ cursor: "pointer" }} title='Copiar e-mail' onClick={() => handleToast(curriculum.email)}>
                                <div className='main-icon-email'></div>
                            </span> : url.key === 'phone' ?
                                <span key={index} style={{ cursor: "pointer" }} title='Copiar número' onClick={() => handleToast(curriculum.phone)}>
                                    <div className='main-icon-phone'></div>
                                </span> :
                                <a key={index} target="_blank" rel="noreferrer" href={url.value}><div className={`main-icon-${url.key}`}></div></a>
                    )
                })}
            </div>
        </section>
    );
}

export default Contact;