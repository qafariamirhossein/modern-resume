import { useTranslation } from 'react-i18next';

const timeline = [
  { year: '2015', event: 'Started university' },
  { year: '2017', event: 'Internship at TechCorp' },
  { year: '2019', event: 'Graduated and joined WebDev Inc.' },
  { year: '2022', event: 'Promoted to Senior Developer' },
];

const Timeline = () => {
  const { t } = useTranslation();
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