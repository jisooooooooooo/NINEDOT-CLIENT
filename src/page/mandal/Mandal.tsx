import { useNavigate } from 'react-router-dom';

import { PATH } from '@/route';

const Mandal = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PATH.HISTORY);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          fontSize: '2em',
          fontWeight: 'bold',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          padding: 0,
          margin: 0,
        }}
      >
        만다라트
      </button>
    </div>
  );
};

export default Mandal;
