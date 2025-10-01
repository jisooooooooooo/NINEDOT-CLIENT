import { GradientCircle } from '@/common/component/GradientCircle/GradientCircle';

const GradientBackground = () => {
  return (
    <>
      <GradientCircle variant="topRight" />
      <GradientCircle variant="bottomLeft1" />
      <GradientCircle variant="bottomLeft2" />
    </>
  );
};

export default GradientBackground;
