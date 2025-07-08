import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials', { returnObjects: true }) as { name: string; role: string; text: string; avatar: string }[];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {testimonials.map((item, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow flex flex-col items-center animate-fade-in">
          <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full mb-2" />
          <div className="font-bold text-lg mb-1">{item.name}</div>
          <div className="text-xs opacity-60 mb-2">{item.role}</div>
          <div className="italic text-center">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials; 