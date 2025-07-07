import { gradientCircle } from './GradientCircle.css';

type VariantType = keyof typeof gradientCircle;

interface GradientCircleProps {
  variant: VariantType;
}

export const GradientCircle = ({ variant }: GradientCircleProps) => {
  return <div className={gradientCircle[variant]} />;
};
