export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isAlphanumeric = (str) => /^[a-zA-Z0-9]{3,10}$/.test(str);
