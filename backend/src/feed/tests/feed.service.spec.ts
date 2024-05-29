import { Test, TestingModule } from '@nestjs/testing';
import { FeedController } from '../feed.controller';
import { FeedService } from '../feed.service';
import { GetFeaturedContentDto } from '../dto/get-featured-content.dto';

describe('FeedController', () => {
  let controller: FeedController;
  let service: FeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedController],
      providers: [
        {
          provide: FeedService,
          useValue: {
            getFeaturedContent: jest
              .fn()
              .mockResolvedValue({ featuredContent: 'content' }),
          },
        },
      ],
    }).compile();

    controller = module.get<FeedController>(FeedController);
    service = module.get<FeedService>(FeedService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call getFeaturedContent with correct parameters', async () => {
    const query: GetFeaturedContentDto = { date: '2024-05-29', language: 'en' };
    const result = await controller.getFeaturedContent(query);

    expect(service.getFeaturedContent).toHaveBeenCalledWith(
      query.date,
      query.language,
    );
    expect(result).toEqual({ featuredContent: 'content' });
  });
});
