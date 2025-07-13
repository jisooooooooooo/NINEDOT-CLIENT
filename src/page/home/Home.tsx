import EndSection from '@/page/home/EndSection/EndSection';
import { HomeContainer } from '@/page/home/Home.css';
import ScrollSection from '@/page/home/ScrollSection/ScrollSection';
import StartSection from '@/page/home/StartSection/StartSection';
import { INTRO_MESSAGE } from '@/page/home/constant/scrollSection';
import { useFadeInOnView } from '@/page/home/hook/useFadeInOnView';
import { fadeInUp } from '@/page/home/style/fadeIn.css';

const sectionKeys = ['mandalart', 'ai', 'todo'] as const;

const Home = () => {
  const start = useFadeInOnView<HTMLDivElement>();
  const end = useFadeInOnView<HTMLDivElement>();
  const scrolls = sectionKeys.map(() => useFadeInOnView<HTMLDivElement>());

  return (
    <div className={HomeContainer}>
      <div ref={start.ref} className={fadeInUp({ visible: start.visible })}>
        <StartSection />
      </div>

      {sectionKeys.map((key, index) => (
        <div
          key={key}
          ref={scrolls[index].ref}
          className={fadeInUp({ visible: scrolls[index].visible })}
        >
          <ScrollSection
            title={INTRO_MESSAGE[key].title}
            content={INTRO_MESSAGE[key].content}
            index={index}
          />
        </div>
      ))}

      <div ref={end.ref} className={fadeInUp({ visible: end.visible })}>
        <EndSection />
      </div>
    </div>
  );
};

export default Home;
