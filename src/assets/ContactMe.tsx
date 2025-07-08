import { useTranslation } from 'react-i18next';
import { FaTelegram, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

const iconButtonStyle =
  'w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors duration-200 text-xl';

const ContactMe = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4 mx-auto animate-fade-in border border-gray-100 dark:border-gray-700">
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
        {t('contact_email')}
      </div>
      <div className="text-base text-gray-600 dark:text-gray-300 mb-2 text-center">
        {t('contact_message')}
      </div>
      <div className="w-full border-t border-gray-200 dark:border-gray-700 my-2" />
      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-center">
        {t('contact_socials.part1')}{' '}
        <a href={t('telegram')} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700 transition-colors" title="Telegram">{t('contact_socials.telegram')}</a>,{' '}
        <a href={t('linkedin')} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700 transition-colors" title="LinkedIn">{t('contact_socials.linkedin')}</a>{' '}{t('contact_socials.or')}{' '}
        <a href={t('github')} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700 transition-colors" title="GitHub">{t('contact_socials.github')}</a>.
      </div>
      <div className="flex gap-3 w-full justify-center mt-2">
        <a
          href={t('telegram')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          title="Telegram"
          className={iconButtonStyle + ' text-blue-400 hover:text-blue-600'}
        >
          <FaTelegram />
        </a>
        <a
          href={t('linkedin')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          className={iconButtonStyle + ' text-blue-700 hover:text-blue-900'}
        >
          <FaLinkedin />
        </a>
        <a
          href={t('github')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          className={iconButtonStyle + ' text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white'}
        >
          <FaGithub />
        </a>
      </div>
      <div className="w-full border-t border-gray-200 dark:border-gray-700 my-2" />
      <div className="flex flex-col gap-2 w-full items-center mt-2">
        <a
          href={`mailto:${t('contact_email')}`}
          className="flex items-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-colors text-base font-medium"
          aria-label="Send Email"
          title="Send Email"
        >
          <FaEnvelope /> {t('contact_email')}
        </a>
        {t('phone') && (
          <a
            href={`tel:${t('phone')}`}
            className="flex items-center gap-2 px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-base font-medium"
            aria-label="Call Phone"
            title={t('phone')}
          >
            <FaPhone /> {t('phone')}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactMe; 