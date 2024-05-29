import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestLog } from './request-log.entity';

@Injectable()
export class RequestLogService {
  constructor(
    @InjectRepository(RequestLog)
    private readonly requestLogRepository: Repository<RequestLog>,
  ) {}

  async createLog(data: Partial<RequestLog>): Promise<RequestLog> {
    const log = this.requestLogRepository.create(data);
    return this.requestLogRepository.save(log);
  }
}
