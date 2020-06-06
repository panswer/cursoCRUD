require('dotenv').config();

const app = require('./server');

require('./database');

app.listen(app.get('port'), err => {
    console.log(`Server on port ${app.get('port')}`);
});