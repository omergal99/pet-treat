import HttpService from './HttpService';

const DOGS_URL = HttpService.getUrl('dogs');

function query() {
  return HttpService.get(`${DOGS_URL}`)
    .then(res => res.data)
    .catch((err) => err)
}

// async function query() {
//   try {
//     let res = HttpService.get(`${DOGS_URL}`);
//     return res.data;
//   }
//   catch (err) {
//     return err;
//   }
// }

export default {
  query,
}