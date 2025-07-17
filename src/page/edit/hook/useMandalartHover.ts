import { useCallback, useEffect, useRef, useState } from 'react';

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
  const lastPositionRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mandalartData) {
      setIsHovered(false);
      setHoveredGoal(null);
    }
  }, [mandalartData]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isEditing || !mandalartData) {
        return;
      }

      const target = e.target as HTMLElement;
      const cell = target.closest('[data-position]');

      if (!cell) {
        return;
      }

      const position = parseInt(cell.getAttribute('data-position') || '0');

      if (!position || position === 5 || position === lastPositionRef.current) {
        return;
      }

      const adjustedPosition = position > 5 ? position - 1 : position;
      const goal = mandalartData.coreGoals.find((g) => g.position === adjustedPosition);

      if (goal) {
        lastPositionRef.current = position;
        setHoveredGoal(goal);
        setIsHovered(true);
      }
    },
    [isEditing, mandalartData],
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      const relatedTarget = e.relatedTarget;
      if (!(relatedTarget instanceof HTMLElement)) {
        lastPositionRef.current = null;
        setIsHovered(false);
        if (!isEditing) {
          setHoveredGoal(null);
        }
        return;
      }

      const isMovingToHoverContent = relatedTarget.closest('#hoverContent');
      const isMovingToMandalartContent = relatedTarget.closest('#mandalartContent');

      if (!isMovingToHoverContent && !isMovingToMandalartContent) {
        lastPositionRef.current = null;
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
