import './Counting.scss';
import Header from "../../../components/Header/Header";
import BoxImage from '../../../assets/images/mint/lootbox close.png';
import LionImage from '../../../assets/images/lion.png';
import MetamaskImage from '../../../assets/images/metamask.png';

const Counting = ({toggle, setToggle, changeState}) => {

    const onChangeState = () => {
        changeState(1);
    }
    return (
        <div className="counting">
            <div className="counting-container">
                <Header toggle={toggle} setToggle={setToggle} />
                <div className="counting-content">
                    <div className="mint-box">
                        <img src={BoxImage} />
                    </div>
                    <div className="phase-box">
                        <div className="phase-title">Og phase</div>
                        <div className="phase-content">
                            <div className="phase-description">
                                <div className="phase-description-paragraph">
                                    The first phase of the sale will be reserved for OGs.
                                </div>
                                <div className="phase-description-paragraph">
                                    Mint begins on 1 May 2022 @ 1:00pm GMT, and will run for 20 hours.
                                </div>
                                <div className="phase-description-paragraph">
                                    Approximately 3000 Wunders will be available for mint at 0.08 ETH.
                                </div>
                            </div>
                            <div className="phase-counting">
                                <div className="phase-eth-price">0.08 ETH</div>
                                <div className="phase-nft-count">888 / 6000</div>
                                <div className="phase-counting-box">
                                    <div className="phase-lion-image">
                                        <img src={LionImage} />
                                    </div>
                                    <div className="phase-text">
                                        <div className="phase-timer">
                                            <div className="phase-timer-begin">Sale Begins In...</div>
                                            <div className="phase-date-timer">00:00:00:00</div>
                                        </div>
                                        <div className="phase-connect-wallet" onClick={onChangeState}>
                                            <img src={MetamaskImage} />
                                            <div className="phase-connect-wallet-text">Connect to metamask</div>
                                        </div>
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

export default Counting;