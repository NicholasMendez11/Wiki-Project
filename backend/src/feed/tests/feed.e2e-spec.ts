import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('FeedController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/feed (GET)', () => {
    return request(app.getHttpServer())
      .get('/feed?date=2024-05-29&language=en')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('tfa');
        expect(res.body).toHaveProperty('mostread');
        expect(res.body).toHaveProperty('image');
        expect(res.body).toHaveProperty('news');
        expect(res.body).toHaveProperty('onthisday');
      });
  });
});
