import Curriculum from '../../Classes/Curriculum';
import './Header.css';

const Header = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <div className={darkMode ? 'darkmode-header' : 'header'}>
            <div className={darkMode ? 'darkmode-header-divisor' : 'header-divisor'}>
                <h1>{curriculum.name}</h1>
                <h2>{curriculum.currentJob}</h2>
            </div>
            <div className={darkMode ? 'darkmode-header-photo' : 'header-photo'}>
                <div className='header-photo-radius'></div>
            </div>
        </div>
    );
}

export default Header;