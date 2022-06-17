import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('should enable cors requests', async () => {
    app.get('/test_cors_middleware', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors_middleware')
      .expect('Access-Control-Allow-Origin', '*')
      .expect('Access-Control-Allow-Methods', '*')
      .expect('Access-Control-Allow-Headers', '*')
  })
})
