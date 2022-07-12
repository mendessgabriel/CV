import './DarkModeSwitch.css';

const DarkModeSwitch = (darkMode: boolean, handleDarkMode: () => void) => {
    return (
        <div className="darkmodebtn">
            {darkMode ? <svg className='icon-moon' /> : <svg className='icon-sun' />}
            <div className='icon-sunmoon'></div>
            <label className="switch">
                <input type="checkbox" onClick={handleDarkMode} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default DarkModeSwitch;