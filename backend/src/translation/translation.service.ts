import { Injectable, Logger } from '@nestjs/common';
import { RequestLogService } from '../request-log/request-log.service';
import { HttpTranslationAdapter } from './adapters/http-translation.adapter';

@Injectable()
export class TranslationService {
  private readonly logger = new Logger(TranslationService.name);

  constructor(
    private readonly httpTranslationAdapter: HttpTranslationAdapter,
    private readonly requestLogService: RequestLogService,
  ) {}

  async translateText(text: string, targetLanguage: string): Promise<any> {
    this.logger.debug(
      `Translating text: ${text} to language: ${targetLanguage}`,
    );
    const translatedText = await this.httpTranslationAdapter.translate(
      text,
      targetLanguage,
    );
    await this.logRequest(
      '/translate',
      { text, targetLanguage },
      translatedText,
    );
    return translatedText;
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
