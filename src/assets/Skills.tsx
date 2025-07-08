import { useTranslation } from 'react-i18next';

const ProgressBar = ({ value }: { value: number }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
    <div
      className="bg-blue-500 h-2 rounded-full transition-all duration-700"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();
  const skills = t('skills_list', { returnObjects: true }) as { name: string; level: number }[];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skills.map(skill => (
        <div key={skill.name} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex flex-col gap-2 animate-fade-in">
          <div className="flex justify-between items-center">
            <span className="font-semibold">{skill.name}</span>
            <span className="text-xs opacity-60">{skill.level}%</span>
          </div>
          <ProgressBar value={skill.level} />
        </div>
      ))}
    </div>
  );
};

export default Skills; 