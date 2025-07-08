import { useTranslation } from 'react-i18next';
import { FaTelegram, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-justify whitespace-pre-line animate-fade-in">
      <div className="mb-4">{t('about_text')}</div>
      <div className="flex flex-col gap-2 text-sm mb-4">
        {t('age') && <div><b>Age:</b> {t('age')}</div>}
        {t('phone') && (
          <div className="flex items-center gap-2">
            <FaPhone className="inline-block text-blue-500" />
            <a href={`tel:${t('phone')}`} className="hover:underline">{t('phone')}</a>
          </div>
        )}
      </div>
      <div className="flex gap-4 mt-2">
        <a href={t('telegram')} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegram className="text-2xl text-blue-400 hover:text-blue-600 transition-colors" />
        </a>
        <a href={t('linkedin')} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900 transition-colors" />
        </a>
        <a href={t('github')} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl text-gray-800 dark:text-gray-200 hover:text-black transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe; 