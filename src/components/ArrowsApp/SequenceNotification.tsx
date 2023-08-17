import { IStratagem } from 'constants/stratagems-sequences';
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
  sequence: IStratagem;
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
    <div
      className={`notification ${
        sequence.name === 'Unrecognized' && 'unrecognized'
      }`}
    >
      <img src={sequence.icon} alt={sequence.name} />
      <div className='notification-arrows'>
        {icons.map((icon) => (
          <img src={icon} alt='arrow' />
        ))}
        {longerThanMax && <span>...</span>}
      </div>
    </div>
  );
};

export default SequenceNotification;
