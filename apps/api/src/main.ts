import { ApolloServer, gql } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors, { type CorsRequest } from 'cors';
import express, { json, urlencoded, type Express } from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';
import * as User from './app/users';
import * as DB from './database';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

async function createExpressApp(): Promise<Express> {
  const app = express();
  const graphqlServer = new ApolloServer({
    mocks: true,
    typeDefs: gql`
      type Query {
        hello: String
      }
    `,
  });

  await Promise.all([DB.start(), graphqlServer.start()]);

  app.use(
    logger('dev'),
    cors<CorsRequest>({
      origin: true,
      credentials: true,
    }),
    json(),
    urlencoded(),
    cookieParser(),
    express.static(path.join(__dirname, 'public'))
  );

  graphqlServer.applyMiddleware({ app, path: '/graphql' });

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

  return app;
}

createExpressApp();
