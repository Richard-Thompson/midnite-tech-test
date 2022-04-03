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
  const [placedBets, setPlacedBets] = useState([]);

  const fetchData = async () => {
    const { data } = await GET({ url: `${BASE_URL}${MATCHES_ENDPOINT}` });
    console.log({ data });
    setMatches(data);
  };

  useEffect(() => {
    // Initial Load
    fetchData();
    // live Update every 5 seconds
    // setInterval(async () => {
    //   await fetchData();
    // }, 5000);
  }, []);

  useEffect(() => {
    const newOdds = placedBets.map((contract) => {
      return {
        ...contract,
        odds: matches.reduce((newOdds, match) => {
          if (!match) return newOdds;

          const newContractOdds = match?.contracts?.filter(
            (item) => item?.id === contract?.id
          );

          if (newContractOdds[0]) {
            newOdds = newContractOdds[0]?.odds;
          }
          return newOdds;
        }, 0),
      };
    });

    setPlacedBets(newOdds);
  }, [matches]);

  const generateMatchName = ({ players, contract }) => {
    if (players.length > 1) {
      return players?.map((player, index) => {
        if (index === 0) return `${player?.name || ''} vs `;
        return `${player?.name || ''}`;
      });
    } else {
      return `${contract?.name} vs ${players[0]?.name}`;
    }
  };

  const placeBet = ({ contract, players }) => {
    if (placedBets.filter((item) => item.id === contract.id).length > 0) return;

    setPlacedBets((oldState) => [
      ...oldState,
      { ...contract, matchName: generateMatchName({ players, contract }) },
    ]);
  };

  const removeBet = ({ betId }) =>
    setPlacedBets((oldState) => [...oldState.filter((bet) => bet.id !== betId)]);

  const resetPlacedBets = () => setPlacedBets([]);

  const cardlistProps = {
    placeBet,
    matches,
  };

  const betSlipFormProps = {
    removeBet,
    placedBets,
    resetPlacedBets,
  };
  return (
    <div className='App'>
      <Header />
      <main className='flex flex-col lg:flex-row container'>
        <div className='w-full lg:w-[60%]'>
          <MatchList {...cardlistProps} />
        </div>
        <div className='w-full lg:w-[40%]'>
          <BetSlipForm {...betSlipFormProps} />
        </div>
      </main>
    </div>
  );
};

export default App;
