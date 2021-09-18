import { connect } from 'umi';
import './styles.less';

const roadmapData = [
  {
    desc: '10,000 Movies about Sam will be minted at 0.02ETH.',
    key: '1',
  },
  {
    desc: '10 additional Movies about Sam NFT’s will be airdropped to the biggest creative contributors in the Discord.',
    key: '2',
  },
  {
    desc: 'We will work with the community to produce taglines, posters, characters and scripts of the film titles. ',
    key: '3',
  },
  {
    desc: 'The community will begin voting on which movie should go into production. ',
    key: '4',
  },
  {
    desc: 'We will produce a 3 minute short film of the chosen movie, with the potential for the film to be adapted into a feature length movie.',
    key: '5',
  },
];

const RoadMapComponent = () => {
  return (
    <div className="roadmap-wrapper box-content" id="roadmap">
      <div className="roadmap-box">
        <div className="wrapper-title">ROADMAP</div>
        <div className="wrapper-content">
          {roadmapData.map((item) => (
            <div key={item.key} className="road-ele">
              <span>{item.key}.</span>&nbsp;
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMapComponent;
