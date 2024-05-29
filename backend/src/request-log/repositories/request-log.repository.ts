import { EntityRepository, Repository } from 'typeorm';
import { RequestLog } from '../request-log.entity';

@EntityRepository(RequestLog)
export class RequestLogRepository extends Repository<RequestLog> {}
