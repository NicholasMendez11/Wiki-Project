import { IsDateString, IsString, Matches } from 'class-validator';

export class GetFeaturedContentDto {
  @IsDateString()
  date: string;

  @IsString()
  @Matches(/^[a-z]{2,5}$/, {
    message: 'language must be a valid language code',
  })
  language: string;
}
