import './Partnership.scss';
import { useEffect, useRef, useState } from 'react';

const imageCount = 100;
const images = require.context('../../../assets/images/partnership', true);
const members = [];

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${(i % 16) + 1}.png`);
    members.push({
        image: image,
        name: 'Member', 
        pos: 0,
        // index: parseInt((i - 1) / 4)
    });
}

const Partnership = ({width}) => {

    const cardsRef = useRef(null);
    const timeoutRef = useRef(null);

    // const [index, setIndex] = useState(0);
    const [cards, setCards] = useState(members)

    const resetTimeout = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                let newCards = [...cards]
                for(let i in cards) {
                    if(width <= 1080) {
                        newCards[i].pos = 
                            (parseInt(i / 4) + cards[i].pos) < 0 
                                ? cards[i].pos + 24
                                : cards[i].pos - 1

                    }
                    else {

                        newCards[i].pos = 
                            (parseInt(i / 2) + cards[i].pos) < 0 
                                ? cards[i].pos + 49
                                : cards[i].pos - 1
                    }
                }

                setCards(newCards)
            },
            2500
        )
        return () => {
            resetTimeout();
        };
    }, [cards, width])

    return (
        <div className="partnership">
            <div className="partnership-title">
                Our Brands & Partners
            </div>
            <div className="partnership-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi venenatis sapien ac ligula rutrum sollicitudin. 
                Aliquam facilisis velit non libero bibendum cursus. 
                Suspendisse turpis tortor, molestie at magna in, blandit rutrum ante. 
            </div>
            <div 
                className="partnership-cards" 
                ref={cardsRef}
                
            >
                {members.map ( (ele, key) => 
                <div 
                    className="partnership-card" 
                    key={key}
                    style={{ 
                        transform: 
                            width <= 1080
                            ? `translate3d(0, ${ele.pos * 100}%, 0)`
                            : `translate3d(${ele.pos * 100}%, 0, 0)`,
                        transition: 
                            width <= 1080 
                            ?
                                (
                                    (ele.pos + parseInt(key / 4)) != (100 / 4 - 2)
                                        ? 'transform 2500ms linear 0s'
                                        : 'none'
                                )
                            :   (
                                    (ele.pos + parseInt(key / 2)) != (100 / 2 - 2)
                                        ? 'transform 2500ms linear 0s'
                                        : 'none'
                            )

                        // display: (ele.pos + ele.index) != 0
                        //         ? 'flex'
                        //         : 'none'
                    }}
                >
                    <div className="partnership-card-avatar">
                        <img src={ele.image} />
                    </div>
                    <div className="partnership-card-description">
                        {key}Bored Ape Yacht Club
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Partnership;
