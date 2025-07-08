import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => (
  <section
    id={id}
    className="my-16 p-8 rounded-3xl shadow-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/30 dark:border-gray-700/30 relative overflow-hidden animate-fade-in"
  >
    <div className="flex items-center gap-3 mb-6">
      {icon && <span className="text-3xl">{icon}</span>}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

export default Section; 