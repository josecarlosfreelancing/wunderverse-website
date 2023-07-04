import './Story.scss';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import CrossImage from '../../assets/images/cross.png';

const imageCount    = 5;
const images        = require.context('../../assets/images/story', true);
const stories       = [];
const texts         = [
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
]

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${i}.png`);
    stories.push({
        text: texts[i - 1],
        image: image,
    });
}

const Story = () => {
    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(true);
    const [border1, setBorder1] = useState(
        document.documentElement.clientWidth > 1920  
            ?   {top: `25px`}
            :   {top: `1.25vw`}
    );
    const [border2, setBorder2] = useState(
        document.documentElement.clientWidth > 1920  
            ?   {top: `28px`}
            :   {top: `1.4vw`}
    );
    const [border3, setBorder3] = useState(
        document.documentElement.clientWidth > 1920  
            ?   {top: `28px`}
            :   {top: `1.4vw`}
    );
    const [wid, setWidth] = useState(document.documentElement.clientWidth);

    const onResize = async () => {
        await setWidth(document.documentElement.clientWidth);
    }

    useEffect( () => {
        window.addEventListener('resize', onResize);
        
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [] )

    const onRemoveContent = (e, key) => {
        if( wid <= 1080 ) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    const onAddContent = async (e, key) => {
        await setShow(true);
        if ( wid > 1920) {
            setBorder1({top: `calc(${125 * key}px + 25px)`})
            setBorder2({top: `calc(${125 * key}px + 28px)`})
            setBorder3({top: `calc(${125 * key}px + 28px)`})
        } else {
            setBorder1({top: `calc(${6.25 * key}vw + 1.25vw)`})
            setBorder2({top: `calc(${6.25 * key}vw + 1.4vw)`})
            setBorder3({top: `calc(${6.25 * key}vw + 1.4vw)`})
        }
    }
    return (
        <div className="story">
            <div className="story-container">
                <Header toggle={toggle} setToggle={setToggle} isHome={true} />
                <div className="story-content">
                    <div className="story-title">
                        Story
                    </div>
                    <div className="story-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Morbi venenatis sapien ac ligula rutrum sollicitudin. 
                        Aliquam facilisis velit non libero bibendum cursus.
                    </div>
                    <div className="story-card-container">
                    {wid <= 1080 && show 
                    ?
                        <></>
                    :
                        <div className="story-cards" style={{ display: (wid <= 1080 && show) ? 'none' : 'flex' }}>
                        {stories.map((e, key) => 
                            <div 
                                key={key}
                                className="story-card"
                                onMouseLeave={ele => onRemoveContent(ele,key)}
                                onMouseOver={ele => onAddContent(ele, key)}
                            >
                                <div className="story-text">{e.text}</div>
                                <div className="story-image">
                                    <img src={e.image} />
                                </div>
                            </div>
                        )}
                        </div>
                    }
                        {show
                        ? 
                            <div className="story-idea">
                                <div className="story-idea-outline">
                                    <div className="story-idea-outline-before" style={border1}></div>
                                    <div className="story-idea-inline">
                                        <div className="story-idea-inline-before" style={border3}></div>
                                        <div className="story-idea-title">
                                            <div className="story-idea-title-text">Lorem ipsum dolor sit amet, consectetur</div>
                                            {wid <= 1080
                                            ?
                                                <div className="story-idea-title-cross" onClick={onRemoveContent}>
                                                    <img src={CrossImage} />
                                                </div>
                                            : 
                                                <></>
                                            }
                                        </div>
                                        <div className="story-idea-content">
                                            <div className="story-idea-paragraphy">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                Morbi venenatis sapien ac ligula rutrum sollicitudin. 
                                                Aliquam facilisis velit non libero bibendum cursus. 
                                                Suspendisse turpis tortor, molestie at magna in, blandit rutrum ante. 
                                            </div>
                                            <div className="story-idea-paragraphy">
                                                Vestibulum pretium lectus libero, interdum hendrerit nulla laoreet vel. 
                                                Nam fermentum erat vel libero sodales, eget facilisis erat tempor. 
                                            </div>
                                            <div className="story-idea-paragraphy">
                                                Proin vitae mi eleifend, consectetur nunc sed, scelerisque lorem. 
                                                Vestibulum lobortis augue et ligula ultrices vehicula. 
                                                Ut luctus lacus nec nibh lacinia, eu consequat ligula pellentesque.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="story-idea-outline-after" style={border2}></div>
                                </div>
                            </div>
                        :   
                            <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;