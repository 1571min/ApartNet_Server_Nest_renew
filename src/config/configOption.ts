import 'dotenv/config'

export default () => ({
  APP: {
    PORT: Number(process.env.SERVICE_PORT) || 3000,
    cors: (process.env.CORS_ORIGINS || '').split(','),
    JWT_SECRET: process.env.JWT_SECRET || ''
  },
  DB: {
    HOST: process.env.DATABASE_HOST,
    PORT: Number(process.env.DATABASE_PORT) || 33060,
    USERNAME: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME
  }
})
