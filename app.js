//For Webtech c/o "ReE Tech".

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/frontpage.html')));
app.get('/frontpage.html', (req, res) => res.sendFile(path.join(__dirname + '/frontpage.html')));
app.get('/collectionpartner.html', (req, res) => res.sendFile(path.join(__dirname + '/collectionpartner.html')));
app.get('/maps.html', (req, res) => res.sendFile(path.join(__dirname + '/maps.html')));
app.get('/RequestForm.html', (req, res) => res.sendFile(path.join(__dirname + '/RequestForm.html')));
app.get('/impactpage.html', (req, res) => res.sendFile(path.join(__dirname + '/impactpage.html')));
app.get('/Icons%20and%20Images/banner.jpg', (req, res) => res.sendFile(path.join(__dirname + '/Icons%20and%20Images/banner.jpg')));
app.get('/Icons%20and%20Images/info.png', (req, res) => res.sendFile(path.join(__dirname + '/Icons%20and%20Images/info.png')));

app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});
