const THEME_STORAGE_KEY = 'theme';
const THEME_EVENT = 'theme-change';

export function subscribeToThemeChange(callback: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleChange = () => callback();

  window.addEventListener('storage', handleChange);
  window.addEventListener(THEME_EVENT, handleChange);

  return () => {
    window.removeEventListener('storage', handleChange);
    window.removeEventListener(THEME_EVENT, handleChange);
  };
}

export function getThemeSnapshot(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return localStorage.getItem(THEME_STORAGE_KEY) === 'dark';
}

export function getServerThemeSnapshot(): boolean {
  return false;
}

export function applyTheme(isDark: boolean) {
  if (typeof window === 'undefined') {
    return;
  }

  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
  window.dispatchEvent(new Event(THEME_EVENT));
}