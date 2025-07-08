import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="my-12 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

export default Section; 