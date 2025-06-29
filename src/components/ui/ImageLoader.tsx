import React from 'react';

const ImageLoader: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
      <svg className="w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
      </svg>
    </div>
  );
};

export default ImageLoader;
