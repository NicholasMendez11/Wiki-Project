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

  async getFeaturedContent(
    date: string,
    language: string,
    page: number,
    limit: number,
  ): Promise<any> {
    this.logger.debug(
      `Fetching featured content for date: ${date}, language: ${language}, page: ${page}, limit: ${limit}`,
    );
    const content = await this.httpFeedAdapter.getFeaturedContent(
      date,
      language,
    );
    const onthisday = content.onthisday;

    const news = content.news;

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedEvents = onthisday
      ? onthisday.slice(startIndex, endIndex)
      : [];
    const paginatedNews = news ? news.slice(startIndex, endIndex) : [];

    // saving this request
    await this.logRequest(
      '/feed',
      { date, language, page, limit },
      paginatedEvents,
    );

    return {
      date: date,
      events: paginatedEvents,
      news: paginatedNews,
      totalEvents: onthisday ? Math.ceil(onthisday.length / limit) : 0,
      totalNews: news ? Math.ceil(news.length / limit) : 0,
    };
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
