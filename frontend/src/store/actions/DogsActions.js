import DogService from '../../services/DogService';

function loadDogs() {
  return DogService.query();
  // return { type: '', payload: { } };
}

function loadDog(dogId) {
  return async (dispatch) => {
    const dog = await DogService.getById(dogId);
    dispatch({ type: 'replaceMsgs', payload: dog.msgHistory })
    dispatch({ type: 'updateDog', payload: dog })
  }
}

export default {
  loadDogs,
  loadDog
}

// var doDogsJSON = [
//   {
//     "name": "Messi",
//     "img": "https://res.cloudinary.com/omergal/image/upload/v1562896264/family/messi_v1z4sa.jpg",
//     "bornDate": "1245979960117",
//     "family": [
//       {
//         "userId": "1002",
//         "userImg": "https://res.cloudinary.com/omergal/image/upload/v1562896019/family/omer_awhali.jpg",
//         "userName": "omer"
//       },
//       {
//         "userId": "1003",
//         "userImg": "https://res.cloudinary.com/omergal/image/upload/v1562896018/family/lea_hpgvnw.jpg",
//         "userName": "lea"
//       },
//       {
//         "userId": "1004",
//         "userImg": "https://res.cloudinary.com/omergal/image/upload/v1562896018/family/izik_aphrkj.jpg",
//         "userName": "izik"
//       },
//       {
//         "userId": "1005",
//         "userImg": "https://res.cloudinary.com/omergal/image/upload/v1562896018/family/noam_c6qlqf.jpg",
//         "userName": "noam"
//       },
//     ],
//     "msgHistory": [
//       {
//         "dateCreated": "1555979960117",
//         "fromUserName": "omer",
//         "text": "hello im a test number 1"
//       },
//       {
//         "dateCreated": "1560979960117",
//         "fromUserName": "noam",
//         "text": "hello im a test number 2"
//       },
//     ],
//     "gallery": [
//       {
//         "img": "https://media.istockphoto.com/photos/beautiful-dog-lying-in-the-forest-picture-id1052880600",
//         "title": "main pic"
//       },
//     ],
//   }, {
//     "name": "Hezz",
//     "img": "https://www.istockphoto.com/il/photo/portrait-of-a-blond-labrador-retriever-dog-looking-at-the-camera-with-mouth-open-gm1041644272-278869847",
//     "bornDate": "1245979960117",
//     "family": [
//       {
//         "userId": "1006",
//         "userImg": "https://media.istockphoto.com/photos/handsome-businessman-with-sunglasses-outdoor-in-the-city-charming-and-picture-id1043146946",
//         "userName": "ezra"
//       },
//       {
//         "userId": "1007",
//         "userImg": "https://media.istockphoto.com/photos/handsome-businessman-with-sunglasses-outdoor-in-the-city-charming-and-picture-id1043146946",
//         "userName": "hora"
//       },
//       {
//         "userId": "1008",
//         "userImg": "https://media.istockphoto.com/photos/handsome-businessman-with-sunglasses-outdoor-in-the-city-charming-and-picture-id1043146946",
//         "userName": "smadar"
//       },
//     ],
//     "msgHistory": [
//       {
//         "dateCreated": "1555972960117",
//         "fromUserName": "ezra",
//         "text": "hello im a test number 3 Hezz"
//       },
//       {
//         "dateCreated": "1561079960117",
//         "fromUserName": "smadar",
//         "text": "hello im a test number 4 Hezz"
//       },
//     ],
//     "gallery": [
//       {
//         "img": "https://www.istockphoto.com/il/photo/portrait-of-a-blond-labrador-retriever-dog-looking-at-the-camera-with-mouth-open-gm1041644272-278869847",
//         "title": "main pic2"
//       },
//     ],
//   },
// ]