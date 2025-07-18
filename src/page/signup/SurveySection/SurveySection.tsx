import { useState } from 'react';

import SurveyItem from '@/page/signup/component/SurveyItem/SurveyItem';
import {
  surveyWrapper,
  surveyContainer,
  surveyTitle,
} from '@/page/signup/SurveySection/SurveySection.css';
import { useGetPersona } from '@/api/domain/signup/hook/useGetPersona';

const SurveySection = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const { data, isLoading, isError } = useGetPersona();

  const handleSelect = (questionId: number, optionId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError || !data) {
    return <p>질문을 불러오는 데 실패했어요.</p>;
  }

  return (
    <div className={surveyWrapper}>
      {data.questionList.map((question) => (
        <div key={question.id} className={surveyContainer}>
          <h3 className={surveyTitle}>{question.content}</h3>
          {question.optionList.map((option) => (
            <SurveyItem
              key={option.id}
              item={option}
              isChecked={answers[question.id] === option.id}
              onClick={() => handleSelect(question.id, option.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SurveySection;
