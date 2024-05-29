import { Injectable, Logger } from '@nestjs/common';
import { HttpFeedAdapter } from './adapters/http-feed.adapter';
import { RequestLogService } from '../request-log/request-log.service';

@Injectable()
export class FeedService {
  private readonly logger = new Logger(FeedService.name);

  constructor(
    private readonly httpFeedAdapter: HttpFeedAdapter,
    private readonly requestLogService: RequestLogService,
  ) {}

  async getFeaturedContent(date: string, language: string): Promise<any> {
    this.logger.debug(
      `Fetching featured content for date: ${date} and language: ${language}`,
    );
    const content = await this.httpFeedAdapter.getFeaturedContent(
      date,
      language,
    );
    await this.logRequest('/feed', { date, language }, content);
    return content;
  }

  private async logRequest(
    endpoint: string,
    requestData: any,
    responseData: any,
  ): Promise<void> {
    await this.requestLogService.createLog({
      endpoint,
      requestData: JSON.stringify(requestData),
      responseData: JSON.stringify(responseData),
      timestamp: new Date(),
    });
  }
}
