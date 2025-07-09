import { useState } from 'react';

import SignupTextField from '@/common/component/SignupTextField';
import { MOCK_SIGNUP_DATA } from '@/common/component/SignupTextField/SignupTextField.mock';

const Home = () => {
  // mock 데이터로 초기값 설정 (구글 계정에서 받아온 것처럼)
  const [name, setName] = useState(MOCK_SIGNUP_DATA.name);
  const [email, setEmail] = useState(MOCK_SIGNUP_DATA.email);
  const [birth, setBirth] = useState(MOCK_SIGNUP_DATA.birth);
  const [job, setJob] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '52.2rem',
        margin: '2rem auto',
      }}
    >
      <SignupTextField
        type="name"
        value={name}
        onChange={setName}
        placeholder="이름을 입력해주세요"
      />
      <SignupTextField
        type="email"
        value={email}
        onChange={setEmail}
        disabled // 이메일은 잠금 상태 (수정 불가)
      />
      <SignupTextField
        type="birth"
        value={birth}
        onChange={setBirth}
        placeholder="생년월일을 입력해주세요"
      />
      <SignupTextField
        type="job"
        value={job}
        onChange={setJob}
        placeholder="정보를 입력해주세요"
      />
    </div>
  );
};

export default Home;
