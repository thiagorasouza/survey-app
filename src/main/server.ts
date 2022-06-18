import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import app from './config/app'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    console.log('Database connected successfully')
    app.listen(env.port, () => {
      console.log(`Server listening at http://localhost:${env.port}`)
    })
  })
  .catch(console.log)
