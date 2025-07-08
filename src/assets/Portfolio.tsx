import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const portfolio = t('portfolio_items', { returnObjects: true }) as { title: string; description: string; link: string; image: string }[];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {portfolio.map(item => (
        <a key={item.title} href={item.link} className="block bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden hover:scale-105 transition-transform animate-fade-in">
          <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
          <div className="p-4">
            <div className="font-bold text-lg mb-1">{item.title}</div>
            <div className="text-sm opacity-80">{item.description}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Portfolio; 