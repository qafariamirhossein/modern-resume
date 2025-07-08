import { useTranslation } from 'react-i18next';

const hobbies = [
  { name: 'Photography', icon: '📷', description: 'Capturing moments and landscapes.' },
  { name: 'Traveling', icon: '✈️', description: 'Exploring new places and cultures.' },
  { name: 'Music', icon: '🎵', description: 'Listening and composing music.' },
];

const Hobbies = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {hobbies.map((item, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow flex flex-col items-center w-48 animate-fade-in">
          <div className="text-4xl mb-2">{item.icon}</div>
          <div className="font-bold text-lg mb-1">{item.name}</div>
          <div className="text-sm text-center">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Hobbies; 