import { IStratagemWithTime } from 'constants/stratagems-sequences';
import up from '../../../assets/icons/arrows/up.svg';
import left from '../../../assets/icons/arrows/left.svg';
import down from '../../../assets/icons/arrows/down.svg';
import right from '../../../assets/icons/arrows/right.svg';
import './SequenceNotification.css';

const arrowToIcon: { [key: string]: string } = {
  W: up,
  A: left,
  S: down,
  D: right,
};

interface SequenceNotificationProps {
  sequence: IStratagemWithTime;
}

const SequenceNotification = ({ sequence }: SequenceNotificationProps) => {
  let sequenceArrows = sequence.sequence;
  let longerThanMax = false;
  if (sequenceArrows.length > 7) {
    sequenceArrows = sequenceArrows.slice(0, 7);
    longerThanMax = true;
  }

  const icons = sequenceArrows.split('').map((arrow) => arrowToIcon[arrow]);
  return (
    <div className='notification-container'>
      <div
        className={`notification ${
          sequence.name === 'Unrecognized' && 'unrecognized'
        }`}
      >
        <img src={sequence.icon} alt={sequence.name} />
        <div className='arrows'>
          {icons.map((icon, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <img key={index} src={icon} alt='arrow' />
          ))}
          {longerThanMax && <span>...</span>}
        </div>
      </div>
      <div className='notification-time'>
        {sequence.elapsedTime && (
          <>
            <p>{sequence.elapsedTime ? `${sequence.elapsedTime}` : ''}</p>
            <p className='ms'>ms</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SequenceNotification;
