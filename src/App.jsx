import React, { useEffect } from 'react';
import Header from 'components/_layout/Header';
import { BASE_URL, MATCHES_ENDPOINT } from 'components/_constants/apiEndpoints';
import GET from 'components/_utility/api.get';

const App = () => {
  useEffect(async () => {
    const data = await GET({ url: `${BASE_URL}${MATCHES_ENDPOINT}` });
    console.log({ data });
  }, []);
  return (
    <div className='App'>
      <Header />
    </div>
  );
};

export default App;
