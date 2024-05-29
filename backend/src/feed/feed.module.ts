import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { RequestLog } from '../request-log/request-log.entity';
import { RequestLogModule } from '../request-log/request-log.module';
import { HttpFeedAdapter } from './adapters/http-feed.adapter';

@Module({
  imports: [
    TypeOrmModule.forFeature([RequestLog]),
    HttpModule,
    RequestLogModule,
  ],
  providers: [FeedService, HttpFeedAdapter],
  controllers: [FeedController],
})
export class FeedModule {}
