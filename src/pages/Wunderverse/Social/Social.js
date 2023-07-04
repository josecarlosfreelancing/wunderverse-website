import './Social.scss';

const imageCount = 4;
const images = require.context('../../../assets/images/wunder', true);
const socials = [];

const titles = [
    'Mint', 'Wunder', 'Twitter', 'Discord'
]

const links = [
    '/mint',
    'https://play.wunder.gg/',
    'https://twitter.com/wunder_game',
    'https://discord.gg/wunderverse'
]

const descriptions = [
    'Get your Wunderer!',
    'Check out our game!',
    'Tweet with us!',
    'Join the community!',
]

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${i}.png`);
    socials.push({
        image: image,
        title: titles[i - 1],
        description: descriptions[i - 1],
        link: links[i - 1]
    });
}

const Social = ({wid, toggle}) => {
    return (
        <div className="social">
            <div className="social-title">
                Come join us on social!
            </div>
            <div className="social-description">
                Follow us on social media - you wouldn't wanna miss our events and activities!
            </div>
            <div className="social-cards">
            {socials.map ( (ele, key) => 
                <a href={ele.link} target="_blank"
                        key={key} >
                    <div className="social-card" 
                        style={{ background: ele.background }}
                    >
                        <div className="social-avatar">
                            <img src={ ele.image } />
                        </div>
                        <div className="social-card-content">
                            <div className="social-card-title">{ele.title}</div>
                            <div className="social-card-description">{ele.description}</div>
                        </div>
                    </div>
                </a>
            )}
            </div>
        </div>
    )
}

export default Social;
