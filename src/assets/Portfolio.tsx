import { useTranslation } from 'react-i18next';
import portfolioData from './portfolio.json';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {portfolioData.map(item => (
        <Link
          key={item.id}
          to={`/portfolio/${item.id}`}
          className="block bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden hover:scale-105 transition-transform animate-fade-in"
        >
          <img src={item.images[0]} alt={t(item.titleKey)} className="w-full h-32 object-cover" />
          <div className="p-4">
            <div className="font-bold text-lg mb-1">{t(item.titleKey)}</div>
            <div className="text-sm opacity-80">{t(item.shortDescKey)}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Portfolio; 