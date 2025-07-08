import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

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
  const skills = t('skills_list', { returnObjects: true }) as { name: string; level: number }[];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {skills.map(skill => (
        <div key={skill.name} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow flex flex-col gap-2 animate-fade-in">
          <div className="flex justify-between items-center">
            <span className="font-semibold">{skill.name}</span>
            <span className="text-xs opacity-60">{skill.level}%</span>
          </div>
          <ProgressBar value={skill.level} trigger={visible} />
        </div>
      ))}
    </div>
  );
};

export default Skills; 