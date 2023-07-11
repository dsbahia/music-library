const { expect } = require('chai');
const request = require('supertest');
const db = require('../src/db');
const app = require('../src/app');

describe('create album', () => {
  describe('/artists/:id/albums', () => {
    describe('POST', () => {
      it('creates a new album associated with an artist', async () => {
        let artistId;

        before(async () => {
          const { body } = await request(app).post('/artists').send({
            name: 'Tame Impala',
            genre: 'rock',
          });
          artistId = body.id;
        });
        const albumData = {
          name: 'A wonderful Album',
          year: 2010,
        };

        const { status, body } = await request(app)
          .post(`/artists/${artistId}/albums`)
          .send(albumData);

        expect(status).to.equal(201);
        expect(body.name).to.equal(albumData.name);
        expect(body.year).to.equal(artistId);

        const {
          rows: [albumDataFromDB],
        } = await db.query(`SELECT * FROM Albums WHERE id = ${body.id}`);
        expect(albumDataFromDB.name).to.equal(albumData.name);
        expect(albumDataFromDB.year).to.equal(albumData.year);
        expect(albumDataFromDB.artistId).to.equal(artistId);
      });
    });
  });
});
