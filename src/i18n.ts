import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      about: 'About Me',
      skills: 'Skills',
      education: 'Education',
      portfolio: 'Portfolio',
      contact: 'Contact Me',
      name: 'John Doe',
      title: 'Full Stack Developer',
      location: 'Anywhere, Earth',
      about_text: `I am a passionate developer with a love for building modern web applications. I enjoy working with new technologies and creating beautiful, functional user experiences.\n\nI am always learning and looking for new challenges. Let\'s connect and build something amazing together!`,
      education_school: 'Example University',
      education_degree: "Bachelor's degree, Computer Science",
      education_period: '2015 - 2019',
      skills_list: [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'CSS', level: 70 },
      ],
      portfolio_items: [
        { title: 'Project Alpha', description: 'A modern web app for productivity.', link: '#', image: 'https://placehold.co/300x200' },
        { title: 'Beta Blog', description: 'A stylish blog platform.', link: '#', image: 'https://placehold.co/300x200' },
      ],
      contact_email: 'john.doe@example.com',
      contact_message: 'Feel free to reach out for collaboration or just to say hi!',
      // Add more keys as needed
    },
  },
  fa: {
    translation: {
      welcome: 'خوش آمدید',
      about: 'درباره من',
      skills: 'مهارت‌ها',
      education: 'تحصیلات',
      portfolio: 'نمونه کارها',
      contact: 'تماس با من',
      name: 'جان دو',
      title: 'توسعه‌دهنده فول‌استک',
      location: 'هرکجا، زمین',
      about_text: `من یک توسعه‌دهنده مشتاق هستم که عاشق ساخت برنامه‌های مدرن وب می‌باشم. از کار با فناوری‌های جدید و خلق تجربه‌های کاربری زیبا و کاربردی لذت می‌برم.\n\nهمیشه در حال یادگیری و جستجوی چالش‌های جدید هستم. بیایید با هم ارتباط بگیریم و چیزی شگفت‌انگیز بسازیم!`,
      education_school: 'دانشگاه نمونه',
      education_degree: 'کارشناسی علوم کامپیوتر',
      education_period: '۲۰۱۵ - ۲۰۱۹',
      skills_list: [
        { name: 'جاوااسکریپت', level: 90 },
        { name: 'ری‌اکت', level: 85 },
        { name: 'تایپ‌اسکریپت', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'CSS', level: 70 },
      ],
      portfolio_items: [
        { title: 'پروژه آلفا', description: 'یک وب‌اپ مدرن برای بهره‌وری.', link: '#', image: 'https://placehold.co/300x200' },
        { title: 'بتا بلاگ', description: 'یک پلتفرم وبلاگ شیک.', link: '#', image: 'https://placehold.co/300x200' },
      ],
      contact_email: 'john.doe@example.com',
      contact_message: 'برای همکاری یا حتی یک سلام ساده، خوشحال می‌شوم با من تماس بگیرید!',
      // Add more keys as needed
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 