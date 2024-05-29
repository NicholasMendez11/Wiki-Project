import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FeedService } from './feed.service';
import { GetFeaturedContentDto } from './dto/get-featured-content.dto';
import { LowercaseTransformPipe } from '../common/pipes/lowercase-transform.pipe';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  @UsePipes(LowercaseTransformPipe, ValidationPipe)
  getFeaturedContent(@Query() query: GetFeaturedContentDto) {
    return this.feedService.getFeaturedContent(query.date, query.language);
  }
}
