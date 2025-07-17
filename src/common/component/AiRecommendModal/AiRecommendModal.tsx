import { useState } from 'react';

import * as styles from './AiRecommendModal.css';
import Button from '../Button/Button';

import { usePostAiRecommendToCoreGoals } from '@/api/domain/upperTodo/hook';
import { IcModalDelete, IcCheckboxDefault, IcCheckboxChecked } from '@/assets/svg';

interface AiRecommendModalProps {
  onClose: () => void;
  onSubmit: (aiResponseData: { id: number; position: number; title: string }[]) => void;
  values: string[];
  options: string[];
  mandalartId: number;
}

const AiRecommendModal = ({
  onClose,
  onSubmit,
  values,
  options,
  mandalartId,
}: AiRecommendModalProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const postRecommend = usePostAiRecommendToCoreGoals();

  const emptyCount = values.filter((v) => v.trim() === '').length;
  const remainingSelections = emptyCount - selectedOptions.length;

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    );
  };

  const handleClick = () => {
    const goals = selectedOptions.slice(0, emptyCount);

    postRecommend.mutate(
      { mandalartId, goals },
      {
        onSuccess: (response) => {
          const aiResponseData = response.coreGoals;
          onSubmit(aiResponseData);
          onClose();
        },
        onError: (error) => {
          console.error('AI 추천 목표 저장 실패:', error);
        },
      },
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
          {options?.map((option) => {
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
          <Button text="내 만다라트에 넣기" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default AiRecommendModal;
