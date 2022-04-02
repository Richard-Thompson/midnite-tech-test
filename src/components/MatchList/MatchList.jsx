import React from 'react';
import PropTypes from 'prop-types';
import MatchCard from 'components/_common/MatchCard';

const MatchList = ({ matches }) => {
  return matches?.length > 0 && matches?.map((match) => <MatchCard {...match} />);
};

MatchList.defaultProps = {
  matches: [],
};

MatchList.propTypes = {
  matches: PropTypes.array,
};

export default MatchList;
