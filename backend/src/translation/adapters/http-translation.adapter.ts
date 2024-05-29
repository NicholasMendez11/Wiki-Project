import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpTranslationAdapter {
  private readonly logger = new Logger(HttpTranslationAdapter.name);
  private readonly url = 'https://libretranslate.com/translate';

  constructor(private readonly httpService: HttpService) {}

  async translate(text: string, targetLanguage: string): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.post(this.url, {
          q: text,
          source: 'auto',
          format: 'text',
          target: targetLanguage,
          api_key: '2358f38a-31b0-44f9-a02b-30039604e5c8',
        }),
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to translate text: ${text} to language: ${targetLanguage}`,
        error.stack,
      );

      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 400) {
          throw new BadRequestException(
            `Invalid target language: ${targetLanguage}`,
          );
        } else if (statusCode === 404) {
          throw new BadRequestException(
            `Translation service endpoint not found: ${this.url}`,
          );
        } else {
          throw new InternalServerErrorException(
            `Translation service error: ${error.message}`,
          );
        }
      }

      throw new InternalServerErrorException('Unexpected error occurred');
    }
  }
}
