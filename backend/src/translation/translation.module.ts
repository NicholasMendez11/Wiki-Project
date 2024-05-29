import { Module } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { HttpModule } from '@nestjs/axios';
import { HttpTranslationAdapter } from './adapters/http-translation.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestLogModule } from 'src/request-log/request-log.module';
import { TranslationController } from './translation.controller';
import { RequestLog } from 'src/request-log/request-log.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([RequestLog]),
    RequestLogModule,
  ],
  controllers: [TranslationController],
  providers: [TranslationService, HttpTranslationAdapter],
  exports: [TranslationService],
})
export class TranslationModule {}
