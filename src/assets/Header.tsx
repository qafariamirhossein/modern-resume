import { useTranslation } from 'react-i18next';
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';

function Nav() {
  const { t } = useTranslation();
  const navItems = [
    { id: 'about', label: t('about') },
    { id: 'skills', label: t('skills') },
    { id: 'education', label: t('education') },
    { id: 'portfolio', label: t('portfolio') },
    { id: 'testimonials', label: t('testimonials_section') },
    { id: 'awards', label: t('awards_section') },
    { id: 'hobbies', label: t('hobbies_section') },
    { id: 'timeline', label: t('timeline_section') },
    { id: 'contact', label: t('contact') },
  ];
  return (
    <nav className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center justify-center">
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="hover:text-pink-500 text-base md:text-lg font-medium transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="w-full shadow-lg bg-white/80 dark:bg-gray-900/80 sticky top-0 z-30 backdrop-blur-md rounded-b-2xl px-2 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 animate-fade-in border-b border-blue-100 dark:border-gray-800">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          {t('welcome')}
        </h1>
        <Nav />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
} 