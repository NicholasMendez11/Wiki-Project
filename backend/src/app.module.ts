import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';
import { TranslationModule } from './translation/translation.module';
import { RequestLogModule } from './request-log/request-log.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FeedModule,
    TranslationModule,
    RequestLogModule,
  ],
})
export class AppModule {}
