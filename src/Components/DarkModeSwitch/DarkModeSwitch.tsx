import './DarkModeSwitch.css';

const DarkModeSwitch = (darkMode: boolean, handleDarkMode: () => void) => {
    return (
        <div className="darkmodebtn">
            {darkMode ? <svg className='icon-moon' /> : <svg className='icon-sun' />}
            <label className="switch">
                <input type="checkbox" onClick={handleDarkMode} />
                <span className="slider round"></span>
            </label>
            <small className={darkMode ? 'darkdetail' : 'lightdetail'}>light/dark</small>
        </div>
    );
}

export default DarkModeSwitch;