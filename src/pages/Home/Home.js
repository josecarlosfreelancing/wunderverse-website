import Header from '../../components/Header/Header';
import './Home.scss';
import { useState, useEffect } from 'react';
import CloudImage from '../../assets/images/discord/cloud.png';
import GhostImage from '../../assets/images/discord/ghost.png';
import BorderImage from '../../assets/images/discord/border.png';

const Home = ()=> {
    const [toggle, setToggle] = useState(false)
    const [wid, setWidth] = useState(document.documentElement.clientWidth);

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


    return (
        <div className="home">
            <div className="home-container">
                <Header toggle={toggle} setToggle={setToggle} />
                <div className="discord-link" 
                    style={{
                        display: wid <= 1080 && toggle ? 'none' : 'block'
                    }}
                >
                    <div className="discord-container">
                        <div className="border-left-top border-image">
                            <img src={BorderImage} />
                        </div>
                        <div className="border-left-bottom border-image">
                            <img src={BorderImage} />
                        </div>
                        <div className="border-right-top border-image">
                            <img src={BorderImage} />
                        </div>
                        <div className="border-right-bottom border-image">
                            <img src={BorderImage} />
                        </div>
                        <div className="discord-internal-container">
                            <div className="image-panel">
                                <img src={CloudImage} />
                            </div>
                            <div className="ghost-image">
                                <img src={GhostImage} />
                            </div>
                            <div className="content-panel">
                                <div className="discord-title">Now open</div>
                                <div className="discord-content">Discord</div>
                            </div>
                            <div className="link-panel">
                                <div className="enter-button">
                                    <a href="https://discord.gg/nEfN9JWKR8" target="_blank">Enter</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;