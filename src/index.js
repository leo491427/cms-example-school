require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes.js');
const { connectToDB } = require('./utils/db');  //因为utils/db.js中用了一种特别的export写法，所以这里需要括号
const erroHandler = require('./middleware/errorHandler');

// ？在部署至服务器时，如何给PORT赋值？
const PORT = process.env.PORT || 3000;
const app = express();
const morganLog = process.env.NODE_ENV === 'production' ? morgan("common") : morgan('dev'); 

app.use(helmet());
// ？为什么需要解决跨域？在老师CURD的程序中，即使去掉下面一句，部署至heroku后也不影响使用（不影响从postman中CURD）
app.use(morganLog);
app.use(cors());
app.use(express.json());             // ？起了什么作用？如果没有的话req.body为undefined

// ？命名有什么特别要求？
app.use('/v1', routes);
app.use(erroHandler);

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch(e => {
    console.log('DB connection failed');
    console.error(e.message);
    process.exit(1);
  });

