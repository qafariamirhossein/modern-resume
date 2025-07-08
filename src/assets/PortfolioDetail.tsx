import { useParams, Link } from 'react-router-dom';
import portfolioData from './portfolio.json';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const item = portfolioData.find(p => p.id === id);

  if (!item) {
    return <div className="p-8 text-center">Portfolio item not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-8 animate-fade-in">
      <Link to="/" className="text-blue-500 hover:underline">&larr; {t('portfolio.label')}</Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{t(item.titleKey)}</h1>
      <div className="mb-4 text-gray-600 dark:text-gray-300">{t(item.longDescKey)}</div>
      {/* Image Carousel */}
      <div className="mb-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="rounded-lg shadow-lg"
        >
          {item.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={t(item.titleKey) + ' ' + (idx + 1)}
                className="w-full max-h-[480px] object-contain rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => window.open(img, '_blank')}
                title={t(item.titleKey) + ' (click to open)'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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