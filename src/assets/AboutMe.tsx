import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-justify whitespace-pre-line animate-fade-in">
      <div className="flex flex-col items-center mb-4">
        <img
          src="/images/me.png"
          alt="Profile"
          className="w-56 h-56 rounded-full object-cover mb-4 border-4 border-gray-300 dark:border-gray-600 shadow-lg"
        />
        <div>{t('about_text')}</div>
      </div>
    </div>
  );
};

export default AboutMe; 