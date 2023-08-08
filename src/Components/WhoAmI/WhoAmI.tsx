import Curriculum from '../../Classes/Curriculum';
import './WhoAmI.css';

const WhoAmI = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <div className={darkMode ? 'darkmode-card-board' : 'card-board'}>
            <div>
                <h3>A bit about me</h3>
                <span>{curriculum.whoAmI}</span>
                <hr />
            </div>
        </div>
    )
}

export default WhoAmI;