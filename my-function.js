const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const axios = require("axios");
const {GoogleAuth} = require('google-auth-library');


app.get('/', function(req, res) {
    res.json({status: 200});
});

app.get('/json', (req, res) => {
  res.json({
    result: 'My name is Kautilya!'
  });
});



const auth = new GoogleAuth({
  scopes: 'https://www.googleapis.com/auth/cloud-platform'
});

app.get('/say', (req, res) => {
  console.log(req.query.keyword)

  
    let config = {
      headers: {
        "Authorization": "Basic ZTcwMzNhMDMtYmE0MS00YTg1LTg0N2EtMGZkODI2ZTI3MjdjOlBNbk1wZnRIM0tveDRwQ3Mxd3o3dmtxeGRMZjd5OUtkcWxSMnZFb3lNbnJNNjA3eTF0ZGtyTFNuVTFaTDZKVHA="
      },
      params: {
        keyword: req.query.keyword
      }
    };

    axios.get(`https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-e465d419-f31c-4981-a026-bd6ba69e27ca/x/func`, config)
      .then((data) => {
        console.log(data.data)
        res.send(data.data)
      })
      .catch((err) => {
        
        res.send(err)
        console.log(err)
      })
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
