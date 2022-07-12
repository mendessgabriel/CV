import Curriculum from '../../Classes/Curriculum';
import './Graduation.css';

const Graduation = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <section className={darkMode ? 'darkmode-main-graduation' : 'main-graduation'}>
            <h3>Graduation</h3>
            {curriculum.graduations.map((grad, index) => {
                return (
                    <div key={index}>
                        <h4>{grad.place} {grad.stillActive ? " - Studying until " + grad.finishMonth + "/" + grad.finishYear : null}</h4>
                        <span>{grad.name}</span>
                    </div>
                );
            })}
        </section>
    )
}

export default Graduation;