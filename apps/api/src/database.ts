import mongoose, { type Connection } from 'mongoose';

export type DatabaseOptions = Partial<{
  url: string;
}>;

const isProd = process.env.NODE_ENV === 'production';
const DEV_URI_FALLBACK = 'mongodb://localhost/football-trends';

let db = mongoose.connection;

db.on('connected', function (this: Connection) {
  const { host, port, name: db } = this;
  const connectionUri = `mongodb://${host}:${port}/${db}`;
  console.info(`👾 database connected at ${connectionUri}`);
});

db.on('disconnected', () => {
  console.info('❌ Database lost connection');
});

export async function start({
  url = process.env.DATABASE,
}: DatabaseOptions = {}): Promise<Connection> {
  if (isProd && !url) {
    throw 'Database not set. Please, set environment variable DATABASE_URL';
  }

  const mongo = await mongoose.connect(url ?? DEV_URI_FALLBACK, {
    appName: 'peter.dev.br/core',
    wtimeoutMS: isProd ? 25_000 : 0,
    socketTimeoutMS: 30_000 * 3,
    maxPoolSize: 200,
    keepAlive: true,
    keepAliveInitialDelay: 300_000,
    serverSelectionTimeoutMS: isProd ? 45_000 : 7_000,
  });

  db = mongo.connection;

  return db;
}

export async function stop() {
  await mongoose.disconnect();
}

export async function cleanup() {
  try {
    await db.dropDatabase();
  } catch (error) {
    console.error('Cannot clean the database');
    console.error(error);
  }
}
