import './Header.scss';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../../assets/images/logo.png';
import WunderImage from '../../assets/images/Wunder Game.png';
import InstagramImage from '../../assets/images/Instagram.png';
import TwitterImage from '../../assets/images/twitter.png';
import DiscordImage from '../../assets/images/discord.png';
import TogglerImage from '../../assets/images/discord-mobile/toggler.png';
import CrossImage from '../../assets/images/cross.png';
import BackgroundTeamImage from '../../assets/images/background-team.png';

const Header = ({toggle, setToggle, isHome}) => {

    const [wid, setWidth] = useState(document.documentElement.clientWidth);

    const onToggle = () => {
        setToggle(true)
    }

    const onExpand = () => {
        setToggle(false)
    }

    const onResize = async () => {
        await setWidth(document.documentElement.clientWidth);
        
        // if(document.documentElement.clientWidth <= 1080) {
        //     setToggle(false)
        // }
    }

    useEffect( () => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    } )

    return(
        <div className="header"
            style={{
                // background: isHome ? "transparent": `url(${BackgroundTeamImage})`,
                height: wid <= 1080 && toggle ? '100%': 'unset',
            }}
        >
            { wid <= 1080 && toggle ?
            
            <div className="collapse">
                <div className="collapse-header">
                    <div className="logo">
                        <Link to="/">
                            <img src={LogoImage} />
                        </Link>
                    </div>
                    <div className="cross" onClick={onExpand}>
                        <img src={CrossImage} />
                    </div>
                </div>
                <div className="collapse-content">
                    <Link to="/"><div className="collapse-link">Home</div></Link>
                    <Link to="/mint"><div className="collapse-link">Mint</div></Link>
                    <Link to="/wunderverse"><div className="collapse-link">Wunderverse</div></Link>
                    <Link to="/story"><div className="collapse-link">Story</div></Link>
                    <a href="https://discord.gg/wunderverse" target="_blank">
                        <div className="collapse-link">
                            <div className="collapse-link-content">Discord</div>
                            <div className="collapse-link-image">
                                <img src={DiscordImage} />
                            </div>
                        </div>
                    </a>
                    <a href="https://twitter.com/wunder_game" target="_blank">
                        <div className="collapse-link">
                            <div className="collapse-link-content">Twitter</div>
                            <div className="collapse-link-image">
                                <img src={TwitterImage} />
                            </div>
                        </div>
                    </a>
                    <a href="https://instagram.com/wunder.game" target="_blank">
                        <div className="collapse-link">
                            <div className="collapse-link-content">Instagram</div>
                            <div className="collapse-link-image">
                                <img src={InstagramImage} />
                            </div>
                        </div>
                    </a>
                    <a href="https://play.wunder.gg/" target="_blank">
                        <div className="collapse-link">
                            <div className="collpase-wounder-back">
                                <div className="collapse-link-content">Wunder Game</div>
                                <div className="collapse-link-image">
                                    <img src={WunderImage} />
                                </div> 
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            :
            <div className="expanded">
                <div className="logo">
                    <Link to="/">
                        <img src={LogoImage} />
                    </Link>
                </div>
                <div className="links">
                    <div className="page-links">
                        <NavLink 
                            to="/" 
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? '#B5FBFB' : '#BEA1E3',
                                };
                            }}
                        >
                            <div className="page-link">Home</div>
                        </NavLink>
                        <NavLink 
                            to="/mint"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? '#B5FBFB' : '#BEA1E3',
                                };
                            }}
                        ><div className="page-link">Mint</div></NavLink>
                        <NavLink 
                            to="/wunderverse"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? '#B5FBFB' : '#BEA1E3',
                                };
                            }}
                        ><div className="page-link">Wunderverse</div></NavLink>
                        <NavLink 
                            to="/story"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? '#B5FBFB' : '#BEA1E3',
                                };
                            }}
                        ><div className="page-link">Story</div></NavLink>
                    </div>
                    <div className="social-links">
                        <div className="social-link">
                            <a href="https://discord.gg/wunderverse" target="_blank">
                                <img src={DiscordImage} />
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://twitter.com/wunder_game" target="_blank">
                                <img src={TwitterImage} />
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://instagram.com/wunder.game" target="_blank">
                                <img src={InstagramImage} />
                            </a>
                        </div>
                        <div className="social-link">
                            <a href="https://play.wunder.gg/" target="_blank">
                                <img src={WunderImage} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="collapse-button" onClick={onToggle}>
                    <div className="toggler">
                        <img src={TogglerImage} />
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Header;