import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class LowercaseTransformPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query' && value.language) {
      value.language = value.language.toLowerCase();
    }
    return value;
  }
}
