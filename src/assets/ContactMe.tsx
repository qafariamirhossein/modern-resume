import { useTranslation } from 'react-i18next';

const ContactMe = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow flex flex-col items-center gap-2 animate-fade-in">
      <div className="text-lg font-semibold">{t('contact_email')}</div>
      <div className="text-sm opacity-80 mb-2">{t('contact_message')}</div>
      <a href={`mailto:${t('contact_email')}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Send Email</a>
    </div>
  );
};

export default ContactMe; 