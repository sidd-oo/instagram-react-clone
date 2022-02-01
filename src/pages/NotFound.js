import React from 'react';
import { useEffect } from 'react/cjs/react.development';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not Found!';
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">NOT FOUND!</p>
      </div>
    </div>
  );
};

export default NotFound;
