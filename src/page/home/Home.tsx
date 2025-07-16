import { HomeContainer } from '@/page/home/Home.css';
import { INTRO_MESSAGE } from '@/page/home/constant/scrollSection';
import { useFadeInOnView } from '@/page/home/hook/useFadeInOnView';
import StartSection from '@/page/home/StartSection/StartSection';
import ScrollSection from '@/page/home/ScrollSection/ScrollSection';
import EndSection from '@/page/home/EndSection/EndSection';
import { fadeSlide } from '@/page/home/style/fadeTransition.css';
import { useMultipleFadeInOnView } from '@/page/home/hook/useMultipleFadeInOnView';
import LoginModal from '@/common/component/LoginModal/LoginModal';
import { useModal } from '@/common/hook/useModal';

const sectionKeys = ['mandalart', 'ai', 'todo'] as const;

const Home = () => {
  const scrolls = useMultipleFadeInOnView();
  const end = useFadeInOnView<HTMLDivElement>();

  const { openModal, closeModal, ModalWrapper } = useModal();

  const handleOpenLogin = () => {
    openModal(<LoginModal onClose={closeModal} />);
  };

  return (
    <div className={HomeContainer}>
      {ModalWrapper}
      <StartSection onClick={handleOpenLogin} />

      {sectionKeys.map((key, index) => {
        const { ref, visible } = scrolls[index];
        return (
          <div key={key} ref={ref} className={fadeSlide({ state: visible ? 'in' : 'out' })}>
            <ScrollSection
              title={INTRO_MESSAGE[key].title}
              content={INTRO_MESSAGE[key].content}
              index={index}
            />
          </div>
        );
      })}

      <EndSection fadeInRef={end.ref} visible={end.visible} onClick={handleOpenLogin} />
    </div>
  );
};
export default Home;
