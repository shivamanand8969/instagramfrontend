import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://localhost:8000',
});

// baseURL:"http://localhost:8800"
//  baseURL: 'https://sapthapadhi.bloomitsolutions.co.in',

