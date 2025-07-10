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
        },
        twitterData: {
          title: 'Twitter Data Collection & Analysis Platform',
          short: 'AI-powered platform for real-time Twitter data collection, analysis, and visualization.',
          long: `A robust full-stack application for collecting, analyzing, and visualizing Twitter data in real time. Supports flexible tweet collection via both the official Twitter API and a custom-built scraper, enabling comprehensive data gathering across various contexts. Features include:
\n\n- Multiple tweet fetching methods (List ID, Search Terms, Tweet ID, Username)\n- Automatic tweet translation\n- Live tweet screenshot generation\n- Clean, interactive dashboard for monitoring data flow and AI-driven analysis\n\nRole: Fullstack Developer – Designed and built the entire system from scratch, including backend infrastructure, scraper logic, and frontend UI/UX.\n\nStack: Next.js · TypeScript · Puppeteer · PostgreSQL\n\nLive Demo: https://aivibe.site/project/talk-for-peace/reports\n\nChallenges Solved:\n- Developed a resilient, anti-ban tweet scraper\n- Engineered a robust tweet screenshot and translation module\n- Ensured seamless integration between backend and frontend for real-time updates\n\nDuration: Jan – March 2025`
        },
        aiNftGenerator: {
          title: 'AI NFT Generator',
          short: 'Modern platform for generating AI art and minting NFTs on Ethereum.',
          long: `A modern, user-friendly platform for generating AI artwork and minting it as NFTs on the Ethereum blockchain. Built with Next.js, Tailwind CSS, and Web3 technologies.\n\nFeatures:\n- AI Art Generation (DALL-E 3)\n- NFT Minting on Sepolia testnet\n- IPFS Storage for metadata\n- Web3 wallet integration (MetaMask, WalletConnect)\n- NFT Gallery & Collection\n- Dark/Light mode, responsive design, modern UI/UX\n\nRole: Fullstack Developer – Built the entire platform, smart contract, and UI/UX.\n\nStack: Next.js · TypeScript · Tailwind CSS · Ethereum · OpenAI · Pinata · Alchemy · RainbowKit\n\nLive Demo: https://ai-nft-generator.com/\nSource: https://github.com/yourusername/ai-nft-generator`
        },
        telegramTradingBot: {
          title: 'Telegram-based Trading Bot',
          short: 'A robust Telegram bot for automated crypto trading with advanced features and protections.',
          long: `Designed and developed a robust Telegram-based trading bot tailored for cryptocurrency markets.

• Implemented advanced trading features, including: Automated buy/sell operations triggered by predefined conditions. Take profit and stop loss mechanisms to manage risk and maximize returns. Auto-snipe functionality for detecting and executing trades on promising tokens instantly. Signal-based trading, allowing buy and sell operations based on real-time market signals.
• Integrated comprehensive protections: Anti-MEV protection to minimize miner extractable value risks. Anti-rug features to avoid malicious token scams.
• Enhanced transaction precision with configurable buy/sell slippage settings and options to: Purchase specific amounts in ETH or a target number of tokens.
• Delivered an intuitive live pricing and PnL tracking system, ensuring transparency for users.
• Achieved seamless, real-time tracking of user portfolio performance and token analytics.

Stack: TypeScript · Ethers.js · MongoDB · Alchemy · Telegram Bot API · etc.`
        },
        marketingAva: {
          title: 'MarketingAva - AI Agent for Twitter Marketing',
          short: 'AI-powered agent for automating and optimizing Twitter marketing tasks.',
          long: `MarketingAva is your dedicated AI agent for Twitter marketing. Its primary goal is to promote and market products while automating key engagement tasks such as:\n\n- Following: Expanding reach by connecting with relevant accounts.\n- Liking: Engaging with tweets related to your niche.\n- Replying: Fostering interaction through direct engagement.\n- Quoting Tweets: Enhancing visibility by sharing tweets with added commentary.\n\nBy leveraging MarketingAva, you can streamline your marketing efforts and maintain an active, engaging presence on Twitter. MarketingAva is an Eliza Agent AI designed to promote and market.`
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
      education_school_high: 'High School',
      education_degree_high: 'Computer-Software',
      education_period_high: '2010 - 2014',
      education_school_fake: 'Fake University',
      education_degree_fake: 'Fake Degree',
      education_period_fake: '2000 - 2004',
      skills_list: {
        frontend: [
          { name: 'React', level: 95 },
          { name: 'Next.js', level: 95 },
          { name: 'TypeScript', level: 95 },
          { name: 'JavaScript (ES6+)', level: 95 },
          { name: 'Redux', level: 90 },
          { name: 'Tailwind CSS', level: 90 },
          { name: 'Styled Components', level: 85 },
          { name: 'Sass/SCSS', level: 85 },
          { name: 'Material-UI', level: 85 },
          { name: 'HTML5', level: 95 },
          { name: 'CSS3', level: 95 },
          { name: 'Framer Motion', level: 80 },
          { name: 'Jest', level: 85 },
          { name: 'Cypress', level: 80 },
        ],
        backend: [
          { name: 'Node.js', level: 95 },
          { name: 'Express.js', level: 90 },
          { name: 'NestJS', level: 90 },
          { name: 'GraphQL', level: 85 },
          { name: 'REST API', level: 95 },
          { name: 'Socket.io', level: 85 },
          { name: 'tRPC', level: 80 },
          { name: 'Python', level: 80 },
          { name: 'Go', level: 70 },
          { name: 'WebSockets', level: 85 },
        ],
        database: [
          { name: 'PostgreSQL', level: 90 },
          { name: 'MongoDB', level: 90 },
          { name: 'MySQL', level: 80 },
          { name: 'Redis', level: 85 },
          { name: 'Prisma ORM', level: 90 },
          { name: 'TypeORM', level: 80 },
          { name: 'Firebase', level: 80 },
        ],
        devops: [
          { name: 'Docker', level: 90 },
          { name: 'GitHub Actions', level: 85 },
          { name: 'CI/CD', level: 85 },
          { name: 'Nginx', level: 80 },
          { name: 'AWS', level: 80 },
          { name: 'Vercel', level: 90 },
          { name: 'Linux', level: 85 },
        ],
        other: [
          { name: 'Git', level: 95 },
          { name: 'Figma', level: 80 },
          { name: 'Jira', level: 80 },
          { name: 'Agile/Scrum', level: 85 },
          { name: 'OpenAI API', level: 80 },
          { name: 'Web3/Ethereum', level: 80 },
        ],
      },
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
        },
        twitterData: {
          title: 'پلتفرم جمع‌آوری و تحلیل داده‌های توییتر',
          short: 'پلتفرم هوشمند برای جمع‌آوری، تحلیل و نمایش داده‌های توییتر به صورت لحظه‌ای.',
          long: `یک اپلیکیشن فول‌استک قدرتمند برای جمع‌آوری، تحلیل و نمایش داده‌های توییتر به صورت لحظه‌ای. امکان جمع‌آوری داده‌ها از طریق API رسمی توییتر و اسکریپر اختصاصی، با قابلیت‌های:
\n\n- روش‌های مختلف جمع‌آوری توییت (لیست، جستجو، شناسه، نام کاربری)\n- ترجمه خودکار توییت‌ها\n- تولید اسکرین‌شات زنده از توییت‌ها\n- داشبورد تعاملی و تمیز برای پایش داده و تحلیل مبتنی بر هوش مصنوعی\n\nنقش: توسعه‌دهنده فول‌استک – طراحی و پیاده‌سازی کامل زیرساخت بک‌اند، منطق اسکریپر و رابط کاربری فرانت‌اند\n\nتکنولوژی‌ها: Next.js · TypeScript · Puppeteer · PostgreSQL\n\nدموی زنده: https://aivibe.site/project/talk-for-peace/reports\n\nچالش‌های حل‌شده:\n- توسعه اسکریپر مقاوم در برابر بن\n- ماژول اسکرین‌شات و ترجمه توییت\n- یکپارچه‌سازی بی‌نقص بک‌اند و فرانت‌اند برای به‌روزرسانی لحظه‌ای\n\nمدت زمان: ژانویه تا مارس ۲۰۲۵`
        },
        aiNftGenerator: {
          title: 'تولیدکننده NFT هوش مصنوعی',
          short: 'پلتفرم مدرن برای تولید هنر هوش مصنوعی و مینت NFT روی اتریوم.',
          long: `یک پلتفرم مدرن و کاربرپسند برای تولید آثار هنری با هوش مصنوعی و مینت آن‌ها به عنوان NFT روی بلاکچین اتریوم. ساخته شده با Next.js، Tailwind CSS و فناوری‌های Web3.\n\nویژگی‌ها:\n- تولید هنر با هوش مصنوعی (DALL-E 3)\n- مینت NFT روی شبکه Sepolia\n- ذخیره‌سازی متادیتا روی IPFS\n- اتصال کیف پول (MetaMask، WalletConnect)\n- گالری و مجموعه NFT\n- حالت تاریک/روشن، طراحی واکنش‌گرا و رابط کاربری مدرن\n\nنقش: توسعه‌دهنده فول‌استک – ساخت کل پلتفرم، قرارداد هوشمنع و رابط کاربری.\n\nتکنولوژی‌ها: Next.js · TypeScript · Tailwind CSS · Ethereum · OpenAI · Pinata · Alchemy · RainbowKit\n\nدموی زنده: https://ai-nft-generator.com/\nسورس: https://github.com/yourusername/ai-nft-generator`
        },
        telegramTradingBot: {
          title: 'ربات ترید مبتنی بر تلگرام',
          short: 'ربات قدرتمند تلگرام برای معاملات خودکار رمزارز با امکانات پیشرفته و محافظت‌های کامل.',
          long: `طراحی و توسعه ربات ترید قدرتمند مبتنی بر تلگرام، ویژه بازارهای رمزارز.

• پیاده‌سازی امکانات پیشرفته معاملاتی:
  - خرید و فروش خودکار بر اساس شرایط از پیش تعیین‌شده
  - مکانیزم‌های تعیین سود (Take Profit) و توقف ضرر (Stop Loss) برای مدیریت ریسک و حداکثرسازی سود
  - قابلیت Auto-snipe برای شناسایی و خرید سریع توکن‌های جدید و پرپتانسیل
  - معاملات سیگنالی بر اساس سیگنال‌های لحظه‌ای بازار
  - خرید و فروش چندگانه (Multi-buy, Multi-sell)
  - هر کیف پول در یک گروه از گس همان گروه استفاده می‌کند، حتی اگر کاربر چند گروه انتخاب کند
  - مقدار گس و مبلغ تراکنش به صورت تصادفی برای هر عملیات

• محافظت‌های جامع:
  - ضد MEV برای کاهش ریسک Miner Extractable Value
  - ضد Rug برای جلوگیری از کلاهبرداری توکن‌ها

• امکانات تکمیلی:
  - تنظیم دقیق اسلیپیج خرید و فروش و امکان خرید مقدار مشخص به ETH یا تعداد توکن هدف
  - سیستم نمایش زنده قیمت و سود/زیان (PnL) برای شفافیت کامل
  - رهگیری لحظه‌ای عملکرد پرتفوی و آنالیز توکن‌ها
  - معاملات خودکار بر اساس داده‌های زنجیره اتریوم
  - مانیتورینگ تراکنش‌ها برای شناسایی فعالیت احتمالی فلش‌بات‌ها
  - مدیریت درآمد و ارسال بخشی از سود به کیف پول مشخص
  - سطوح کاربری مختلف بر اساس سابقه تراکنش کاربران

تکنولوژی‌ها: TypeScript · Ethers.js · MongoDB · Alchemy · Telegram Bot API و ...`
        },
        marketingAva: {
          title: 'مارکتینگ‌آوا - ایجنت هوشمند بازاریابی توییتر',
          short: 'ایجنت هوشمند برای خودکارسازی و بهینه‌سازی بازاریابی در توییتر.',
          long: `مارکتینگ‌آوا ایجنت اختصاصی شما برای بازاریابی در توییتر است. هدف اصلی آن، ترویج و بازاریابی محصولات با خودکارسازی وظایف کلیدی تعامل مانند:\n\n- دنبال‌کردن: افزایش دسترسی با ارتباط با حساب‌های مرتبط.\n- لایک‌کردن: تعامل با توییت‌های مرتبط با حوزه شما.\n- پاسخ‌دادن: ایجاد تعامل مستقیم با کاربران.\n- کوت‌کردن توییت‌ها: افزایش دیده‌شدن با اشتراک‌گذاری توییت‌ها همراه با توضیح.\n\nبا استفاده از مارکتینگ‌آوا، می‌توانید تلاش‌های بازاریابی خود را بهینه و حضور فعالی در توییتر حفظ کنید. مارکتینگ‌آوا یک ایجنت هوشمند مبتنی بر الگوریتم Eliza برای ترویج و بازاریابی است.`
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
      education_school_high: 'دبیرستان',
      education_degree_high: 'رشته نرم‌افزار',
      education_period_high: '۱۳۸۹ - ۱۳۹۳',
      education_school_fake: 'دانشگاه ساختگی',
      education_degree_fake: 'مدرک ساختگی',
      education_period_fake: '۱۳۷۹ - ۱۳۸۳',
      skills_list: {
        frontend: [
          { name: 'ری‌اکت', level: 95 },
          { name: 'Next.js', level: 95 },
          { name: 'تایپ‌اسکریپت', level: 95 },
          { name: 'جاوااسکریپت (ES6+)', level: 95 },
          { name: 'ریداکس', level: 90 },
          { name: 'Tailwind CSS', level: 90 },
          { name: 'Styled Components', level: 85 },
          { name: 'Sass/SCSS', level: 85 },
          { name: 'Material-UI', level: 85 },
          { name: 'HTML5', level: 95 },
          { name: 'CSS3', level: 95 },
          { name: 'Framer Motion', level: 80 },
          { name: 'Jest', level: 85 },
          { name: 'Cypress', level: 80 },
        ],
        backend: [
          { name: 'Node.js', level: 95 },
          { name: 'Express.js', level: 90 },
          { name: 'NestJS', level: 90 },
          { name: 'GraphQL', level: 85 },
          { name: 'REST API', level: 95 },
          { name: 'Socket.io', level: 85 },
          { name: 'tRPC', level: 80 },
          { name: 'پایتون', level: 80 },
          { name: 'Go', level: 70 },
          { name: 'وب‌سوکت', level: 85 },
        ],
        database: [
          { name: 'PostgreSQL', level: 90 },
          { name: 'MongoDB', level: 90 },
          { name: 'MySQL', level: 80 },
          { name: 'Redis', level: 85 },
          { name: 'Prisma ORM', level: 90 },
          { name: 'TypeORM', level: 80 },
          { name: 'Firebase', level: 80 },
        ],
        devops: [
          { name: 'Docker', level: 90 },
          { name: 'GitHub Actions', level: 85 },
          { name: 'CI/CD', level: 85 },
          { name: 'Nginx', level: 80 },
          { name: 'AWS', level: 80 },
          { name: 'Vercel', level: 90 },
          { name: 'لینوکس', level: 85 },
        ],
        other: [
          { name: 'Git', level: 95 },
          { name: 'Figma', level: 80 },
          { name: 'Jira', level: 80 },
          { name: 'Agile/Scrum', level: 85 },
          { name: 'OpenAI API', level: 80 },
          { name: 'Web3/Ethereum', level: 80 },
        ],
      },
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