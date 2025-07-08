import { useTranslation } from 'react-i18next';

const Timeline = () => {
  const { t } = useTranslation();
  const timeline = t('timeline', { returnObjects: true }) as { year: string; event: string }[];
  return (
    <div className="relative border-l-2 border-blue-400 dark:border-blue-700 pl-6">
      {timeline.map((item, idx) => (
        <div key={idx} className="mb-8 last:mb-0 animate-fade-in">
          <div className="absolute -left-3 w-6 h-6 bg-blue-400 dark:bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
            {item.year}
          </div>
          <div className="ml-8">
            <div className="font-semibold">{item.event}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 