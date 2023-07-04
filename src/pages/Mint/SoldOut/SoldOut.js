import './SoldOut.scss';
import Header from "../../../components/Header/Header";
// import SoldOutImage from '../../components/'
import OpenseaImage from '../../../assets/images/opensea.png';
import LooksImage from '../../../assets/images/looks.png';
import MaskImage from '../../../assets/images/mask.png';
import BoxImage from '../../../assets/images/mint/empty-box.png';
import CoverImage from '../../../assets/images/mint/empty-cover.png';
import SoldOutImage from '../../../assets/images/mint/name.png';

const links = [
    {
        image: OpenseaImage,
        text: 'View on opensea'
    },
    {
        image: LooksImage,
        text: 'View on looksrare',
    },
    {
        image: MaskImage,
        text: 'View on mintable'
    }
]

const SoldOut = ({toggle, setToggle, changeState}) => {
    
    const onChangeState = () => {
        changeState(0);
    }
    return (
        <div className="soldout">
            <div className="soldout-container">
                <Header toggle={toggle} setToggle={setToggle} />
                <div className="soldout-content">
                    <div className="soldout-main-content">
                        <div className="view-links">
                        {links.map( (link, key) => 
                            <div className="view-link" key={key} onClick={onChangeState}>
                                <div className="link-icon">
                                    <img src={link.image} />
                                </div>
                                <div className="link-text">{link.text}</div>
                            </div>
                        )}
                        </div>
                        <div className="boxes">
                            <div className="box-container">
                                <img src={BoxImage} className="empty-box" />
                                <img src={CoverImage} className="empty-cover" />
                                <img src={SoldOutImage} className="soldout-image" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SoldOut;