import { useTranslation } from 'react-i18next';

const Awards = () => {
  const { t } = useTranslation();
  const awards = t('awards', { returnObjects: true }) as { title: string; issuer: string; date: string; description: string }[];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {awards.map((item, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow animate-fade-in">
          <div className="font-bold text-lg mb-1">{item.title}</div>
          <div className="text-xs opacity-60 mb-1">{item.issuer} - {item.date}</div>
          <div className="text-sm">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Awards; 