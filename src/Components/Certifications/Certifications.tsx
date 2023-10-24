import Curriculum from '../../Classes/Curriculum';
import './Certifications.css';

const Certifications = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <div className={darkMode ? 'darkmode-card-board' : 'card-board'}>
            <h3 className='certification-title'>Certifications</h3>
            <div className='certification-each'>
                {curriculum.certifications.map((cert, index) => {
                    if (cert.image === "" || cert.link === "") return null;
                    return (
                        !cert.image.includes("csharp") ?
                        <a title={cert.name} key={index} target="_blank" rel="noreferrer" href={cert.link}><img alt='certificate' width={80} height={80} src={cert.image} /></a>
                        :
                        <a title={cert.name} key={index} target="_blank" rel="noreferrer" href={cert.link}><svg  className='csharp' width={80} height={80} /></a>
                        )
                })}
            </div>
        </div>
    )
}

export default Certifications;