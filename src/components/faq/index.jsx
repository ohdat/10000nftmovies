import React, { useState } from 'react';
import './styles.less';

const faqData = [
  {
    title: 'What is an NFT?',
    desc: "<p>NFT's, or Non Fungible Tokens, are unique digital assets that live on the Ethereum blockchain.</p><p>Although NFT's can be anything from digital monkey drawings to animal GIFs, Tweets, videos, movies or text, NFT's cannot be interchanged and cannot be duplicated.</p><p>When you purchase an NFT work, you buy a unique contract representing a digital relationship with the NFT creator. Think of digital tokens as ownership certificates that can be bought and sold like any other property.</p>",
    key: 'q1',
  },
  {
    title: 'What is an NFT wallet?',
    desc: "A wallet is an essential tool if you want to start collecting NFT's as it provides private keys or passwords that allow a holder to access funds and assets stored on the blockchain. ",
    key: 'q2',
  },
  {
    title: 'How can I get on the whitelist?',
    desc: 'Join our discord community for more details.',
    key: 'q3',
  },
  {
    title: 'What currencies can I use to mint a Sam Movie?',
    desc: "<p>To purchase a Sam Movie, you will need to use ETH or Ethereum to pay for your token.</p><p>Ethereum makes it possible for NFT's to work as transaction history and token metadata is publicly verifiable, and so it is simple to prove ownership history. In addition, once a transaction is confirmed, it's nearly impossible to manipulate that data to steal ownership.</p>",
    key: 'q4',
  },
];

const FaqSection = (props) => {
  const { title, desc } = props;
  const [hidden, setHidden] = useState(false);
  const toggle = () => {
    setHidden(!hidden);
  };
  return (
    <div className="faq-ele" onClick={() => toggle()}>
      <div className="faq-title">
        <div className="title-txt">{title}</div>
        <div className="drop-btn">
          <img src={require('../../assets/images/dropDown.png')} />
        </div>
      </div>
      {hidden ? (
        <div className="faq-desc" dangerouslySetInnerHTML={{ __html: desc }} />
      ) : (
        ''
      )}
    </div>
  );
};

const FaqComponent = () => {
  return (
    <div className="faq-wrapper box-content" id="faq">
      <div className="faq-box">
        <div className="wrapper-title">FAQ</div>
        <div className="wrapper-content">
          <div className="faq-content">
            {faqData.map((item) => (
              <FaqSection
                key={item.key}
                desc={item.desc}
                title={item.title}
              ></FaqSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
