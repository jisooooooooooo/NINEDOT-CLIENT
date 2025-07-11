import {
  datePickerContainer,
  datePickerContent,
  dateText,
  iconButton,
  yesterdayIcon,
  tomorrowIcon,
  iconActive,
  iconInactive,
} from './DatePicker.css';

import { IcYesterday, IcTomorrow } from '@/assets/svg';
import { formatDateDot } from '@/common/util/format';

interface DatePickerProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
  hasPrev: boolean;
  hasNext: boolean;
  className?: string;
}

const DatePicker = ({
  currentDate,
  onDateChange,
  hasPrev,
  hasNext,
  className,
}: DatePickerProps) => {
  const handleYesterdayClick = () => {
    if (!hasPrev) {
      return;
    }
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    onDateChange(yesterday);
  };

  const handleTomorrowClick = () => {
    if (!hasNext) {
      return;
    }
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    onDateChange(tomorrow);
  };

  return (
    <>
      <div className={`${datePickerContainer}${className ? ` ${className}` : ''}`}>
        <div className={datePickerContent}>
          <button
            className={iconButton}
            onClick={handleYesterdayClick}
            aria-label=" 어제 날짜"
            disabled={!hasPrev}
            type="button"
          >
            <IcYesterday className={`${yesterdayIcon} ${hasPrev ? iconActive : iconInactive}`} />
          </button>
          <span className={dateText}>{formatDateDot(currentDate)}</span>
          <button
            className={iconButton}
            onClick={handleTomorrowClick}
            aria-label="내일 날짜"
            disabled={!hasNext}
            type="button"
          >
            <IcTomorrow className={`${tomorrowIcon} ${hasNext ? iconActive : iconInactive}`} />
          </button>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
