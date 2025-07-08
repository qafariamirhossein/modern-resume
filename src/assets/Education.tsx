import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow animate-fade-in">
      <div className="flex-shrink-0 w-16 h-16 bg-blue-200 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl font-bold">
        <span>🏫</span>
      </div>
      <div>
        <div className="font-bold text-lg">{t('education_school')}</div>
        <div className="text-sm opacity-80">{t('education_degree')}</div>
        <div className="text-xs opacity-60">{t('education_period')}</div>
      </div>
    </div>
  );
};

export default Education; 