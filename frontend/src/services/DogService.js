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

// function update(review) {
//   var idAndTxt = {
//     id: review._id,
//     txt: review.content.txt
//   }
//   return new Promise((resolve, reject) => {
//     HttpService.put(`${REVIEW_URL}/${review._id}`, idAndTxt)
//       .then(res => {
//         let updatedRev = res
//         //console.log('updated review:', updatedRev)
//         resolve(updatedRev)
//       })
//       .catch(err => err)
//   })
// }

export default {
  query,
  getById,
  // update
}