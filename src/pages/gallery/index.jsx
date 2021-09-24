import './styles.less';
import { useScrollToTop } from 'react-router-scroll-to-top';

const GalleryPage = () => {
  useScrollToTop();
  const boxArray = Array.from({ length: 62 }, (v, i) => i);
  return (
    <div className="page-container gallery-page">
      <div className="page-content">
        <div className="openSea-btn">
          <a
            href="https://opensea.io/collection/10000moviesaboutsam"
            target="_blank"
          >
            Go to OpenSea
          </a>
          <h2>Sample Movies about Sam.</h2>
        </div>
        <div className="gallery-list-box">
          {boxArray.map((item) => (
            <div className="gallery-ele" key={item}>
              <div className="ele-img">
                <img
                  src={`https://10000moviesaboutsam.com/nft/${item + 1}.png`}
                />
              </div>
              <div className="ele-txt">Script&nbsp;&nbsp;#???</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
