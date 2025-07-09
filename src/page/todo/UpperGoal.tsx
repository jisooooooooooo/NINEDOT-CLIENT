import Mandalart from '@/common/component/Mandalart/Mandalart';
import * as styles from './Todo.css';

const UpperGoal = () => {
  return (
    <div>
      <h2>상위 목표 설정</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Mandalart type="TODO_SUB" />
        <Mandalart type="TODO_MAIN" />
        <Mandalart type="TODO_EDIT" />
        <Mandalart type="MY_MANDAL" />
      </div>
      {/* TODO: 상위 목표 입력 폼 */}
    </div>
  );
};

export default UpperGoal;
