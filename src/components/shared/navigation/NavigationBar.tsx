import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
    navigate(path);
    }

    return (
        <div className='navigation-bar'>
            <button onClick={() => handleClick('/home')}>Home</button>
            <button onClick={() => handleClick('/about')}>About</button>
            <button onClick={() => handleClick('/projects')}>Projects</button>
            <button onClick={() => handleClick('/contact')}>Contact</button>
            {/* consider having drop down contact menu */}
        </div>
    );
}