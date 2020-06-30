
const webpush = require('web-push');

const vapidKeys = {
  publicKey:
    'BNtJVAmG8R8yjP6YAlKF3FT0kJkE7P4UscJpDG2sfOMqowF1qzN_HGq2fpBhTIXQAqBcAgcdks5EJcbVEo-XwOs',
  privateKey: 'Ci82FTCSFR-_0ZWOOlI568Sb_PuS1BwwuFB4dN8k8X0'
};

webpush.setVapidDetails(
  'mailto:omergal9999a@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let gSubscriptions = []

function saveSubscriptionToDatabase(subscription) {
  console.log('saveSubscriptionToDatabase', subscription);
  gSubscriptions.push(subscription);
  return Promise.resolve('subscriptionId')
  // return new Promise(function (resolve, reject) {
  //   db.insert(subscription, function (err, newDoc) {
  //     if (err) {
  //       reject(err);
  //       return;
  //     }

  //     resolve(newDoc._id);
  //   });
  // });
};

const isValidSaveRequest = (req, res) => {
  // Check the request body has at least an endpoint.
  if (!req.body || !req.body.endpoint) {
    // Not a valid subscription.
    res.status(400);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      error: {
        id: 'no-endpoint',
        message: 'Subscription must have an endpoint.'
      }
    }));
    return false;
  }
  return true;
};

function getSubscriptionsFromDatabase() {
  console.log('getSubscriptionsFromDatabase');
  // quary from db all the subscriptions
  return Promise.resolve(gSubscriptions);
};

const triggerPushMsg = function (subscription, dataToSend) {
  console.log('triggerPushMsg');
  return webpush.sendNotification(subscription, dataToSend)
    .then(() => {
      console.log('triggerPushMsg notification send')
    })
    .catch((err) => {
      if (err.statusCode === 404 || err.statusCode === 410) {
        console.log('Subscription has expired or is no longer valid: ', err);
        return deleteSubscriptionFromDatabase(subscription._id);
      } else {
        throw err;
      }
    });
};

module.exports = {
  saveSubscriptionToDatabase,
  isValidSaveRequest,
  getSubscriptionsFromDatabase,
  triggerPushMsg,
}





























// const webpush = require('web-push');

// const publicKey = 'BNtJVAmG8R8yjP6YAlKF3FT0kJkE7P4UscJpDG2sfOMqowF1qzN_HGq2fpBhTIXQAqBcAgcdks5EJcbVEo-XwOs';
// const privateKey = 'Ci82FTCSFR-_0ZWOOlI568Sb_PuS1BwwuFB4dN8k8X0';

// webpush.setGCMAPIKey('<Your GCM API Key Here>');
// webpush.setVapidDetails(
//   'mailto:example@yourdomain.org',
//   publicKey,
//   privateKey
// );
// const applicationServerKey = urlB64ToUint8Array(publicKey);
// // This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: 'http://localhost:3000/',
//   keys: {
//     auth: 'dfnkxvklnslkvnsdlvnfe4hfweiuhuighwsuihg',
//     p256dh: 'BNtJVAmG8R8yjP6YAlKF3FT0kJkE7P4UscJpDG2sfOMqowF1qzN_HGq2fpBhTIXQAqBcAgcdks5EJcbVEo-XwOs'
//   }
// };

// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/-/g, '+')
//     .replace(/_/g, '/');

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// function send() {
//   // webpush.encrypt(
//   //   pushSubscription.keys.p256dh,
//   //   pushSubscription.keys.auth,
//   //   'My Payload',
//   //   'aes128gcm'
//   // ).then(encryptionDetails => {
//   //   webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
//   // });

//   webpush.sendNotification(pushSubscription, 'Your Push Payload Text').then(()=>{
//     console.log('okkkkkkkkkkkkkkkkk')
//   })
//   .catch((err)=>{
//     console.log('!!!!!!!!!!!!! not ok', err)
//   })
// }

// module.exports = send;
