import './Introduction.scss';
import MobileImage from '../../../assets/images/mobile background.png';

const Introduction = ({wid, toggle}) => {
    return (
        <div className="introduction">
            <div className="introduction-title">
               Enter the Wunderverse
            </div>
            <div className="introduction-description">
                <p>
                    Wunder is the world’s first commerce gaming platform. Our mission is to connect people 
        & brands through social interactions, eventually in the metaverse.
                </p>
                <p>
                   We started as creators of creative retail experiences, such as concepts like Artbox Singapore and Makers’ Market. 
        We have seen how people can come together in a way that connects and creates joyful memories. 
                </p>
                <p>
                    We thus envision a thriving “commerce gaming” community where customers, brands, content creators and partners are harmoniously part of a shared experience. 
        Even though interactions between members of a marketplace community are fundamentally commercial, 
        we think the magic happens when created and imaginative experiences - where people want to spend time at - is at the centrepiece, rather than transactions.
                </p>
            </div>
            <div className="introduction-image">
                <img src={MobileImage} />
            </div>
        </div>
    )
}

export default Introduction;
