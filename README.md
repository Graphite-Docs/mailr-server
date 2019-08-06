# Mailr Email Server

This is a simple server that powers the Mailr web application's backend. It can be run by anyone by simply cloning this directory, installing dependencies, then starting the server. 

To do so: 

1. `git clone https://github.com/Graphite-Docs/mailr-server.git`  
2. `cd mailr-server`  
3. `npm install`  
4. `npm start`  

If you'd like to use your own SendGrid account rather than SMTP settings from a stand alone email provider, you'll need to supply the SendGrid API Key. 

Copy the `.env.sample` file into a `.env` file and enter your Api Key. 