import { useParams, Link } from 'react-router-dom';
import portfolioData from './portfolio.json';
import { useTranslation } from 'react-i18next';

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const item = portfolioData.find(p => p.id === id);

  if (!item) {
    return <div className="p-8 text-center">Portfolio item not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-8 animate-fade-in">
      <Link to="/" className="text-blue-500 hover:underline">&larr; {t('portfolio.label')}</Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{t(item.titleKey)}</h1>
      <div className="mb-4 text-gray-600 dark:text-gray-300">{t(item.longDescKey)}</div>
      <div className="flex flex-wrap gap-4 mb-4">
        {item.images.map((img, idx) => (
          <img key={idx} src={img} alt={t(item.titleKey) + ' ' + (idx + 1)} className="w-40 h-28 object-cover rounded shadow" />
        ))}
      </div>
      {item.video && (
        <div className="mb-4">
          <video controls className="w-full rounded">
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="mb-4">
        <span className="font-semibold">{t('tech_used')}: </span>
        {item.tech.join(', ')}
      </div>
      <div className="flex gap-4 mb-4">
        {item.demo && <a href={item.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{t('live_demo')}</a>}
        {item.source && <a href={item.source} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">{t('source_code')}</a>}
      </div>
    </div>
  );
};

export default PortfolioDetail; 