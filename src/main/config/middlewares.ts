import { Application } from 'express'
import { bodyParser } from '../middlewares/body-parser'
import { contentType } from '../middlewares/content-type'
import { cors } from '../middlewares/cors'

export default (app: Application): void => {
  app.use(cors)
  app.use(bodyParser)
  app.use(contentType)
}
