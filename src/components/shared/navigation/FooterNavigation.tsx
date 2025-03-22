//https://react.dev/learn/importing-and-exporting-components
import { useNavigate } from "react-router-dom";
import github from '../../../assets/social/github.png';
import linkedin from '../../../assets/social/LinkedIn.svg';
import { GITHUB_LINK, LINKEDIN_LINK } from '../../../constants';


export function SocialMedia() {
    return (
        <div className='social-media'>
            <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <img className='small invert-color' src={github} alt="github logo"></img>
            </a>
            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <img className='logo small' src={linkedin} alt="linkedin logo"></img>
            </a>
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