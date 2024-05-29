import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedModule } from './feed/feed.module';
import { TranslationModule } from './translation/translation.module';
import { RequestLogModule } from './request-log/request-log.module';
/*TODO: 
-Pulish the translation endpoint, add the same amount of validation etc. 
-Finish to add types to the responses, 
-Would be good to add patron adaptador a las llamadas http
-Necesitamos arreglar los unit testing 
-Necesito integrar los e2e testings
-Necesito validar que funcione los datos de sqlite 
-Necesito corregir el problema del contenedor de docker 
- hacer deploy en railway 
-MODIFICA TODOS LOS ARCHIVOS PARA REMOVER COMENTARIOS Y ARREGLAR EL README
-Implementar el feature the viewed content
*/
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FeedModule,
    TranslationModule,
    RequestLogModule, // Make sure this is imported
  ],
})
export class AppModule {}
