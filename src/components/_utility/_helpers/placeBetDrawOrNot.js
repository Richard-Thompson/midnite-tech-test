const placeBetOrNot = ({
  contract = {},
  contracts = [],
  placeBet = () => {},
  draw = false,
}) => {
  if (draw) {
    placeBet({
      contract,
      players: contracts.filter((item) => item?.name !== 'Draw') || [],
    });
  } else {
    const filtered =
      contracts.filter(
        (item) => item?.name !== 'Draw' && item?.name !== contract?.name
      ) || '';

    placeBet({
      contract,
      players: filtered,
    });
  }
};

export default placeBetOrNot;
