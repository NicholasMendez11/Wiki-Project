import { Test, TestingModule } from '@nestjs/testing';
import { RequestLogService } from '../request-log.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RequestLog } from '../request-log.entity';
import { Repository } from 'typeorm';

describe('RequestLogService', () => {
  let service: RequestLogService;
  let repository: Repository<RequestLog>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RequestLogService,
        {
          provide: getRepositoryToken(RequestLog),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<RequestLogService>(RequestLogService);
    repository = module.get<Repository<RequestLog>>(
      getRepositoryToken(RequestLog),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a log', async () => {
    const logData = {
      endpoint: '/test',
      requestData: '{"test": "data"}',
      responseData: '{"response": "data"}',
      timestamp: new Date(),
    };

    const savedLog = { ...logData, id: 1 };

    jest.spyOn(repository, 'create').mockReturnValue(savedLog as any);
    jest.spyOn(repository, 'save').mockResolvedValue(savedLog);

    const result = await service.createLog(logData);

    expect(repository.create).toHaveBeenCalledWith(logData);
    expect(repository.save).toHaveBeenCalledWith(savedLog);
    expect(result).toEqual(savedLog);
  });
});
