import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('TranslationController (e2e)', () => {
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

  it('/feed/translate (GET)', () => {
    return request(app.getHttpServer())
      .get('/feed/translate/es?text=hello')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('translatedText');
      });
  });
});
