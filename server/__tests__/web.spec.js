const request = require('supertest')
const app = require('../host/bin/www')
const server = request(app)

describe('Web Server', () => {
  it('returns 200', (done) => {
    server
      .get('/test.html')
      .expect(200)
      .end(done)
  })

  it('returns 404', (done) => {
    server
      .get('/fake/file')
      .expect(404)
      .end(done)
  })

  afterEach(async () => {
    await app.close()
  })

})
