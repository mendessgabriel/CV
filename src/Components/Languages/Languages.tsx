import Curriculum from '../../Classes/Curriculum';
import './Languages.css';

const Languages = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <div className={darkMode ? 'darkmode-card-board' : 'card-board'}>
            <h3>Languages</h3>
            <div className='languague-each'>
                {curriculum.idioms.map((idiom, index) => {
                    return (
                        <span title={idiom.key} key={index}><svg className={`img-idiom-${idiom.key}`} /><span className='language-level'>{" - " + idiom.value}</span></span>
                    )
                })}
            </div>
        </div>
    )
}

export default Languages;