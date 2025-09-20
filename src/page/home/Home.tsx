import { HomeContainer } from '@/page/home/Home.css';
import { INTRO_MESSAGE } from '@/page/home/constant/messageConstants';
import { useFadeInOnView } from '@/page/home/hook/useFadeInOnView';
import { StartSection, EndSection } from '@/page/home';
import { fadeSlide } from '@/page/home/style/fadeTransition.css';
import { useMultipleFadeInOnView } from '@/page/home/hook/useMultipleFadeInOnView';
import { useOverlayModal } from '@/common/hook/useOverlayModal';
import LoginModal from '@/common/component/LoginModal/LoginModal';
import ScrollSection from '@/page/home/ScrollSection/ScrollSection';
import type { AnimationImporter } from '@/page/home/type/lottieType';

const animationImporters: Readonly<AnimationImporter[]> = [
  () => import('@/assets/lottie/mandalart.json'),
  () => import('@/assets/lottie/ai.json'),
  () => import('@/assets/lottie/todo.json'),
] as const;

const sectionKeys = ['mandalart', 'ai', 'todo'] as const;

const Home = () => {
  const scrolls = useMultipleFadeInOnView();
  const end = useFadeInOnView<HTMLDivElement>();
  const { openModal, closeModal } = useOverlayModal();

  const handleOpenLogin = () => openModal(<LoginModal onClose={closeModal} />);

  return (
    <div className={HomeContainer}>
      <StartSection onClick={handleOpenLogin} />

      {sectionKeys.map((key, index) => {
        const { ref, visible } = scrolls[index];
        return (
          <div key={key} ref={ref} className={fadeSlide({ state: visible ? 'in' : 'out' })}>
            <ScrollSection
              title={INTRO_MESSAGE[key].title}
              content={INTRO_MESSAGE[key].content}
              index={index}
              visible={visible}
              animationImporter={animationImporters[index]}
            />
          </div>
        );
      })}

      <EndSection fadeInRef={end.ref} visible={end.visible} onClick={handleOpenLogin} />
    </div>
  );
};

export default Home;
