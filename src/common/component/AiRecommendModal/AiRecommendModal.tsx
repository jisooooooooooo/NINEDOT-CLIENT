import { useState } from 'react';

import * as styles from './AiRecommendModal.css';
import Button from '../Button/Button';

import AiModalBase from '@/common/component/AiModalBase/AiModalBase';
import { IcCheckboxDefault, IcCheckboxChecked } from '@/assets/svg';

interface AiRecommendModalProps {
  onClose: () => void;
  onSubmit: (goals: { title: string }[]) => void;
  values: readonly string[];
  options?: readonly string[];
}

const TEXT = {
  title: 'AI가 추천해 준 할 일이에요!',
  subtitlePre: '앞으로 ',
  subtitleSuf: '를 더 선택할 수 있어요',
  confirmButton: '내 만다라트에 넣기',
} as const;

const AiRecommendModal = ({ onClose, onSubmit, values, options }: AiRecommendModalProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const emptyCount = values.filter((v) => v.trim() === '').length;
  const remainingSelections = emptyCount - selectedOptions.length;

  const displayOptions = Array.isArray(options) && options.length > 0 ? options : [];

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    );
  };

  const handleClick = () => {
    const titles = selectedOptions.slice(0, emptyCount);
    const goals = titles.map((title) => ({ title }));
    onSubmit(goals);
    onClose();
  };

  return (
    <AiModalBase
      onClose={onClose}
      title={TEXT.title}
      description={
        <>
          {TEXT.subtitlePre}
          <span className={styles.highlight}>{remainingSelections}개</span>
          {TEXT.subtitleSuf}
        </>
      }
      titleId="modal-title"
      footer={<Button text={TEXT.confirmButton} onClick={handleClick} />}
    >
      <div className={styles.listWrapper}>
        {displayOptions.map((option) => {
          const isChecked = selectedOptions.includes(option);
          const isDisabled = !isChecked && selectedOptions.length >= emptyCount;
          const CheckIcon = isChecked ? IcCheckboxChecked : IcCheckboxDefault;

          return (
            <div
              key={option}
              className={`${styles.listItem} ${isDisabled ? styles.listItemDisabled : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => {
                if (!isDisabled) {
                  toggleOption(option);
                }
              }}
            >
              <CheckIcon className={styles.checkboxIcon} />
              <span>{option}</span>
            </div>
          );
        })}
      </div>
    </AiModalBase>
  );
};

export default AiRecommendModal;
