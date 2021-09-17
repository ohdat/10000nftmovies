import { NavLink } from 'umi';
import './styles.less';

const GalleryComponent = () => {
  return (
    <div className="gallery-wrapper" id="gallery">
      <div className="gallery-box box-content">
        <div className="wrapper-title">NFT Examples:</div>
        <div className="gallery-list">
          <div className="img-item">
            <img src={require('../../assets/images/gallery/1-1.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/2-3.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/2-14.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/2-5.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/2-29.png')} />
          </div>
          <div className="img-item">
            <img src={require('../../assets/images/gallery/2-32.png')} />
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
