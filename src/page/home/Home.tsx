import { useModal } from '@/common/hook/useModal';
import AiRecommendModal from '@/common/component/AiRecommendModal/AiRecommendModal';

const Home = () => {
  const { openModal, ModalWrapper, closeModal } = useModal();

  return (
    <div>
      <h1>홈</h1>
      <button onClick={() => openModal(<AiRecommendModal onClose={closeModal} />)}>
        AI 추천 모달 열기
      </button>
      {ModalWrapper}
    </div>
  );
};

export default Home;
