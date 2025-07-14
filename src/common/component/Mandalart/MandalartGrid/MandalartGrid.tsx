import type { ReactNode } from 'react';

interface MandalartGridProps {
  children: (index: number) => ReactNode;
  gridSize?: number;
  className?: string;
}

const DEFAULT_GRID_SIZE = 9;

const MandalartGrid = ({
  children,
  gridSize = DEFAULT_GRID_SIZE,
  className,
}: MandalartGridProps) => {
  return (
    <div className={className}>
      {Array(gridSize)
        .fill(null)
        .map((_, index) => children(index))}
    </div>
  );
};

export default MandalartGrid;
