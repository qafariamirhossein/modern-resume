import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './App.css'
import Section from './assets/Section';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ThemeSwitcher() {
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

function LangSwitcher() {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fa' : 'en');
    document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  };
  return (
    <button onClick={toggleLang} className="ml-2 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
      {i18n.language === 'en' ? 'FA' : 'EN'}
    </button>
  );
}

function Nav() {
  const { t } = useTranslation();
  const navItems = [
    { id: 'about', label: t('about') },
    { id: 'skills', label: t('skills') },
    { id: 'education', label: t('education') },
    { id: 'portfolio', label: t('portfolio') },
    { id: 'contact', label: t('contact') },
  ];
  return (
    <nav className="flex gap-4">
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="hover:text-blue-500 transition-colors duration-200"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-700"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  // Fake data for demo
  const skills = t('skills_list', { returnObjects: true }) as { name: string; level: number }[];
  const portfolio = t('portfolio_items', { returnObjects: true }) as { title: string; description: string; link: string; image: string }[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="flex flex-col md:flex-row justify-between items-center py-6 px-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight">{t('welcome')}</h1>
          <Nav />
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 animate-fade-in">
        <img
          src="https://placehold.co/120x120"
          alt="avatar"
          className="rounded-full border-4 border-blue-400 shadow-lg mb-4 w-32 h-32 object-cover"
        />
        <div className="text-2xl font-bold">{t('name')}</div>
        <div className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{t('title')}</div>
        <div className="text-sm opacity-70 mb-2">{t('location')}</div>
        <div className="flex gap-4 text-2xl mt-2">
          <a href="#" className="hover:text-blue-500"><FaGithub /></a>
          <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
        </div>
      </section>
      <main className="max-w-3xl mx-auto p-4">
        <Section id="about" title={t('about')}>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-justify whitespace-pre-line animate-fade-in">
            {t('about_text')}
          </div>
        </Section>
        <Section id="skills" title={t('skills')}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(skill => (
              <div key={skill.name} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex flex-col gap-2 animate-fade-in">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-xs opacity-60">{skill.level}%</span>
                </div>
                <ProgressBar value={skill.level} />
              </div>
            ))}
          </div>
        </Section>
        <Section id="education" title={t('education')}>
          <div className="flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow animate-fade-in">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-200 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl font-bold">
              <span>🏫</span>
            </div>
            <div>
              <div className="font-bold text-lg">{t('education_school')}</div>
              <div className="text-sm opacity-80">{t('education_degree')}</div>
              <div className="text-xs opacity-60">{t('education_period')}</div>
            </div>
          </div>
        </Section>
        <Section id="portfolio" title={t('portfolio')}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {portfolio.map(item => (
              <a key={item.title} href={item.link} className="block bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden hover:scale-105 transition-transform animate-fade-in">
                <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <div className="font-bold text-lg mb-1">{item.title}</div>
                  <div className="text-sm opacity-80">{item.description}</div>
                </div>
              </a>
            ))}
          </div>
        </Section>
        <Section id="contact" title={t('contact')}>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow flex flex-col items-center gap-2 animate-fade-in">
            <div className="text-lg font-semibold">{t('contact_email')}</div>
            <div className="text-sm opacity-80 mb-2">{t('contact_message')}</div>
            <a href="mailto:john.doe@example.com" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Send Email</a>
          </div>
        </Section>
      </main>
      <footer className="text-center py-4 text-sm opacity-70">
        &copy; {new Date().getFullYear()} John Doe
      </footer>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  )
}

export default App
