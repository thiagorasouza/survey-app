import { Application } from 'express'
import { cors } from '../middlewares/cors'

export default (app: Application): void => {
  app.use(cors)
}
