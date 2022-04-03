import React from 'react';

const Header = () => {
  return (
    <nav className='w-full p-4 bg-purple-100 sticky top-0 z-30'>
      <p className='text-white container font-bold'>MIDNITE</p>
    </nav>
  );
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
