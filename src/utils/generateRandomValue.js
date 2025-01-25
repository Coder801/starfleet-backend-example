export const generateRandomValue = () => ({
  value: Math.floor(Math.random() * 1000),
  timestamp: new Date().toISOString(),
});
