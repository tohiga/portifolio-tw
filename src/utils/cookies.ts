export const setCookie = (name: string, value: string) => {
  const date = new Date();
  date.setTime(date.getTime() + 60 * 60 * 1000); // expira em 1 hora
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; overwrite=true`;
};

export const getCookie = (name: string) => {
  const cookie = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookie ? cookie.pop() : '';
};
