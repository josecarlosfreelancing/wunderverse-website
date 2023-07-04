import './Phase.scss';
import { useState, useEffect, useRef } from 'react';
import Header from "../../../components/Header/Header";
import CurtainImage from '../../../assets/images/mint/curtains.png';
import CurtainMobileImage from '../../../assets/images/mint/curtain-mobile.png';
import Rectangle1Image from '../../../assets/images/mint/Rectangle1.png';
import Rectangle2Image from '../../../assets/images/mint/Rectangle2.png';
import Rectangle3Image from '../../../assets/images/mint/Rectangle3.png';

const imageCount = 9;
const images = require.context('../../../assets/images/team', true);
const members = [];

const backs = [
    'linear-gradient(180deg, #B8D0FF 0%, #BFA0FF 100%)',
    'linear-gradient(180deg, #FDE7B8 0%, #9AFBD7 100%)',
    'linear-gradient(180deg, #CFFFB8 0%, #FFD9A0 100%)',
    'linear-gradient(180deg, #CDB9FF 0%, #A1FDF9 100%)',
    'linear-gradient(180deg, #B8D0FF 0%, #A58181 100%)',
    'linear-gradient(180deg, #FFB8F8 0%, #A0B5FF 100%)',
    'linear-gradient(180deg, #FFB8B8 0%, #FFF6A0 100%)',
    'linear-gradient(180deg, #FEDEB7 0%, #E6FEA0 100%)',
    'linear-gradient(180deg, #FEDEB7 0%, #E6FEA0 100%)',
]

const phases = [{
    title: 'Og phase',
    description: [
        'This first phase of the sale will be reserved for OGs.',
        ' Mint begins on 1 May 2022@ 1:00pm GMT, and will run for 20 hours. ',
        'Approximately 3000 Wunders will be available for mint as 0.08ETH.'
    ]
}, {
    title: 'Mintlist phase',
    description: [
        'The second phase of the sale will be reserved for whitelisted(mintlist).',
        ' Mint begins on 2 May 2022 @ 1:00pm GMT.',
        'Approximately 3000 Wunders will be available for mint as 0.1ETH.'
    ]
}, {
    title: 'Public phase',
    description: [
        'The third phase of the sale will be a public mint for all remaining Wunders.',
        'Mint begins on 2 May 2022 @ 2:00pm GMT.',
        ' Approximately 1000 Wunders will be available for mint at 0.15 ETH.'
    ]
}
]

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${i}-1.png`);
    members.push({
        image: image,
        background: backs[i - 1],
        pos: 0,
    });
}

const Phase = ({width, toggle, setToggle, changeState}) => {
    const cardsRef = useRef(null);
    const timeoutRef = useRef(null);
    const [cards, setCards] = useState(members);

    const resetTimeout = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const onChangeState = () => {
        changeState(3);
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                let newCards = [...cards]
                for(let i in cards) {
                    // if(width <= 1080) {
                    //     newCards[i].pos = 
                    //         (parseInt(i / 4) + cards[i].pos) < 0 
                    //             ? cards[i].pos + 1
                    //             : cards[i].pos - 1

                    // }
                    // else {
                        newCards[i].pos = 
                            (parseInt(i) + cards[i].pos < 0 
                                ? cards[i].pos + 7
                                : cards[i].pos - 1)
                    // }
                }
                setCards(newCards)
            },
            5000
        )
        return () => {
            resetTimeout();
        };
    }, [cards, width])

    return (
        <div className="phase">
            <Header toggle={toggle} setToggle={setToggle} />
            <div className="phase-container">
                <div className="phase-content">
                    <div 
                        className="phase-cards" 
                        ref={cardsRef}
                        
                    >
                        {members.map ( (ele, key) => 
                        <div 
                            className="phase-card" 
                            key={key}
                            style={{ 
                                transform: 
                                    // width <= 1080
                                    // ? `translate3d(0, ${ele.pos * 100}%, 0)`
                                    // : 
                                    `translate3d(${ele.pos * 100}%, 0, 0)`,
                                transition: 
                                    // width <= 1080 
                                    // ?
                                    //     (
                                    //         (ele.pos + parseInt(key / 4)) != (100 / 4 - 2)
                                    //             ? 'transform 2500ms linear 0s'
                                    //             : 'none'
                                    //     )
                                    // :   
                                    (
                                            (ele.pos + key) != 6
                                                ? 'transform 5000ms linear 0s'
                                                : 'none'
                                    )
                            }}
                        >
                            <div className="phase-card-outline"
                                style={{ 
                                    background: ele.background
                                }}
                            >
                                <div className="phase-card-inline">
                                    <div className="phase-card-avatar">
                                        <img src={ele.image} alt="phase card avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div className="rectangle">
                    <img src={Rectangle1Image} />
                </div>
                <div className="rectangle">
                    <img src={Rectangle2Image} />
                </div>
                <div className="rectangle">
                    <img src={Rectangle3Image} />
                </div>
            </div>
            <div className="phase-curtain">
                {width <= 1080 
                ?<img src={CurtainMobileImage} alt="curtain images" />
                :<img src={CurtainImage} alt="curtain images" />
                }
            </div>
            <div className="phase-ground">
                <div className="phase-ground-cards">
                {phases.map((ele, key) => 
                    <div 
                        className="phase-ground-card" 
                        onClick={key ? () => { return; } : onChangeState}
                        key={key}
                    >
                        <div className="phase-ground-card-title">{ele.title}</div>
                        <div className="phase-ground-card-description">
                        {ele.description.map( (e, k) => 
                            <div className="phase-ground-card-paragraph" key={k}>{e}</div>
                        )}
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Phase;