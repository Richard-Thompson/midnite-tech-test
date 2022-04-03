import React from 'react';
import PropTypes from 'prop-types';

const BetSlipCard = ({ id, matchName, name, odds, removeBet }) => (
  <div className='flex flex-col'>
    <div className='flex justify-between items-center p-1'>
      <span className='font-extrabold'>{name}</span>
      <span className='pl-2 pr-2 pt-[3px] pb-[3px] bg-grey-500 text-white rounded-md'>
        {odds}
      </span>
    </div>
    <div className='flex justify-between items-center p-1'>
      <span>{matchName}</span>
      <button
        type='button'
        onClick={() => {
          if (id) {
            removeBet({ betId: id });
          }
        }}
        className='text-red-500 underline'
      >
        Remove
      </button>
    </div>
  </div>
);

BetSlipCard.defaultProps = {
  matchName: '',
  name: '',
  odds: 0,
  removeBet: () => {},
  id: null,
};

BetSlipCard.propTypes = {
  matchName: PropTypes.string,
  name: PropTypes.string,
  odds: PropTypes.string,
  removeBet: PropTypes.func,
  id: PropTypes.number,
};

export default BetSlipCard;
