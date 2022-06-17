import request from 'supertest'
import app from '../config/app'

describe('Content-Type Middleware', () => {
  test('should set json content-type by default', async () => {
    app.get('/test_content_type_middleware', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_content_type_middleware')
      .expect('Content-Type', /json/)
  })
})
