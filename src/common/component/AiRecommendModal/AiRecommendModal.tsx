import { useState } from 'react';

import * as styles from './AiRecommendModal.css';
import Button from '../Button/Button';

import { IcModalDelete, IcCheckboxDefault, IcCheckboxChecked } from '@/assets/svg';

interface AiRecommendModalProps {
  onClose: () => void;
  onSubmit: (selected: string[]) => void;
  values: string[];
}

const options = [
  '와 이거 진짜같은데 와이거 진짜같은데 와 이거 진짜1',
  '와 이거 진짜같은데 와이거 진짜같은데 와 이거 진짜2',
  '와 이거 진짜같은데 와이거 진짜같은데 와 이거 진짜3',
  '와 이거 진짜같은데 와이거 진짜같은데 와 이거 진짜4',
  '와 이거 진짜같은데 와이거 진짜같은데 와 이거 진짜5',
  '와 이거 진짜같은데 와이거 진짜같은데 와 이거 진짜6',
  '와 이거 진짜같은데 와이거 진짜같은데 와 이거 진짜7',
  '와 이거 진짜같은데 와이거 진짜같은데 와 이거 진짜8',
];

const AiRecommendModal = ({ onClose, onSubmit, values }: AiRecommendModalProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const emptyCount = values.filter((v) => v.trim() === '').length;
  const remainingSelections = emptyCount - selectedOptions.length;

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    );
  };

  return (
    <div className={styles.container} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.contentWrapper}>
        <div className={styles.iconWrapper}>
          <IcModalDelete className={styles.closeIcon} onClick={onClose} />
        </div>
        <h2 id="modal-title" className={styles.title}>
          AI가 추천해 준 할 일이에요!
        </h2>
        <p className={styles.subtitle}>
          앞으로 <span className={styles.highlight}>{remainingSelections}개</span>를 더 선택할 수
          있어요
        </p>
        <div className={styles.listWrapper}>
          {options.map((option) => {
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
        <div className={styles.buttonWrapper}>
          <Button
            text="내 만다라트에 넣기"
            onClick={() => {
              onSubmit(selectedOptions);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AiRecommendModal;
