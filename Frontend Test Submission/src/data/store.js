export const getURLs = () => {
  return JSON.parse(localStorage.getItem('urls') || '[]');
};

export const saveURL = (entry) => {
  const data = getURLs();
  data.push(entry);
  localStorage.setItem('urls', JSON.stringify(data));
};

export const incrementClick = (shortcode, source) => {
  const data = getURLs();
  const now = new Date().toISOString();
  const location = 'Unknown';
  data.forEach((item) => {
    if (item.shortcode === shortcode) {
      item.clicks = (item.clicks || 0) + 1;
      item.history = item.history || [];
      item.history.push({ time: now, source, location });
    }
  });
  localStorage.setItem('urls', JSON.stringify(data));
};
