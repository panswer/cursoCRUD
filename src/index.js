const app = require('./server');

app.listen(app.get('port'), err => {
    console.log(`Server on port ${app.get('port')}`);
});