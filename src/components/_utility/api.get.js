import axios from 'axios';
import qs from 'qs';

const GET = async ({ url }) => {
  const options = {
    method: 'GET',
    url: `${url}`,
  };

  let response;

  try {
    response = await axios(options);
  } catch (error) {
    console.log({ error });
  }

  return response;
};

export default GET;
