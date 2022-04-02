import React from 'react';

const MatchCard = ({ competition, contracts, game, id, name }) => {
  return (
    <div className='flex flex-col border rounded-xl border-gray-300 my-8'>
      <p className='p-3 bg-grey-100 border-b border-gray-300'>
        {game} - {competition}
      </p>
      <div className='flex flex-row'>
        {contracts?.map(({ id, name, odds }) => {
          return (
            <div
              className={`${
                contracts.length === 3 ? 'w-1/3' : 'w-1/2'
              } flex flex-col justify-center items-center p-10`}
            >
              <p>{name}</p>
              <button>{odds}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

MatchCard.defaultProps = {};

MatchCard.propTypes = {};

export default MatchCard;
