import EndSection from '@/page/home/EndSection/EndSection';
import ScrollSection from '@/page/home/ScrollSection/ScrollSection';
import StartSection from '@/page/home/StartSection/StartSection';
import { INTRO_MESSAGE } from '@/page/home/constant/scrollSection';

const sectionKeys = ['mandalart', 'ai', 'todo'] as const;

const Home = () => {
  return (
    <div>
      <StartSection />
      <>
        {sectionKeys.map((key, index) => (
          <ScrollSection
            key={key}
            title={INTRO_MESSAGE[key].title}
            content={INTRO_MESSAGE[key].content}
            index={index}
          />
        ))}
      </>
      <EndSection />
    </div>
  );
};

export default Home;
