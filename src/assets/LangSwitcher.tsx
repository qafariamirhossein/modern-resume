import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const isFa = i18n.language === 'fa';
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(isFa ? 'en' : 'fa');
    document.documentElement.dir = isFa ? 'ltr' : 'rtl';
  };

  // Icons
  const Sun = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
  );
  const Moon = () => (
    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
  );
  const Ltr = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 12l4-4m-4 4l4 4"/></svg>
  );
  const Rtl = () => (
    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12H3m18 0l-4-4m4 4l-4 4"/></svg>
  );

  return (
    <label className="flex items-center cursor-pointer ml-2 group" title={isFa ? 'Switch to English (LTR)' : 'تغییر به فارسی (RTL)'}>
      <span className="mr-2 font-bold text-xs select-none text-gray-900 dark:text-gray-100">EN</span>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          checked={isFa}
          onChange={toggleLang}
          className="sr-only peer"
          aria-label={isFa ? 'Switch to English (LTR)' : 'تغییر به فارسی (RTL)'}
        />
        <div className={`w-14 h-7 rounded-full transition-colors duration-300 flex items-center px-1
          ${isFa ? 'bg-blue-400 dark:bg-blue-700' : 'bg-yellow-300 dark:bg-yellow-600'}`}
        >
          <span className="mr-1">{theme === 'dark' ? <Moon /> : <Sun />}</span>
          <span className="ml-auto">{isFa ? <Rtl /> : <Ltr />}</span>
        </div>
        <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md transition-transform duration-300 bg-white dark:bg-gray-800
          peer-checked:translate-x-7 flex items-center justify-center text-xs font-bold select-none
          ${isFa ? 'text-blue-700' : 'text-yellow-700'}`}
        >
          {isFa ? 'FA' : 'EN'}
        </div>
      </div>
      <span className="ml-2 font-bold text-xs select-none text-gray-900 dark:text-gray-100">FA</span>
    </label>
  );
} 