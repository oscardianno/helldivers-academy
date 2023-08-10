import up from '../../assets/icons/up.svg';
import left from '../../assets/icons/left.svg';
import down from '../../assets/icons/down.svg';
import right from '../../assets/icons/right.svg';

const PreloadImages = () => (
  <div style={{ display: 'none' }}>
    <img src={up} alt='up' />
    <img src={left} alt='left' />
    <img src={down} alt='down' />
    <img src={right} alt='right' />
  </div>
);

export default PreloadImages;
