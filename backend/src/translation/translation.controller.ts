import { Controller, Get, Param, Query } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslateContentDto } from './dto/translate-content.dto';

@Controller('feed/translate')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get(':language')
  translateContent(
    @Param('language') language: string,
    @Query() query: TranslateContentDto,
  ) {
    return this.translationService.translateText(query.text, language);
  }
}
