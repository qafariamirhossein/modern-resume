import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-justify whitespace-pre-line animate-fade-in">
      {t('about_text')}
    </div>
  );
};

export default AboutMe; 