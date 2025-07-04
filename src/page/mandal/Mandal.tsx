import { useNavigate } from 'react-router-dom';

import { PATH } from '@/route';

const Mandal = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PATH.HISTORY);
  };

  return (
    <div>
      <h1 onClick={handleClick} style={{ cursor: 'pointer' }}>
        만다라트
      </h1>
    </div>
  );
};

export default Mandal;
