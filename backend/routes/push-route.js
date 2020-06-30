const pushService = require('../services/push-service.js')

function pushRoute(app) {

  app.post('/push/save-subscription', (req, res) => {
    if (!pushService.isValidSaveRequest(req, res)) {
      return;
    }

    return pushService.saveSubscriptionToDatabase(req.body)
      .then(function (subscriptionId) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ data: { success: true } }));
      })
      .catch(function (err) {
        res.status(500);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
          error: {
            id: 'unable-to-save-subscription',
            message: 'The subscription was received but we were unable to save it to our database.'
          }
        }));
      });
  });

  app.post('/push/trigger-push-msg', (req, res) => {
    const serverMsg = { title: 'hello omer' };
    console.log('/push/trigger-push-msg');
    const dataToSend = JSON.stringify({ ...req.body, ...serverMsg });
    return pushService.getSubscriptionsFromDatabase()
      .then(function (subscriptions) {
        let promiseChain = Promise.resolve();

        for (let i = 0; i < subscriptions.length; i++) {
          const subscription = subscriptions[i];
          promiseChain = promiseChain.then(() => {
            return pushService.triggerPushMsg(subscription, dataToSend);
          });
        }
        return promiseChain;
      })
      .then(() => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ data: { success: true } }));
      })
      .catch(function (err) {
        res.status(500);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
          error: {
            id: 'unable-to-send-messages',
            message: `We were unable to send messages to all subscriptions : ` +
              `'${err.message}'`
          }
        }));
      });
  })
}

module.exports = pushRoute;
