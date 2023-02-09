import express from 'express';
import logger from 'morgan';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import path from 'path';
import * as User from './app/users';
import * as DB from './database';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

DB.start();

app.use(User.ROUTER_PREFIX, User.router);

app.get('/', (req, res) => {
  res.json({ message: 'Hello API' });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error(err);

  // render the error page
  res.status(err.status || 500);
  throw err;
});

app.listen(port, () => {
  console.log(`[ ready ] http://localhost:${port}`);
});
