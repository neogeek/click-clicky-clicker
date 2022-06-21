export const has = (key: string, defaultValue: string = ''): boolean => {
  const value = localStorage.getItem(key);

  return value ? true : false;
};

export const get = (key: string, defaultValue: string = ''): string => {
  const value = localStorage.getItem(key);

  return value || defaultValue;
};

export const set = (key: string, value: string = ''): void => {
  localStorage.setItem(key, value);
};

export const del = (key: string, value: string = ''): void => {
  localStorage.removeItem(key);
};

export const clear = (): void => {
  localStorage.clear();
};
