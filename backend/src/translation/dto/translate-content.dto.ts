import { IsString } from 'class-validator';

export class TranslateContentDto {
  @IsString()
  text: string;
}
