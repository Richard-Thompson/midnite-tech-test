import React from 'react';
import PageContainer from 'components/_layout/Container';

const Header = () => {
  return (
    <nav className='w-full p-4 bg-purple-100'>
      <p className='text-white container font-bold'>MIDNITE</p>
    </nav>
  );
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
