
import React from 'react';

interface PageWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, description, children }) => {
  return (
    <div className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {description}
      </p>
      {children}
    </div>
  );
};

export default PageWrapper;
