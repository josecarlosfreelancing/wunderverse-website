import './Wunderverse.scss';

import { useState, useEffect } from "react";
import Slide from '../../components/Slide/Slide';
import Header from "../../components/Header/Header";
import Introduction from "./Introduction/Introduction";
import Partnership from "./Partnership/Partnership";
import Social from "./Social/Social";
import Team from "./Team/Team";

const Wunderverse = () => {
    
    const [toggle, setToggle] = useState(false)
    const [wid, setWidth] = useState(document.documentElement.clientWidth);

    const onResize = async () => {
        await setWidth(document.documentElement.clientWidth);
    }

    useEffect( () => {
        window.addEventListener('resize', onResize);
    } )

    return (
        <div className="wunderverse">
            <Header toggle={toggle} setToggle={setToggle} isHome={false} />
            <Slide isDesktop={ wid <= 1080 ? false: true }>
                <section id="introduction">
                    <Introduction />
                </section>
                <section id="team">
                    <Team />
                </section>
                <section id="partnership">
                    <Partnership width={wid} />
                </section>
                <section id="social">
                    <Social />
                </section>
            </Slide>
        </div>
    );
}

export default Wunderverse;