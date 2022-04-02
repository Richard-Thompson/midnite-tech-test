import React, { useEffect, useState } from 'react';
import Header from 'components/_layout/Header';
import {
  BASE_URL,
  MATCHES_ENDPOINT,
} from 'components/_utility/_constants/apiEndpoints';
import GET from 'components/_utility/api.get';
import MatchList from 'components/MatchList/MatchList';
import BetSlipForm from 'components/BetSlipForm/BetSlipForm';

const App = () => {
  const [matches, setMatches] = useState(null);
  const fetchData = async () => {
    const { data } = await GET({ url: `${BASE_URL}${MATCHES_ENDPOINT}` });
    console.log({ data });
    setMatches(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='App'>
      <Header />
      <main className='flex flex-col lg:flex-row container'>
        <div className='w-full lg:w-[60%]'>
          <MatchList matches={matches} />
        </div>
        <div className='w-full lg:w-[40%]'>
          <BetSlipForm />
        </div>
      </main>
    </div>
  );
};

export default App;
