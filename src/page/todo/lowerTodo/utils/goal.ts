export const extractTitles = (todos: { title: string }[]) => todos.map((todo) => todo.title);

export const formatAiRecommendTitles = (recommendList: { title: string; cycle: string }[]) =>
  recommendList.map((item) => {
    const cycleText = item.cycle.replace('한 번만', '한 번');
    return `${cycleText}/${item.title}`;
  });

export const toMainSubGoals = (coreGoals: { id: number; title: string; position: number }[]) => {
  const sortedGoals = [...coreGoals].sort((a, b) => a.position - b.position);
  return sortedGoals.map((goal) => ({
    id: goal.id,
    title: goal.title,
    position: goal.position,
    cycle: 'ONCE' as const,
  }));
};
