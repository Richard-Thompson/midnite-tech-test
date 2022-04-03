import React from 'react';
import PropTypes from 'prop-types';
import MatchCard from 'components/_common/MatchCard';

const MatchList = ({ matches, placeBet }) => {
  return (
    matches?.length > 0 &&
    matches?.map((match, index) => (
      <MatchCard
        key={`card-${match?.name}-${index}`}
        {...match}
        placeBet={placeBet}
      />
    ))
  );
};

MatchList.defaultProps = {
  matches: [],
  placeBet: () => {},
};

MatchList.propTypes = {
  matches: PropTypes.array,
  placeBet: PropTypes.func,
};

export default MatchList;
