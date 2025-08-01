export const logAction = (message, data = {}) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message} | ${JSON.stringify(data)}`;
  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push(logEntry);
  localStorage.setItem('logs', JSON.stringify(logs));
};
