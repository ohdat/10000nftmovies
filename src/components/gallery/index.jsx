import { NavLink } from 'umi';
import './styles.less';

const GalleryComponent = (props) => {
  const { isMobile } = props;
  return (
    <div className="gallery-wrapper" id="gallery">
      <div className="gallery-box box-content">
        <div className="wrapper-title">NFT Examples:</div>
        <div className="gallery-list">
          <div className="img-item">
            <img src={require('../../assets/images/gallery/1-2.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/1-6.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/2-12.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/2-17.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/2-18.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/4-2.png')} />
          </div>
        </div>
        <div className="gallery-footer">
          <NavLink className="gallery-link" to="/gallery">
            More Movies about Sam.
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
