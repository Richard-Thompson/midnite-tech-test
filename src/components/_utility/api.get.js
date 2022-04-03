import axios from 'axios';

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
