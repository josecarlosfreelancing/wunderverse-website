import './Minting.scss';
import Header from "../../../components/Header/Header";
import BoxMintingImage from '../../../assets/images/mint/lootbox tap.png';
import LionImage from '../../../assets/images/mint/lion sleeping 2.png';

const Minting = ({toggle, setToggle, changeState}) => {
    
    const onChangeState = () => {
        changeState(2);
    }
    return (
      
        <div className="minting">
            <div className="minting-container">
                <Header toggle={toggle} setToggle={setToggle} />
                <div className="minting-content">
                    <div className="minting-box">
                        <img src={BoxMintingImage} />
                    </div>
                    <div className="minting-phase-box">
                        <div className="minting-phase-title">Og phase</div>
                        <div className="minting-phase-content">
                            <div className="minting-phase-description">
                                <div className="minting-phase-description-paragraph">
                                    The first phase of the sale will be reserved for OGs.
                                </div>
                                <div className="minting-phase-description-paragraph">
                                    Mint begins on 1 May 2022 @ 1:00pm GMT, and will run for 20 hours.
                                </div>
                                <div className="minting-phase-description-paragraph">
                                    Approximately 3000 Wunders will be available for mint at 0.08 ETH.
                                </div>
                            </div>
                            <div className="minting-counting">
                                <div className="minting-eth-price">0.08 ETH</div>
                                <div className="minting-nft-count">888 / 6000</div>
                                <div className="minting-counting-box">
                                    <div className="minting-lion-image">
                                        <img src={LionImage} />
                                    </div>
                                    <div className="minting-now" onClick={onChangeState}>
                                       Mint Now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Minting;