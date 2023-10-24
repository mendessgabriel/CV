import Curriculum from '../../Classes/Curriculum';
import WhoAmI from '../WhoAmI/WhoAmI';
import './Experiences.css';

const Experiences = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <section className={darkMode ? 'darkmode-experiences' : 'experiences'}>
            {WhoAmI(curriculum, darkMode)}
            <h3>Experiences</h3>
            {curriculum.experiences.map((expe, index) => {
                return (
                    <div key={index}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <svg className={'logo-' + expe.enterprise.split(" ")[0].toLowerCase()} />
                        <h3 title={expe.enterprise}>{expe.enterprise + " - " + expe.role}</h3>
                        </div>

                        <p>{expe.startedMonth + "/" + expe.startedYear} {expe.stillWorking ? " - Current" : " - " + expe.endMonth + "/" + expe.endYear}</p>

                        <span>{expe.description}</span>
                        <hr />
                    </div>
                );
            })}
        </section>
    )
}

export default Experiences;