import Curriculum from '../../Classes/Curriculum';
import './HardSkills.css';

const HardSkills = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <div className={darkMode ? 'darkmode-card-board' : 'card-board'}>
            <h3>Hard Skills</h3>
            <div className='hardskills-each'>
                {curriculum.hardSkills.map((skill, index) => {
                    return (
                        <svg key={index} className={`hard-skill-icon-${skill.key}`}></svg>
                    )
                })}
            </div>
        </div>
    )
}

export default HardSkills;