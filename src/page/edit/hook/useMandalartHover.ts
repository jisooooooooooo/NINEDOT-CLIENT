import { useCallback, useState } from 'react';
import type { CoreGoal } from '@/page/mandal/types/mandal';

interface UseMandalartHoverProps {
  isEditing: boolean;
  mandalartData?: {
    coreGoals: CoreGoal[];
  };
}

interface UseMandalartHoverReturn {
  isHovered: boolean;
  hoveredGoal: CoreGoal | null;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseLeave: (e: React.MouseEvent) => void;
  setHoveredGoal: (goal: CoreGoal | null) => void;
  setIsHovered: (isHovered: boolean) => void;
}

export const useMandalartHover = ({
  isEditing,
  mandalartData,
}: UseMandalartHoverProps): UseMandalartHoverReturn => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredGoal, setHoveredGoal] = useState<CoreGoal | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isEditing) {
        return;
      }

      const container = e.currentTarget;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cellWidth = rect.width / 3;
      const cellHeight = rect.height / 3;

      const col = Math.floor(x / cellWidth);
      const row = Math.floor(y / cellHeight);

      if (row === 1 && col === 1) {
        setIsHovered(true);
        return;
      }

      const position = row * 3 + col + 1;

      if (!mandalartData) {
        return;
      }

      const goal = mandalartData.coreGoals.find(
        (g: CoreGoal) => g.position === (position > 5 ? position - 1 : position),
      );

      if (goal) {
        setHoveredGoal(goal);
        setIsHovered(true);
      }
    },
    [isEditing, mandalartData],
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement;
      const isMovingToHoverContent = relatedTarget?.closest('#hoverContent');
      const isMovingToMandalartContent = relatedTarget?.closest('#mandalartContent');

      if (!isMovingToHoverContent && !isMovingToMandalartContent) {
        setIsHovered(false);
        if (!isEditing) {
          setHoveredGoal(null);
        }
      }
    },
    [isEditing],
  );

  return {
    isHovered,
    hoveredGoal,
    handleMouseMove,
    handleMouseLeave,
    setHoveredGoal,
    setIsHovered,
  };
};
