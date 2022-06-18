import { Application, Router } from 'express'
import signUpRoutes from '../routes/signup-routes'

export default (app: Application): void => {
  const router = Router()
  app.use('/api', router)
  signUpRoutes(router)
}
