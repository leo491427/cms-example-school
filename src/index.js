require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes.js');

// ？在部署至服务器时，如何给PORT赋值？
const PORT = process.env.PORT || 3000;
const app = express();
const morganLog = process.env.NODE_ENV === 'production' ? morgan("common") : morgan('dev'); 

app.use(helmet());
// ？为什么需要解决跨域？在老师CURD的程序中，即使去掉下面一句，部署至heroku后也不影响使用（不影响从postman中CURD）
app.use(morganLog);
app.use(cors());
app.use(express.json());

app.use('/v1', routes);

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
});