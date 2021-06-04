require('dotenv').config()

module.exports = {
  name: 'default',
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: 'root',
  database: 'jaspaulcom_quiz',
  synchronize: true,
  logging: true,
  entities: [process.env.NODE_ENV === 'development' ? 'src/entities/*.ts' : 'dist/entities/*.js'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts']
}
