import Counting from './Counting/Counting';
import Minting from './Minting/Minting';
import SoldOut from './SoldOut/SoldOut';
import Phase from './Phase/Phase';
import { useState, useEffect } from 'react';

const Mint = () => {
    
    const [toggle, setToggle] = useState(false)
    const [mintState, setMintState] = useState(0);
    const [wid, setWidth] = useState(document.documentElement.clientWidth);

    const onResize = async () => {
        await setWidth(document.documentElement.clientWidth);
    }

    const onChangeMintState = (state) => {
        setMintState(state);
    }

    useEffect( () => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    } )

    return (
        <>
            {mintState == 0
            ?
                <Phase width={wid} toggle={toggle} setToggle={setToggle} changeState={e => onChangeMintState(e)} />
            : (
                mintState == 1
                ?
                    <Minting toggle={toggle} setToggle={setToggle} changeState={e => onChangeMintState(e)} />
                :   (
                    mintState == 2
                    ?   
                        <SoldOut toggle={toggle} setToggle={setToggle} changeState={e => onChangeMintState(e)} />
                    :
                    <Counting toggle={toggle} setToggle={setToggle} changeState={e => onChangeMintState(e)} />
                )
            )
        }
        </>
    );
}

export default Mint;