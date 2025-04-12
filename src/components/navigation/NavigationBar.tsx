//https://react.dev/learn/importing-and-exporting-components
import { useNavigate } from "react-router-dom";
import reactLogo from '../../assets/react.svg';

export default function NavigationBar() {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
    navigate(path);
    }

    return (
        <div className='navigation-bar'>
            <a target="_blank">
                <img src={reactLogo} className="logo react small" alt="react logo"></img>
            </a>
            <button onClick={() => handleClick('/home')}>Home</button>
            <button onClick={() => handleClick('/about')}>About</button>
            <button onClick={() => handleClick('/projects')}>Projects</button>
            <button onClick={() => handleClick('/contact')}>Contact</button>
            {/* consider having drop down contact menu */}
        </div>
    );
}