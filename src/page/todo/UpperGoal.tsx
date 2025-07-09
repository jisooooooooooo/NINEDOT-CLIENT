import Mandalart from '@/common/component/Mandalart/Mandalart';

const UpperGoal = () => {
  return (
    <div>
      <h2>상위 목표 설정</h2>
      <Mandalart size={'TODO_SUB'} />
      <Mandalart size={'TODO_MAIN'} />
      <Mandalart size={'TODO_EDIT'} />
      <Mandalart size={'MY_MANDAL'} />
      {/* TODO: 상위 목표 입력 폼 */}
    </div>
  );
};

export default UpperGoal;
