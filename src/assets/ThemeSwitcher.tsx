import { useState } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };
  return (
    <button onClick={toggleTheme} className="ml-2 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
} 