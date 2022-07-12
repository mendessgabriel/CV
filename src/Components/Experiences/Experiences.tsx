import Curriculum from '../../Classes/Curriculum';
import './Experiences.css';

const Experiences = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <section className={darkMode ? 'darkmode-experiences' : 'experiences'}>
            <h3>Experiences</h3>
            {curriculum.experiences.map((expe, index) => {
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
    )
}

export default Experiences;