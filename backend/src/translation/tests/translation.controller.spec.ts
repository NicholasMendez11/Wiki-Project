import { Test, TestingModule } from '@nestjs/testing';
import { TranslationController } from '../translation.controller';
import { TranslationService } from '../translation.service';

describe('TranslationController', () => {
  let controller: TranslationController;
  let service: TranslationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TranslationController],
      providers: [
        {
          provide: TranslationService,
          useValue: {
            translateText: jest
              .fn()
              .mockResolvedValue({ translatedText: 'translated text' }),
          },
        },
      ],
    }).compile();

    controller = module.get<TranslationController>(TranslationController);
    service = module.get<TranslationService>(TranslationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call translateText method with correct parameters', async () => {
    const text = 'hello';
    const language = 'es';
    const result = await controller.translateContent(language, { text });

    expect(service.translateText).toHaveBeenCalledWith(text, language);
    expect(result).toEqual({ translatedText: 'translated text' });
  });
});
