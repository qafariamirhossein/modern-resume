import { useTranslation } from 'react-i18next';

const educationEntries = [
  {
    school: (t: (key: string) => string) => t('education_school'),
    degree: (t: (key: string) => string) => t('education_degree'),
    period: (t: (key: string) => string) => t('education_period'),
    icon: '🏫',
    isTranslated: true,
  },
  {
    school: (t: (key: string) => string) => t('education_school_high'),
    degree: (t: (key: string) => string) => t('education_degree_high'),
    period: (t: (key: string) => string) => t('education_period_high'),
    icon: '🏫',
    isTranslated: false,
  },
  // {
  //   school: (t: (key: string) => string) => t('education_school_fake'),
  //   degree: (t: (key: string) => string) => t('education_degree_fake'),
  //   period: (t: (key: string) => string) => t('education_period_fake'),
  //   icon: '🎓',
  //   isTranslated: false,
  // },
];

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      {educationEntries.map((entry, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow animate-fade-in"
        >
          <div className="flex-shrink-0 w-16 h-16 bg-blue-200 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl font-bold">
            <span>{entry.icon}</span>
          </div>
          <div>
            <div className="font-bold text-lg">{entry.school(t)}</div>
            <div className="text-sm opacity-80">{entry.degree(t)}</div>
            <div className="text-xs opacity-60">{entry.period(t)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education; 