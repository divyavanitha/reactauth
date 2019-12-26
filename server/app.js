const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const auth = require('./routes/auth');
const users = require('./routes/users');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(process.env.MONGO_URI);
console.log(process.env.SECRET);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true  })
.then(() => console.log('Connected to MongoDb...'))
.catch((e) => console.log('Connection Failure...', e));

app.use('/api/auth', auth);
app.use('/api/users', users);

if(process.env.NODE_ENV === 'production') {

    const appPath = path.join(__dirname, '..', 'build');
    app.use(express.static(appPath));

    app.get('*', function(req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Node running on port: ${port}`);
});
