import Curriculum from '../../Classes/Curriculum';
import './Header.css';

const Header = (curriculum: Curriculum, darkMode: boolean) => {
    return (
        <div className={darkMode ? 'darkmode-header' : 'header'}>
            <div className={darkMode ? 'darkmode-header-divisor' : 'header-divisor'}>
                <h1>{curriculum.name}</h1>
                <h2>{curriculum.currentJob} - {curriculum.age} years old - <a target='_blank' rel="noreferrer" href={`https://google.com/search?q=estado+de+${curriculum.city.replace(" ", "+")}`}><svg className='flag-state'></svg></a></h2>
                <h4>portfolio</h4>
                <div className='hardskills-each'>
                    {curriculum.portfolio.map((port, index) => {
                        if (port.value === "") return null;
                        return (
                            <div style={{margin: 0}}>
                            <a title={port.key} target='_blank' key={index} rel="noreferrer" href={port.value}> {port.key} </a>
                            {(curriculum.portfolio.length - 1) != index ? <span style={{marginRight: '5px'}}> - </span> : null}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={darkMode ? 'darkmode-header-photo' : 'header-photo'}>
                <div className='header-photo-radius'></div>
            </div>
            
        </div>
    );
}

export default Header;