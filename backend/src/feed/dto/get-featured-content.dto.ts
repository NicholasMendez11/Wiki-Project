import { IsDateString, IsString, IsInt, Min, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetFeaturedContentDto {
  @IsDateString()
  date: string;

  @IsString()
  @Matches(/^[a-z]{2,5}$/, {
    message: 'language must be a valid language code',
  })
  language: string;

  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  page: number = 1;

  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  limit: number = 5;
}
