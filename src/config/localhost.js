const path = require('path');
const dotenv = require('dotenv');

let envirobel = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envirobel });