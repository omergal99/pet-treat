const webpush = require('web-push');

const publicKey = 'BHaWtColOLuUSXSfNcqASqQ7QCKQvcBH9N9KBUgoXN4ihfrLaY_7vWPQ9TjKYyghAdAE-H34S4mbwH-jPu_hyaM';
const privateKey = 'a5DEnXDp9b-Pl2j7LVZ98o8uJx4FTL5AUiVFtOUG_QQ';

webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  publicKey,
  privateKey
);
const applicationServerKey = urlB64ToUint8Array(publicKey);
// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'http://localhost:3000/',
  keys: {
    auth: 'dfnkxvklnslkvnsdlvnfe4hfweiuhuighwsuihg',
    p256dh: 'BHaWtColOLuUSXSfNcqASqQ7QCKQvcBH9N9KBUgoXN4ihfrLaY_7vWPQ9TjKYyghAdAE-H34S4mbwH-jPu_hyaM'
  }
};

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  if (typeof atob === 'undefined') {
    global.atob = function (b64Encoded) {
      return new Buffer.from(b64Encoded, 'base64').toString('binary');
    };
  }

  const rawData = global.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  console.log(outputArray.toString('binary'))
  return outputArray.join();
};

function send() {
  // webpush.encrypt(
  //   pushSubscription.keys.p256dh,
  //   pushSubscription.keys.auth,
  //   'My Payload',
  //   'aes128gcm'
  // ).then(encryptionDetails => {
  //   webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
  // });

  webpush.sendNotification(pushSubscription, 'Your Push Payload Text').then(()=>{
    console.log('okkkkkkkkkkkkkkkkk')
  })
  .catch((err)=>{
    console.log('!!!!!!!!!!!!! not ok', err)
  })
}

module.exports = send;
