var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
let params;
require('dotenv').config()

async function sendThroughSendGrid() {
  console.log(params);
  sgMail.setApiKey(process.env.SENDGRID_KEY);
  const msg = {
    to: params.to,
    from: params.from,
    subject: params.subject,
    text: params.text,
    html: params.html,
  };
  try {
    await sgMail.send(msg);
    return {
      success: true
    };
  } catch(err) {
    console.log(err)
    return {
      success: false
    }
  }
}

// async..await is not allowed in global scope, must use a wrapper
async function main(){
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(params.config);
  
    // send mail with defined transport object
    
    try {
      let info = await transporter.sendMail({
        from: params.from, // sender address
        to: params.to, // list of receivers
        subject: params.subject, // Subject line
        text: params.text, // plain text body
        html: params.html // html body
      });
      if(info) {
        console.log("Message sent: %s", info.messageId);
        return info;
      } else {
        return "No info provided"
      }
    } catch(err) {
      console.log(err);
      return err
    }
  }
  

/* GET emails listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST new email */
router.post('/new', async function(req, res, next) {
    params = req.body;
    if(params.config && params.config.useHostedService) {
      const sendGridMessage = await sendThroughSendGrid();
      
      res.send(sendGridMessage);
      
    } else {
      const message = await main().catch(console.error);
      res.send(message);
    }
})

module.exports = router;
