import './styles.less';

const SpecComponent = () => {
  return (
    <div className="spec-wrapper">
      <div className="spec-container box-content">
        <div className="spec-head">
          <h1>10000 MOVIES ABOUT SAM.</h1>
        </div>
        <div className="spec-btn">
          <div className="btn-text">COMMING SOON</div>
        </div>
        <div className="spec-text spec-intro">
          <p>Whitelist: 7am EST 24st Sept. 0.03ETH each</p>
          <p>General Entry: 9am EST 24st Sept. 0.03ETH each</p>
        </div>
        <div className="spec-text info-text">
          <p>
            This thing, I used to call it a glass. You may call it silicon
            dioxide. Call it transparent. Call it unclean. Call it fragile. Call
            it the resting place of small flying insects. I woke up one day,
            went out to work, came back and drank water with it. Then I began to
            call it Sam. Sam is me, Sam is you. Let's make 10,000 movies about
            Sam.
          </p>
          <div className="location-footer">
            <p>-- One of this project’s initiators</p>
          </div>
        </div>
        <div className="spec-text welcome-text">
          <p className="welcome-header">Welcome to Samverse!</p>
          <p>
            Each movie title has been procedurally generated from a word bank of
            2173 words and phrases. Scripts, visuals, sounds, and even{' '}
            <strong>Sam</strong> are intentionally left blank for the community
            to create further upon. The project initiators promise to take one
            community-led short movie through to release on the big screen. It’s
            up to the community how far this project can grow from here. Come
            join the community in fleshing out the Samverse!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecComponent;
