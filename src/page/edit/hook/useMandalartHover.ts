import { useCallback, useEffect, useState } from 'react';
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

      // 만다라트 셀을 찾지 못한 경우 상태 변경하지 않음
      if (!cell) {
        return;
      }

      const position = parseInt(cell.getAttribute('data-position') || '0');

      // 유효하지 않은 position이거나 중앙(5번) 칸인 경우 무시
      if (!position || position === 5) {
        return;
      }

      const adjustedPosition = position > 5 ? position - 1 : position;
      const goal = mandalartData.coreGoals.find((g) => g.position === adjustedPosition);

      // 이전 상태와 동일한 goal인 경우 상태 업데이트 하지 않음
      if (goal && (hoveredGoal?.id !== goal.id || !isHovered)) {
        setHoveredGoal(goal);
        setIsHovered(true);
      }
    },
    [isEditing, mandalartData, hoveredGoal, isHovered],
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
