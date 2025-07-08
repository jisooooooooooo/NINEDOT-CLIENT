import { useState } from 'react';

import {
  surveyWrapper,
  surveyContainer,
  surveyTitle,
} from '@/page/signup/component/Survey/Survey.css';
import SurveyItem from '@/page/signup/component/SurveyItem/SurveyItem';
import { questionList } from '@/page/signup/component/Survey/data';

export const Survey = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleSelect = (questionId: number, optionId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  return (
    <div className={surveyWrapper}>
      {questionList.map((question) => (
        <div key={question.id} className={surveyContainer}>
          <p className={surveyTitle}>{question.content}</p>
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
