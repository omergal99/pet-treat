import HttpService from './HttpService';

const DOGS_URL = HttpService.getUrl('dogs');

function query() {
  return HttpService.get(`${DOGS_URL}`)
    .then(res => res.data)
    .catch((err) => err)
}

// async function query() {
//   try {
//     let res = await HttpService.get(`${DOGS_URL}`);
//     return res.data;
//   }
//   catch (err) {
//     return err;
//   }
// }

async function getById(dogId) {
  try {
    let res = await HttpService.get(`${DOGS_URL}/${dogId}`);
    return res.data;
  }
  catch (err) {
    console.log(err, 'We have an error in server - in: DogService-getByID')
  }
}

export default {
  query,
  getById
}