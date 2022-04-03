import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import BetSlipCard from 'components/_common/BetSlipCard';

const BetSlipForm = ({ placedBets, removeBet, resetPlacedBets }) => {
  const [totalStake, setTotalStake] = useState('');
  const [totalOdds, setTotalOdds] = useState(0);
  const [returnValue, setReturnValue] = useState(0);

  const [bonusChecked, setBonusChecked] = useState(false);

  const [showBonus, setShowBonus] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const onChange = (event, setState) => setState(event?.target?.value);

  const handleChangeBonus = () => {
    console.log({ bonusChecked });
    if (!bonusChecked) {
      setTotalOdds((oldOdds) => Number((oldOdds * 1.5).toFixed(2)));
    } else {
      setTotalOdds((oldOdds) => Number((oldOdds / 1.5).toFixed(2)));
    }
    setBonusChecked(!bonusChecked);
  };

  useEffect(() => {
    console.log({ cookies: Cookies.get('previousBonusApplied') });
    if (Cookies.get('previousBonusApplied')) {
      setShowBonus(false);
    }
  }, [totalStake]);

  useEffect(() => {
    const odds = placedBets.reduce((total, bet) => {
      if (!bet) return total;

      if (bet?.odds) {
        total += Number(bet?.odds);
      }
      return total;
    }, 0);
    console.log({ odds });
    setTotalOdds(Number(odds).toFixed(2));
  }, [placedBets]);

  useEffect(() => {
    setReturnValue((totalStake * totalOdds).toFixed(2));
  }, [totalStake, totalOdds]);

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [showMessage]);

  return (
    <form
      onSubmit={(event) => {
        console.log({ event });
        event.preventDefault();
        resetPlacedBets();
        setTotalStake('');
        setBonusChecked(false);
        setShowMessage(true);
        Cookies.set('previousBonusApplied', true);
      }}
      className='grey-border my-8 ml-8 top-20 sticky rounded-xl'
    >
      <p className='grey-border rounded-t-xl p-3 bg-grey-100'>Accumulator Betslip</p>

      {placedBets.length > 0 ? (
        <div className='p-3 h-full overflow-auto max-h-[40vh]'>
          {placedBets?.map((placedBet, index) => {
            return (
              <BetSlipCard
                key={`bet-slip-card-${index}`}
                {...placedBet}
                removeBet={removeBet}
              />
            );
          })}
        </div>
      ) : (
        <div className='w-full h-full flex flex-col justify-center items-center p-3 min-h-[200px]'>
          <span className='material-icons text-gray-300 text-[100px]'>casino</span>
          <span className='text-gray-400'>No bets placed Yet!</span>
          <span className='text-gray-400'>Select a match to place a bet on...</span>
        </div>
      )}
      <div className='p-3 bg-grey-100 rounded-b-xl'>
        <div className='flex flex-row justify-between items-center p-2'>
          <label className='font-extrabold' htmlFor='total-stake'>
            Total Stake
          </label>

          <div className='w-full max-w-[60%] relative flex justify-center items-center'>
            <div className='flex items-center justify-center absolute left-[2px] bg-grey-100 h-[90%] w-[30px] font-bold rounded-l-md'>
              £
            </div>
            <input
              id='total-stake'
              type='number'
              onChange={(event) => onChange(event, setTotalStake)}
              value={totalStake}
              placeholder='Type total Stake...'
              className='grey-border pr-2 pt-2 pb-2 pl-10 rounded-md w-full'
            />
          </div>
        </div>
        {totalStake && showBonus && (
          <div className='mb-4 pb-2 pt-2 ml-2 mr-2 flex items-center bg-yellow-100 border-y border-gray-300'>
            <input
              type='checkbox'
              id='check-box'
              name='apply-bonus'
              checked={bonusChecked}
              onChange={handleChangeBonus}
              className='absolute h-4 w-4 opacity-0'
            />
            <div className='grey-border flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md bg-white p-2'>
              {bonusChecked && (
                <div className='h-1/2 w-1/2 p-[5px] rounded-sm bg-orange-100' />
              )}
            </div>
            <label
              htmlFor='check-box'
              className='select-none text-orange-100 font-extrabold pt-2 pb-2 pr-2 pl-4'
            >
              Apply bonus (boost odds by 1.5x)
            </label>
          </div>
        )}
        {totalOdds > 0 && (
          <div className='pb-2 pt-2 ml-2 mr-2 flex flex-row justify-between border-y border-grey-300'>
            <span className='font-extrabold'>{`Total Odds:`}</span>
            <span className='max-w-[60%] w-full block'>{`  ${totalOdds}`}</span>
          </div>
        )}
        {returnValue > 0 && (
          <div className='pb-2 pt-2 ml-2 mr-2 mb-4 flex flex-row justify-between  border-y border-grey-300'>
            <span className='font-extrabold'>{`To Return:`}</span>
            <span className='max-w-[60%] w-full block'>{`£ ${returnValue}`}</span>
          </div>
        )}
        <div className='flex flex-row'>
          {showMessage && <p className='text-gray-400'>Your bet has been placed</p>}
          <button
            type='submit'
            disabled={!totalStake || placedBets.length === 0}
            className={`${
              !totalStake || placedBets.length === 0
                ? 'border border-grey-300 bg-grey-100 text-gray-400'
                : 'bg-green-500 text-white'
            } p-2  ml-auto block`}
          >
            Place bet
          </button>
        </div>
      </div>
    </form>
  );
};

BetSlipForm.defaultProps = {
  placedBets: [],
  removeBet: () => {},
  resetPlacedBets: () => {},
};

BetSlipForm.propTypes = {
  placedBets: PropTypes.array,
  removeBet: PropTypes.func,
  resetPlacedBets: PropTypes.func,
};

export default BetSlipForm;
