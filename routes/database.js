var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET orgInfo listing. */
router.get('/orgInfo', async function(req, res, next) {
    const APIKEY = req.headers.authorization;
    const ORGID = req.params.orgId;
    //verify the API Key matches orgId
    const apiKeyVerification = await verifyAPIKey(APIKEY, ORGID);
    res.send('respond with a resource');
  });
  
router.get('/list/:listId', async function(req, res, next) {
    const APIKEY = req.headers.authorization;
    const LISTID = req.params.orgId;
    //verify the API Key matches orgId
    const apiKeyVerification = await verifyAPIKey(APIKEY, LISTID);
    res.send('respond with a resource');
});
  
  /* POST new org */
  //This will happen on Stripe payment confirmation


  /* POST new list to org */
  router.post('/list', async function(req, res, next) {
    const APIKEY = req.headers.authorization;
    if(params.config && params.config.useHostedService) {
      const sendGridMessage = await sendThroughSendGrid();
      
      res.send(sendGridMessage);
      
    } else {
      const message = await main().catch(console.error);
      res.send(message);
    }
})

/* POST new org */
router.post('/response/:listId', async function(req, res, next) {
    const APIKEY = req.headers.authorization;
    const LISTID = req.params.listId;
    if(params.config && params.config.useHostedService) {
      const sendGridMessage = await sendThroughSendGrid();
      
      res.send(sendGridMessage);
      
    } else {
      const message = await main().catch(console.error);
      res.send(message);
    }
})
  
  module.exports = router;