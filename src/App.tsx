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
import Header from './assets/Header';

function App() {
  const { t, i18n } = useTranslation();
  document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';

  // Scroll progress bar logic
  const [scroll, setScroll] = useState(0);
  // Add scroll event listener
  useState(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className="min-h-screen relative text-gray-900 dark:text-gray-100 transition-colors">
      {/* Scroll Progress Bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 50 }}>
        <div style={{ height: 6, background: 'linear-gradient(90deg, #4f8cff, #a259ff, #f857a6)', width: `${scroll}%`, borderRadius: 4, transition: 'width 0.2s' }} />
        <div style={{ position: 'absolute', right: 16, top: 0, color: '#333', fontWeight: 700, fontSize: 12, background: 'rgba(255,255,255,0.7)', borderRadius: 4, padding: '0 8px', height: 18, display: 'flex', alignItems: 'center' }}>{Math.round(scroll)}%</div>
      </div>
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="animated-bg-gradient one"></div>
        <div className="animated-bg-gradient two"></div>
        <div className="animated-bg-gradient three"></div>
      </div>
      <Header />
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
        <Section id="testimonials" title={t('testimonials_section')} icon={<FaQuoteRight />}>
          <Testimonials />
        </Section>
        <Section id="awards" title={t('awards_section')} icon={<FaAward />}>
          <Awards />
        </Section>
        <Section id="hobbies" title={t('hobbies_section')} icon={<FaHeart />}>
          <Hobbies />
        </Section>
        <Section id="timeline" title={t('timeline_section')} icon={<FaStream />}>
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
