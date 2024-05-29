import { Test, TestingModule } from '@nestjs/testing';
import { TranslationService } from '../translation.service';
import { HttpTranslationAdapter } from '../adapters/http-translation.adapter';
import { RequestLogService } from '../../request-log/request-log.service';

describe('TranslationService', () => {
  let service: TranslationService;
  let httpAdapter: HttpTranslationAdapter;
  let logService: RequestLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TranslationService,
        {
          provide: HttpTranslationAdapter,
          useValue: {
            translate: jest
              .fn()
              .mockResolvedValue({ translatedText: 'translated text' }),
          },
        },
        {
          provide: RequestLogService,
          useValue: {
            createLog: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<TranslationService>(TranslationService);
    httpAdapter = module.get<HttpTranslationAdapter>(HttpTranslationAdapter);
    logService = module.get<RequestLogService>(RequestLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call httpAdapter.translate and logRequest with correct parameters', async () => {
    const text = 'hello';
    const language = 'es';
    const result = await service.translateText(text, language);

    expect(httpAdapter.translate).toHaveBeenCalledWith(text, language);
    expect(logService.createLog).toHaveBeenCalled();
    expect(result).toEqual({ translatedText: 'translated text' });
  });
});
