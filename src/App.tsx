import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import './App.css'
import Section from './assets/Section';
// import { FaUser, FaCode, FaGraduationCap, FaProjectDiagram, FaHeart, FaStream, FaEnvelope } from 'react-icons/fa';
import {  FaCode, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import AboutMe from './assets/AboutMe';
import Skills from './assets/Skills';
import Education from './assets/Education';
import Portfolio from './assets/Portfolio';
import ContactMe from './assets/ContactMe';
// import Testimonials from './assets/Testimonials';
// import Awards from './assets/Awards';
import Hobbies from './assets/Hobbies';
import Timeline from './assets/Timeline';
import Header from './assets/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioDetail from './assets/PortfolioDetail';
import SeaBackground from './SeaBackground';
import FishSwarm from './FishSwarm';
import { GiCrab, GiPalmTree, GiBeachBall, GiTurtle, GiDolphin, GiJellyfish } from 'react-icons/gi';

function App() {
  const { t, i18n } = useTranslation();
  document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';

  // Scroll progress bar logic
  const [scroll, setScroll] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          setScroll(scrolled);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <BrowserRouter>
      <SeaBackground />
      <FishSwarm />
      {/* Marine/Island Creatures Floating Background */}
      <div style={{ position: 'fixed', zIndex: 5, pointerEvents: 'none', width: '100vw', height: '100vh', top: 0, left: 0 }}>
        <span style={{ position: 'absolute', left: '5vw', top: '80vh', fontSize: 48, opacity: 0.85 }} className="sea-float"><GiCrab color="#e67e22" /></span>
        <span style={{ position: 'absolute', left: '80vw', top: '85vh', fontSize: 56, opacity: 0.8 }} className="sea-float"><GiPalmTree color="#27ae60" /></span>
        <span style={{ position: 'absolute', left: '15vw', top: '10vh', fontSize: 40, opacity: 0.7 }} className="sea-float"><GiJellyfish color="#6dd5fa" /></span>
        <span style={{ position: 'absolute', left: '60vw', top: '20vh', fontSize: 44, opacity: 0.7 }} className="sea-float"><GiTurtle color="#16a085" /></span>
        <span style={{ position: 'absolute', left: '40vw', top: '70vh', fontSize: 38, opacity: 0.7 }} className="sea-float"><GiJellyfish color="#f39c12" /></span>
        <span style={{ position: 'absolute', left: '70vw', top: '30vh', fontSize: 50, opacity: 0.7 }} className="sea-float"><GiDolphin color="#2980b9" /></span>
        <span style={{ position: 'absolute', left: '30vw', top: '90vh', fontSize: 42, opacity: 0.7 }} className="sea-float"><GiBeachBall color="#e84393" /></span>
      </div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen relative text-gray-900 dark:text-gray-100 transition-colors">
              {/* Scroll Progress Bar */}
              <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100vw', zIndex: 50 }}>
                <div style={{ height: 6, background: 'linear-gradient(90deg, #4f8cff, #a259ff, #f857a6)', width: `${scroll}%`, borderRadius: 4, transition: 'width 0.2s' }} />
                <div style={{ position: 'absolute', left: 16, bottom: 6, color: '#333', fontWeight: 700, fontSize: 12, background: 'rgba(255,255,255,0.7)', borderRadius: 4, padding: '0 8px', height: 18, display: 'flex', alignItems: 'center' }}>{Math.round(scroll)}%</div>
              </div>
              {/* Animated Background */}
              {/* <div className="animated-bg">
                <div className="animated-bg-gradient one"></div>
                <div className="animated-bg-gradient two"></div>
                <div className="animated-bg-gradient three"></div>
              </div> */}
              <main className="w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-8 relative z-10">
                <Section id="about" title={t('about')} icon={<span className="sea-float"><GiPalmTree /></span>}>
                  <AboutMe />
                </Section>
                <Section id="skills" title={t('skills')} icon={<span className="sea-float"><FaCode /></span>}>
                  <Skills />
                </Section>
                <Section id="education" title={t('education')} icon={<span className="sea-float"><FaGraduationCap /></span>}>
                  <Education />
                </Section>
                <Section id="portfolio" title={t('portfolio.label')} icon={<span className="sea-float"><FaProjectDiagram /></span>}>
                  <Portfolio />
                </Section>
                {/* <Section id="testimonials" title={t('testimonials_section')} icon={<FaQuoteRight />}> */}
                {/*   <Testimonials /> */}
                {/* </Section> */}
                {/* <Section id="awards" title={t('awards_section')} icon={<FaAward />}> */}
                {/*   <Awards /> */}
                {/* </Section> */}
                <Section id="hobbies" title={t('hobbies_section')} icon={<span className="sea-float"><GiCrab /></span>}>
                  <Hobbies />
                </Section>
                <Section id="timeline" title={t('timeline_section')} icon={<span className="sea-float"><GiJellyfish /></span>}>
                  <Timeline />
                </Section>
                <Section id="contact" title={t('contact')} icon={<span className="sea-float"><GiBeachBall /></span>}>
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
                .sea-float {
                  display: inline-block;
                  animation: seaFloat 3.5s ease-in-out infinite alternate;
                }
                @keyframes seaFloat {
                  0% { transform: translateY(0) scale(1); }
                  50% { transform: translateY(-8px) scale(1.05); }
                  100% { transform: translateY(0) scale(1); }
                }
              `}</style>
            </div>
          }
        />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
