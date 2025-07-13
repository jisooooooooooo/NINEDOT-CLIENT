import { useState } from 'react';

import * as styles from './AiRecommendModal.css';
import MandalButton from '../Button/Button';

import { IcModalDelete, IcCheckboxDefault, IcCheckboxChecked } from '@/assets/svg';

interface AiRecommendModalProps {
  onClose: () => void;
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

const MAX_SELECTIONS = 8;

const AiRecommendModal = ({ onClose }: AiRecommendModalProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const remainingSelections = MAX_SELECTIONS - selectedOptions.length;

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
          앞으로 <span className={styles.highlight}>{remainingSelections}</span>개를 더 선택할 수
          있어요
        </p>
        <div className={styles.listWrapper}>
          {options
            .filter(
              (option) =>
                selectedOptions.includes(option) || selectedOptions.length < MAX_SELECTIONS,
            )
            .map((option) => {
              const isChecked = selectedOptions.includes(option);
              return (
                <div
                  key={option}
                  className={styles.listItem}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleOption(option)}
                >
                  {isChecked ? (
                    <IcCheckboxChecked className={styles.checkboxIcon} />
                  ) : (
                    <IcCheckboxDefault className={styles.checkboxIcon} />
                  )}
                  <span>{option}</span>
                </div>
              );
            })}
        </div>
        <div className={styles.buttonWrapper}>
          <MandalButton text="내 만다라트에 넣기" />
        </div>
      </div>
    </div>
  );
};

export default AiRecommendModal;
