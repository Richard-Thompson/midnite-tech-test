import React from 'react';
import PropTypes from 'prop-types';
import placeBetOrNot from 'components/_utility/_helpers/placeBetDrawOrNot';

const MatchCard = ({ competition, contracts, game, placeBet }) => (
  <div className='grey-border flex flex-col rounded-xl my-8'>
    <p className='p-3 bg-grey-100 border-b border-gray-300 rounded-t-xl font-bold'>
      {game} - {competition}
    </p>
    <div className='flex flex-row'>
      {contracts?.map((contract, index) => {
        const { id, name, odds } = contract;
        return (
          <div
            key={`card-${name}-${index}`}
            className={`match-contract relative ${
              contracts.length === 3 ? 'w-1/3' : 'w-1/2'
            } flex flex-col justify-center items-center p-10`}
          >
            <p className='font-extrabold mb-2'>{name}</p>
            <button
              type='button'
              onClick={() => {
                placeBetOrNot({
                  contracts,
                  contract,
                  placeBet,
                  draw: contract.name === 'Draw',
                });
              }}
              className='p-2 bg-grey-500 text-white rounded-md'
            >
              {odds}
            </button>
          </div>
        );
      })}
    </div>
  </div>
);

MatchCard.defaultProps = {
  competition: '',
  contracts: [],
  game: '',
  placeBet: () => {},
};

MatchCard.propTypes = {
  competition: PropTypes.string,
  contracts: PropTypes.array,
  game: PropTypes.string,
  placeBet: PropTypes.func,
};

export default MatchCard;
