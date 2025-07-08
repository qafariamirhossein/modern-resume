import { useTranslation } from 'react-i18next';

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fa' : 'en');
    document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  };
  return (
    <button onClick={toggleLang} className="ml-2 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700">
      {i18n.language === 'en' ? 'FA' : 'EN'}
    </button>
  );
} 