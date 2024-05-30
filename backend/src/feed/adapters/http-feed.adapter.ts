import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Feed } from '../types/feed';

@Injectable()
export class HttpFeedAdapter {
  private readonly logger = new Logger(HttpFeedAdapter.name);

  constructor(private readonly httpService: HttpService) {}

  async getFeaturedContent(date: string, language: string): Promise<Feed> {
    const [year, month, day] = date.split('-');
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/${language}/featured/${year}/${month}/${day}`;
    this.logger.debug(`Fetching featured content from URL: ${url}`);

    try {
      const response: AxiosResponse = await firstValueFrom(
        this.httpService.get(url),
      );
      return response.data;
    } catch (error) {
      this.logger.error(
        `Failed to fetch featured content from URL: ${url}`,
        error.stack,
      );

      if (error.response && error.response.status === 404) {
        throw new BadRequestException(`Invalid language code: ${language}`);
      } else {
        throw new InternalServerErrorException(
          `Failed to fetch featured content: ${error.message}`,
        );
      }
    }
  }
}
