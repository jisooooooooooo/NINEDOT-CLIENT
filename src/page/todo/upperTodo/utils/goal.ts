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
