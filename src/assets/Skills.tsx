import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaServer, FaDatabase, FaTools, FaPuzzlePiece } from 'react-icons/fa';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const ProgressBar = ({ value, trigger }: { value: number; trigger: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (trigger) {
      setDisplayValue(0);
      let start = 0;
      const step = () => {
        start += Math.max(1, Math.round(value / 10)); // 10 steps
        if (start >= value) {
          setDisplayValue(value);
        } else {
          setDisplayValue(start);
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    } else {
      setDisplayValue(0);
    }
  }, [trigger, value]);
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-700"
        style={{ width: `${displayValue}%` }}
      ></div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const skillsObj = t('skills_list', { returnObjects: true }) as Record<string, { name: string; level: number }[]>;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Category display names (try translation, fallback to key) and icons
  const categoryLabels: Record<string, string> = {
    frontend: t('skills_category_frontend', 'Frontend'),
    backend: t('skills_category_backend', 'Backend'),
    database: t('skills_category_database', 'Database'),
    devops: t('skills_category_devops', 'DevOps'),
    other: t('skills_category_other', 'Other'),
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <FaReact color="#61dafb" style={{ filter: 'drop-shadow(0 2px 6px #61dafbaa)' }} className="text-2xl md:text-3xl mr-2" />,
    backend: <FaServer color="#a259ff" style={{ filter: 'drop-shadow(0 2px 6px #a259ff99)' }} className="text-2xl md:text-3xl mr-2" />,
    database: <FaDatabase color="#4f8cff" style={{ filter: 'drop-shadow(0 2px 6px #4f8cff99)' }} className="text-2xl md:text-3xl mr-2" />,
    devops: <FaTools color="#27ae60" style={{ filter: 'drop-shadow(0 2px 6px #27ae60aa)' }} className="text-2xl md:text-3xl mr-2" />,
    other: <FaPuzzlePiece color="#f857a6" style={{ filter: 'drop-shadow(0 2px 6px #f857a699)' }} className="text-2xl md:text-3xl mr-2" />,
  };

  return (
    <div ref={ref} className="flex flex-col gap-8">
      {Object.entries(skillsObj).map(([category, skills]) => {
        const isOpen = openCategories.includes(category);
        const toggleCategory = () => {
          setOpenCategories(prev =>
            prev.includes(category)
              ? prev.filter(c => c !== category)
              : [...prev, category]
          );
        };
        return (
          <div key={category}>
            <button
              className="w-full text-left text-lg font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm"
              onClick={toggleCategory}
              aria-expanded={isOpen}
              aria-controls={`skills-panel-${category}`}
            >
              <span className="sea-float">{categoryIcons[category]}</span>
              {categoryLabels[category] || category}
              <span className="ml-2">
                {isOpen
                  ? <FaChevronDown className="text-blue-700 dark:text-blue-300" />
                  : <FaChevronRight className="text-blue-700 dark:text-blue-300" />}
              </span>
            </button>
            {isOpen && (
              <div
                id={`skills-panel-${category}`}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in"
              >
                {skills.map(skill => (
                  <div key={skill.name} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-xs opacity-60">{skill.level}%</span>
                    </div>
                    <ProgressBar value={skill.level} trigger={visible} />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Skills; 