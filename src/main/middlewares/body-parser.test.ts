import request from 'supertest'
import app from '../config/app'

describe('BodyParser Middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test_body_parser_middleware', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser_middleware')
      .send({ data: 'json_data' })
      .expect({ data: 'json_data' })
  })
})
