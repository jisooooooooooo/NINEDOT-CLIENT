import { useEffect } from 'react';

import { HomeContainer } from '@/page/home/Home.css';
import { INTRO_MESSAGE } from '@/page/home/constant/scrollSection';
import { useFadeInOnView } from '@/page/home/hook/useFadeInOnView';
import StartSection from '@/page/home/StartSection/StartSection';
import ScrollSection from '@/page/home/ScrollSection/ScrollSection';
import EndSection from '@/page/home/EndSection/EndSection';
import { fadeSlide } from '@/page/home/style/fadeTransition.css';
import { useMultipleFadeInOnView } from '@/page/home/hook/useMultipleFadeInOnView';
import LoginModal from '@/common/component/LoginModal/LoginModal';
import getGoogleAuthCode from '@/api/auth/googleLogin/util/getGoogleAuthCode';
import getAccessToken from '@/api/auth/googleLogin/util/getAccessToken';
import { useLoginModal } from '@/common/hook/useLoginModal';

const sectionKeys = ['mandalart', 'ai', 'todo'] as const;

const Home = () => {
  const scrolls = useMultipleFadeInOnView();
  const end = useFadeInOnView<HTMLDivElement>();

  const { isModalOpen, openModal, closeModal } = useLoginModal();

  return (
    <div className={HomeContainer}>
      {isModalOpen && <LoginModal onClose={closeModal} />}
      <StartSection onClick={openModal} />

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

      <EndSection fadeInRef={end.ref} visible={end.visible} onClick={openModal} />
    </div>
  );
};
export default Home;
