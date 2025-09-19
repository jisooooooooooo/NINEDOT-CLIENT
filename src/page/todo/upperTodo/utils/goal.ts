export const updateSubGoalsWithAiResponse = (
  original: string[],
  responseData: { position: number; title: string }[],
): string[] => {
  const updated = [...original];
  responseData.forEach(({ position, title }) => {
    updated[position - 1] = title;
  });
  return updated;
};

export const extractTitles = (goals: { title: string }[]) => goals.map((item) => item.title);

export const toMainSubGoals = (subGoals: string[]) =>
  subGoals.map((v, i) => ({
    id: i + 1,
    title: v,
    position: i + 1,
    cycle: 'ONCE' as const,
  }));
