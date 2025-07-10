import { useTranslation } from 'react-i18next';
import ThemeSwitcher from './ThemeSwitcher';
import LangSwitcher from './LangSwitcher';
import { useState, useEffect } from 'react';

function Logo() {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 shadow-md mr-2">
      <span className="text-white text-2xl font-bold select-none">A</span>
    </div>
  );
}

function Nav({ mobile = false, onClick, activeId }: { mobile?: boolean; onClick?: () => void; activeId?: string }) {
  const { t } = useTranslation();
  const navItems = [
    { id: 'about', label: t('about') },
    { id: 'skills', label: t('skills') },
    { id: 'education', label: t('education') },
    { id: 'portfolio', label: t('portfolio.label') },
    { id: 'hobbies', label: t('hobbies_section') },
    { id: 'timeline', label: t('timeline_section') },
    { id: 'contact', label: t('contact') },
  ];
  return (
    <nav
      className={
        mobile
          ? 'flex flex-col gap-4 items-center bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-4 animate-slide-down'
          : 'flex flex-nowrap gap-2 md:gap-6 items-center justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-gray-700 px-1 md:px-0'
      }
    >
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`relative hover:text-pink-500 text-base md:text-lg font-medium transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
            activeId === item.id
              ? 'text-pink-600 dark:text-pink-400 font-bold'
              : 'text-gray-700 dark:text-gray-200'
          }`}
          onClick={onClick}
        >
          {item.label}
          {activeId === item.id && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
          )}
        </a>
      ))}
    </nav>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('about');

  // Highlight nav item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'skills',
        'education',
        'portfolio',
        'hobbies',
        'timeline',
        'contact',
      ];
      let found = 'about';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          found = id;
        }
      }
      setActiveId(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full shadow-lg bg-white/80 dark:bg-gray-900/80 sticky top-0 z-30 backdrop-blur-md rounded-b-2xl px-2 md:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 animate-fade-in border-b border-blue-100 dark:border-gray-800">
      <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto flex-row ltr:flex-row rtl:flex-row-reverse">
        <Logo />
        {/* <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg select-none">
          {t('welcome')}
        </h1> */}
        {/* Desktop Nav */}
        <div className="hidden md:block ltr:ml-4 rtl:mr-4">
          <Nav activeId={activeId} />
        </div>
      </div>
      {/* Always show switchers on the right/left depending on direction */}
      <div className="flex items-center gap-2 md:gap-4 ltr:ml-auto rtl:mr-auto">
        <LangSwitcher />
        <ThemeSwitcher />
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t('close_menu') : t('open_menu')}
        >
          {menuOpen ? (
            // X icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full ltr:left-0 rtl:right-0 w-full flex justify-center z-40 animate-slide-down">
          <Nav mobile onClick={() => setMenuOpen(false)} activeId={activeId} />
        </div>
      )}
      <style>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 0.25s ease; }
      `}</style>
    </header>
  );
} 