require('dotenv').config();

const app = require('./server');

require('./database');
require('./server');

app.listen(app.get('port'), err => {
    console.log(`Server on port ${app.get('port')}`);
});