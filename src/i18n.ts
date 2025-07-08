import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Amir ;)',
      about: 'About Me',
      skills: 'Skills',
      education: 'Education',
      portfolio: {
        label: 'Portfolio',
        project1: {
          title: 'Awesome Project',
          short: 'A short description.',
          long: 'A long, detailed description of the project, its features, challenges, and results. Includes everything a visitor might want to know.'
        },
        project2: {
          title: 'Second Project',
          short: 'Another short description.',
          long: 'A comprehensive overview of the second project, highlighting its unique aspects, technologies, and outcomes.'
        }
      },
      contact: 'Contact Me',
      name: 'AmirHossein Qafari',
      title: 'Software Developer',
      location: 'Tehran, Iran',
      age: '22 years old',
      phone: '+98 930 064 6780',
      telegram: 'https://t.me/amirDev82',
      linkedin: 'https://www.linkedin.com/in/amirhossein-qafari/',
      github: 'https://github.com/qafariamirhossein',
      about_text: `I am AmirHossein Qafari, a 22-year-old software developer based in Tehran, Iran. Passionate about building modern web applications and always eager to learn new technologies. Let's connect!\n\nPhone: +98 930 064 6780\nTelegram: @amirDev82\nLinkedIn: amirhossein-qafari\nGitHub: qafariamirhossein`,
      education_school: 'Your University',
      education_degree: "Bachelor's degree, Computer Science",
      education_period: '2019 - 2023',
      skills_list: [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'CSS', level: 70 },
      ],
      contact_email: 'qafariamirhossein@gmail.com',
      contact_message: 'Feel free to reach out for collaboration or just to say hi.',
      contact_socials: {
        part1: 'You can also contact me via',
        telegram: 'Telegram',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        or: 'or',
      },
      // Add more keys as needed
      testimonials_section: 'Testimonials',
      awards_section: 'Awards',
      hobbies_section: 'Hobbies',
      timeline_section: 'Timeline',
      testimonials: [
        {
          name: 'Alice Smith',
          role: 'Product Manager',
          text: 'Working with AmirHossein was a fantastic experience. He delivers high quality code and is a great team player.',
          avatar: 'https://placehold.co/64x64',
        },
        {
          name: 'Bob Lee',
          role: 'CTO',
          text: 'AmirHossein is a creative problem solver and always brings fresh ideas to the table.',
          avatar: 'https://placehold.co/64x64',
        },
      ],
      awards: [
        {
          title: 'Best Developer 2022',
          issuer: 'Tech Awards',
          date: '2022',
          description: 'Awarded for outstanding performance and innovation in web development.',
        },
        {
          title: 'Open Source Hero',
          issuer: 'Open Source Org',
          date: '2021',
          description: 'Recognized for significant contributions to open source projects.',
        },
      ],
      hobbies: [
        { name: 'Photography', icon: '📷', description: 'Capturing moments and landscapes.' },
        { name: 'Traveling', icon: '✈️', description: 'Exploring new places and cultures.' },
        { name: 'Music', icon: '🎵', description: 'Listening and composing music.' },
      ],
      timeline: [
        { year: '2015', event: 'Started university' },
        { year: '2017', event: 'Internship at TechCorp' },
        { year: '2019', event: 'Graduated and joined WebDev Inc.' },
        { year: '2022', event: 'Promoted to Senior Developer' },
      ],
      tech_used: 'Tech used',
      live_demo: 'Live Demo',
      source_code: 'Source Code',
    },
  },
  fa: {
    translation: {
      welcome: 'امیر ;)',
      about: 'درباره من',
      skills: 'مهارت‌ها',
      education: 'تحصیلات',
      portfolio: {
        label: 'نمونه کارها',
        project1: {
          title: 'پروژه عالی',
          short: 'توضیح کوتاه.',
          long: 'توضیح کامل و مفصل درباره پروژه، ویژگی‌ها، چالش‌ها و نتایج آن. شامل هر آنچه بازدیدکننده باید بداند.'
        },
        project2: {
          title: 'پروژه دوم',
          short: 'توضیح کوتاه دیگر.',
          long: 'مروری جامع بر پروژه دوم با تاکید بر جنبه‌های منحصربه‌فرد، فناوری‌ها و دستاوردها.'
        }
      },
      contact: 'تماس با من',
      name: 'امیرحسین قافری',
      title: 'توسعه‌دهنده نرم‌افزار',
      location: 'تهران، ایران',
      age: '۲۲ ساله',
      phone: '+98 930 064 6780',
      telegram: 'https://t.me/amirDev82',
      linkedin: 'https://www.linkedin.com/in/amirhossein-qafari/',
      github: 'https://github.com/qafariamirhossein',
      about_text: `من امیرحسین قافری هستم، ۲۲ ساله و توسعه‌دهنده نرم‌افزار ساکن تهران. علاقه‌مند به ساخت برنامه‌های مدرن وب و همیشه مشتاق یادگیری فناوری‌های جدید. خوشحال می‌شوم ارتباط بگیریم!\n\nتلفن: +98 930 064 6780\nتلگرام: @amirDev82\nلینکدین: amirhossein-qafari\nگیت‌هاب: qafariamirhossein`,
      education_school: 'دانشگاه شما',
      education_degree: 'کارشناسی علوم کامپیوتر',
      education_period: '۱۳۹۸ - ۱۴۰۲',
      skills_list: [
        { name: 'جاوااسکریپت', level: 90 },
        { name: 'ری‌اکت', level: 85 },
        { name: 'تایپ‌اسکریپت', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'CSS', level: 70 },
      ],
      contact_email: 'qafariamirhossein@gmail.com',
      contact_message: 'برای همکاری یا حتی یک سلام ساده، خوشحال می‌شوم با من تماس بگیرید!',
      contact_socials: {
        part1: 'همچنین می‌توانید از طریق',
        telegram: 'تلگرام',
        linkedin: 'لینکدین',
        github: 'گیت‌هاب',
        or: 'یا',
      },
      // Add more keys as needed
      testimonials_section: 'توصیه‌نامه‌ها',
      awards_section: 'جوایز',
      hobbies_section: 'سرگرمی‌ها',
      timeline_section: 'تایم‌لاین',
      testimonials: [
        {
          name: 'آلیس اسمیت',
          role: 'مدیر محصول',
          text: 'کار با امیرحسین تجربه فوق‌العاده‌ای بود. او کد با کیفیت بالا ارائه می‌دهد و یک عضو عالی تیم است.',
          avatar: 'https://placehold.co/64x64',
        },
        {
          name: 'باب لی',
          role: 'مدیر فنی',
          text: 'امیرحسین یک حل‌کننده خلاق مشکلات است و همیشه ایده‌های تازه‌ای ارائه می‌دهد.',
          avatar: 'https://placehold.co/64x64',
        },
      ],
      awards: [
        {
          title: 'بهترین توسعه‌دهنده ۲۰۲۲',
          issuer: 'جوایز فناوری',
          date: '۲۰۲۲',
          description: 'به خاطر عملکرد برجسته و نوآوری در توسعه وب اهدا شده است.',
        },
        {
          title: 'قهرمان متن‌باز',
          issuer: 'سازمان متن‌باز',
          date: '۲۰۲۱',
          description: 'برای مشارکت‌های قابل توجه در پروژه‌های متن‌باز شناخته شده است.',
        },
      ],
      hobbies: [
        { name: 'عکاسی', icon: '📷', description: 'ثبت لحظات و مناظر.' },
        { name: 'سفر', icon: '✈️', description: 'کشف مکان‌ها و فرهنگ‌های جدید.' },
        { name: 'موسیقی', icon: '🎵', description: 'گوش دادن و ساخت موسیقی.' },
      ],
      timeline: [
        { year: '۲۰۱۵', event: 'شروع دانشگاه' },
        { year: '۲۰۱۷', event: 'کارآموزی در تک‌کورپ' },
        { year: '۲۰۱۹', event: 'فارغ‌التحصیلی و پیوستن به وب‌دِو اینک.' },
        { year: '۲۰۲۲', event: 'ارتقا به توسعه‌دهنده ارشد' },
      ],
      tech_used: 'فناوری‌های استفاده‌شده',
      live_demo: 'دموی زنده',
      source_code: 'سورس کد',
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