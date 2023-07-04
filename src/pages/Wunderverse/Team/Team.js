import './Team.scss';
import { useState } from 'react';
import TwitterBlack from '../../../assets/images/twitter-black.png';

const imageCount = 4;
const images = require.context('../../../assets/images/team', true);
const members = [];

const backs = [
    'linear-gradient(180deg, #B7CDFB 0%, #A58283 100%)',
    'linear-gradient(180deg, #FDE7B8 0%, #9AFBD7 100%)',
    'linear-gradient(180deg, #FFB9B7 0%, #FFF4A0 100%)',
    'linear-gradient(180deg, #CDB9FF 0%, #A1FDF9 100%)',
    'linear-gradient(180deg, #CFFEB7 0%, #FDDAA1 100%)',
    'linear-gradient(180deg, #B8CFFF 0%, #BEA1FF 100%)',
    'linear-gradient(180deg, #FCB7F8 0%, #A2B5FE 100%)',
    'linear-gradient(180deg, #BCFEF5 0%, #FDC4A3 100%)'
]

const teams = [
    {
        name: 'Kent',
        pos: 'Cofounder',
        id: '@kentxteo',
        text: 'lorem ipsum'
    },
    {
        name: 'Xael',
        pos: 'Cofounder',
        id: '@xaeltan',
        text: 'lorem ipsum'
    },
    {
        name: 'Auph',
        pos: 'Cofounder',
        id: '@auphx',
        text: 'From esports to tech to jpegs. Now building the metaverse of tomorrow.'
    },
    {
        name: 'Team member',
        pos: 'Community Manager',
        id: '@xxx',
        text: 'lorem ipsum'
    },
]

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${i}-1.png`);
    members.push({
        image: image,
        background: backs[i - 1],
        name: teams[i-1].name,
        text: teams[i-1].text,
        id: teams[i-1].id,
        pos: teams[i-1].pos,
    });
}

const Team = ({wid, toggle}) => {

    const [isShow, setContent] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [teamPos, setTeamPos] = useState('');
    const [teamText, setTeamText] = useState('');
    const [teamID, setTeamID] = useState('');

    const onRemoveContent = () => {
        setContent(false)
    }

    const onAddContent = (e, index) => {
        const team = members[index];
        setTeamID(team.id);
        setTeamName(team.name);
        setTeamPos(team.pos);
        setTeamText(team.text);
        setContent(true)
    }

    return (
        <div className="team">
            <div className="team-title">
                Meet the Wunderous team
            </div>
            <div className="team-description">
                We believe the world of today is a step towards the metaverse of tomorrow.
            The core team is based in Singapore and comprise of members with backgrounds in retail, crypto, technology and esports.
            </div>
            <div className="team-cards">
            {members.map ( (ele, key) => 
                <div 
                    className="team-card" 
                    key={key} 
                    style={{ background: ele.background }}
                    onMouseLeave={e => onRemoveContent(e,key)}
                    onMouseOver={e => onAddContent(e, key)}
                    // onMouseMove={onAddContent}
                >
                    <div className="team-card-inline">
                        <div className="team-avatar"
                            style={{
                                // background: `url(${ele.image})`,
                                // backgroundSize: '100% auto',
                                // transform: 'rotate(180deg)'

                            }}
                        >
                            <img src={ele.image} alt="team member avatar" />
                        </div>
                    </div>
                </div>
            )}
            </div>
            {isShow
                ?
                    <div className="team-role">
                        <div className="team-role-pos">{teamName} - <small>{teamPos}</small></div>
                        <div className="team-role-contact">
                            <img src={TwitterBlack} alt="twitter icon" />
                            <div className="team-role-contact-address"> {teamID}</div>
                        </div>
                        <div className="team-role-description">{teamText}</div>
                    </div>
                :   
                    <></>
            }
        </div>
    )
}

export default Team;
