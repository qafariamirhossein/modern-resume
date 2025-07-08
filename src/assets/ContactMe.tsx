import { useTranslation } from 'react-i18next';

const ContactMe = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow flex flex-col items-center gap-2 animate-fade-in">
      <div className="text-lg font-semibold">{t('contact_email')}</div>
      <div className="text-sm opacity-80 mb-2">{t('contact_message')}</div>
      <div className="text-sm opacity-80 mb-2">
        {t('contact_socials.part1')}{' '}
        <a href={t('telegram')} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{t('contact_socials.telegram')}</a>,{' '}
        <a href={t('linkedin')} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{t('contact_socials.linkedin')}</a>{' '}{t('contact_socials.or')}{' '}
        <a href={t('github')} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{t('contact_socials.github')}</a>.
      </div>
      <a href={`mailto:${t('contact_email')}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Send Email</a>
    </div>
  );
};

export default ContactMe; 