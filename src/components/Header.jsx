import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="bg-blue-600 py-4 flex items-center justify-center">
      <div className="flex items-center space-x-1">
        <img src={logo} alt="React Logo" className="h-15 w-15 md:h-14 md:w-14" />
        <h1 className="text-white text-2xl font-bold">UserInsight</h1>
      </div>
    </header>
  );
};

export default Header;
