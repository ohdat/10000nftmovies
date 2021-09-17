import { connect } from 'umi';
import './styles.less';

const roadmapData = [
  {
    desc: '10000 Sam Movie titles dropped.',
    key: '1',
  },
  {
    desc: 'Community vote for the first Sam movie to go into production.',
    key: '2',
  },
  {
    desc: 'Production roadmap of the first Sam movie announced.',
    key: '3',
  },
  {
    desc: 'First Sam movie released in cinema! ',
    key: '4',
  },
  {
    desc: 'Continue to be part of the community to grow the Samverse.',
    key: '5',
  },
];

const RoadMapComponent = () => {
  return (
    <div className="roadmap-wrapper">
      <div className="roadmap-box box-content">
        <div className="wrapper-title">ROADMAP</div>
        <div className="wrapper-content">
          {roadmapData.map((item) => (
            <div key={item.key} className="road-ele">
              <span>{item.key}.</span>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMapComponent;
