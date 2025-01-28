export const generateRandomValue = () => ({
  value: Math.floor(Math.random() * 100),
  timestamp: new Date().toISOString(),
});
