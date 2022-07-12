import Curriculum from '../../Classes/Curriculum';
import './Certifications.css';

const Certifications = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <div className={darkMode ? 'darkmode-card-board' : 'card-board'}>
            <h3>Certifications</h3>
            <div className='certification-each'>
                {curriculum.certifications.map((cert, index) => {
                    return (
                        <a key={index} target="_blank" href={cert.link}><img width={80} height={80} src={cert.image} /></a>
                    )
                })}
            </div>
        </div>
    )
}

export default Certifications;