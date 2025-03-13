//https://react.dev/learn/importing-and-exporting-components
import { useNavigate } from "react-router-dom";
import github from '../../../assets/social/github.png';

import linkedin from '../../../assets/social/LinkedIn.svg';


export function SocialMedia() {
    return (
        <div className='social-media'>
            <img className='logo small invert-color' src={github} alt="github logo"></img>
            <img className='logo small' src={linkedin} alt="linkedin logo"></img>
        </div>
    );
}

export default function FooterNavigation() {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
    navigate(path);
    }

    return (
        <div className='footer'>
            <div className='footer-navigation'>
                <button onClick={() => handleClick('/home')}>Home</button>
                <button onClick={() => handleClick('/about')}>About</button>
                <button onClick={() => handleClick('/projects')}>Projects</button>
                <button onClick={() => handleClick('/contact')}>Contact</button>
            </div>
            <SocialMedia />
        </div>
    );
}