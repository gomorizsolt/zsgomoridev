export const formatReadingTime = (ms: number): string => {
  const minutes = Math.round(ms / 1000 / 3) || 1;

  return `${new Array(minutes).fill("🍿").join("")} ${minutes} min. read`;
};
