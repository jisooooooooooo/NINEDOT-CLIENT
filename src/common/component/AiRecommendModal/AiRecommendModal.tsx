import { useState } from 'react';

import * as styles from './AiRecommendModal.css';
import Button from '../Button/Button';

import AiModalBase from '@/common/component/AiModalBase/AiModalBase';
import { usePostAiRecommendToCoreGoals } from '@/api/domain/upperTodo/hook';
import { IcCheckboxDefault, IcCheckboxChecked } from '@/assets/svg';

interface AiRecommendModalProps {
  onClose: () => void;
  onSubmit: (aiResponseData: { id: number; position: number; title: string }[]) => void;
  values: string[];
  options?: string[];
  mandalartId?: number;
}

const AiRecommendModal = ({
  onClose,
  onSubmit,
  values,
  options,
  mandalartId = 0,
}: AiRecommendModalProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const postRecommend = usePostAiRecommendToCoreGoals();

  const emptyCount = values.filter((v) => v.trim() === '').length;
  const remainingSelections = emptyCount - selectedOptions.length;

  const displayOptions = Array.isArray(options) && options.length > 0 ? options : [];

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option],
    );
  };

  const handleClick = () => {
    const goals = selectedOptions.slice(0, emptyCount);

    if (mandalartId && mandalartId > 0) {
      postRecommend.mutate(
        { mandalartId, goals },
        {
          onSuccess: (response) => {
            const aiResponseData = response.coreGoals;
            onSubmit(aiResponseData);
            onClose();
          },
        },
      );
    } else {
      const mockAiResponseData = goals.map((title, index) => ({
        id: Date.now() + index,
        position: index + 1,
        title,
      }));
      onSubmit(mockAiResponseData);
      onClose();
    }
  };

  return (
    <AiModalBase
      onClose={onClose}
      title="AI가 추천해 준 할 일이에요!"
      description={
        <>
          앞으로 <span className={styles.highlight}>{remainingSelections}개</span>를 더 선택할 수
          있어요
        </>
      }
      titleId="modal-title"
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
      <div className={styles.buttonWrapper}>
        <Button text="내 만다라트에 넣기" onClick={handleClick} />
      </div>
    </AiModalBase>
  );
};

export default AiRecommendModal;
