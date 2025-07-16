export const createRadialGradient = (color: string, opacity: number) =>
  `radial-gradient(50% 50% at 50% 50%, rgba(${color}, ${opacity}) 0%, rgba(${color}, 0.00) 100%)`;
