import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './App.css'
import Section from './assets/Section';
import { FaGithub, FaLinkedin, FaTwitter, FaUser, FaCode, FaGraduationCap, FaProjectDiagram, FaQuoteRight, FaAward, FaHeart, FaStream, FaEnvelope } from 'react-icons/fa';
import AboutMe from './assets/AboutMe';
import Skills from './assets/Skills';
import Education from './assets/Education';
import Portfolio from './assets/Portfolio';
import ContactMe from './assets/ContactMe';
import Testimonials from './assets/Testimonials';
import Awards from './assets/Awards';
import Hobbies from './assets/Hobbies';
import Timeline from './assets/Timeline';

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
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'awards', label: 'Awards' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'timeline', label: 'Timeline' },
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

  return (
    <div className="min-h-screen relative text-gray-900 dark:text-gray-100 transition-colors">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="animated-bg-gradient one"></div>
        <div className="animated-bg-gradient two"></div>
        <div className="animated-bg-gradient three"></div>
      </div>
      <header className="flex flex-col md:flex-row justify-between items-center py-6 px-4 shadow-md bg-white/70 dark:bg-gray-800/70 sticky top-0 z-20 backdrop-blur-md rounded-b-2xl">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">{t('welcome')}</h1>
          <Nav />
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </header>
      {/* Floating Switchers */}
      <div className="fixed top-6 right-6 z-30 flex flex-col gap-2">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 animate-fade-in relative z-10">
        <div className="relative mb-4">
          <img
            src="https://placehold.co/120x120"
            alt="avatar"
            className="rounded-full border-4 border-blue-400 shadow-xl w-32 h-32 object-cover animate-float"
          />
          <span className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-blue-400 to-purple-400 text-white px-2 py-1 rounded-full text-xs shadow-lg animate-pulse">{t('title')}</span>
        </div>
        <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text">{t('name')}</div>
        <div className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-1 animate-fade-in">{t('location')}</div>
        <div className="flex gap-4 text-2xl mt-4 animate-fade-in">
          <a href="#" className="hover:scale-125 hover:text-blue-500 transition-transform"><FaGithub /></a>
          <a href="#" className="hover:scale-125 hover:text-blue-500 transition-transform"><FaLinkedin /></a>
          <a href="#" className="hover:scale-125 hover:text-blue-500 transition-transform"><FaTwitter /></a>
        </div>
      </section>
      <main className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 relative z-10">
        <Section id="about" title={t('about')} icon={<FaUser />}>
          <AboutMe />
        </Section>
        <Section id="skills" title={t('skills')} icon={<FaCode />}>
          <Skills />
        </Section>
        <Section id="education" title={t('education')} icon={<FaGraduationCap />}>
          <Education />
        </Section>
        <Section id="portfolio" title={t('portfolio')} icon={<FaProjectDiagram />}>
          <Portfolio />
        </Section>
        <Section id="testimonials" title="Testimonials" icon={<FaQuoteRight />}>
          <Testimonials />
        </Section>
        <Section id="awards" title="Awards" icon={<FaAward />}>
          <Awards />
        </Section>
        <Section id="hobbies" title="Hobbies" icon={<FaHeart />}>
          <Hobbies />
        </Section>
        <Section id="timeline" title="Timeline" icon={<FaStream />}>
          <Timeline />
        </Section>
        <Section id="contact" title={t('contact')} icon={<FaEnvelope />}>
          <ContactMe />
        </Section>
      </main>
      <footer className="text-center py-4 text-sm opacity-70 relative z-10">
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
        .animate-float {
          animation: float 3s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-16px); }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradientMove 3s linear infinite alternate;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}

export default App
