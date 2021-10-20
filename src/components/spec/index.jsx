import React, { useState } from 'react';
import PurchaseModal from './purchaseModal';
import './styles.less';

const SpecComponent = () => {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const handleShowPurchaseModal = () => {
    setShowPurchaseModal(true);
  };
  const handleClosePurchaseModal = () => {
    setShowPurchaseModal(false);
  };

  return (
    <div className="spec-wrapper box-content" id="spec">
      <div className="spec-container">
        <div className="spec-head">
          <h1>10000 MOVIES ABOUT SAM.</h1>
        </div>
        <div className="spec-btn">
          {/* <div className="btn-text" onClick={() => handleShowPurchaseModal()}>
            MINT NOW
          </div> */}
          <a
            className="btn-text"
            href="https://discord.gg/f6Fgys3kQk"
            target="_blank"
          >
            Join Discord
          </a>
        </div>

        <div className="spec-text spec-intro">
          <p>Whitelist: 7am EST 24th Sept. 0.02ETH each</p>
          <p>General Entry: 9am EST 26th Sept. 0.02ETH each</p>
          <p>Content Reveal: 7am EST 27th Sept.</p>
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
          <p className="welcome-header">Welcome to the Samverse.</p>
          <p>
            10,000 Movies About Sam is an NFT project from the creative minds
            behind the award winning animated feature{' '}
            <a
              href="https://www.youtube.com/watch?v=uf3ALGKgpGU"
              target="_blank"
            >
              Next-Gen.
            </a>
          </p>
          <p>
            We are releasing 10,000 randomly generated movie titles in search
            for our next big project.
          </p>
          <p>
            Minting one of the movie titles will give you the opportunity to
            create your own cinematic universe around the title. From the
            plotline, characters, poster and script - this is a creative
            endeavor with endless opportunities.
          </p>
          <p>
            The community will then vote on which title adaption we should turn
            into a short film, which will be entered into film festivals across
            the world.
          </p>
          <p>
            Each movie title has been procedurally generated from the same word
            bank. Scripts, visuals, sounds, and even <strong>Sam</strong> are
            intentionally left blank for the community to create further upon.
            The project initiators promise to take one community-led short movie
            through to release on the big screen. It’s up to the community how
            far this project can grow from here. Come join the community in
            fleshing out the Samverse.
          </p>
        </div>
        <div className="join-btn">
          <a
            className="contract-btn"
            href="https://discord.gg/x9T2ydMQ6Z"
            target="_blank"
          >
            Join our Discord
          </a>
        </div>
      </div>
      <PurchaseModal
        visible={showPurchaseModal}
        handleClose={() => handleClosePurchaseModal()}
      />
    </div>
  );
};

export default SpecComponent;
