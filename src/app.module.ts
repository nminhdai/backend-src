import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from './nmd_core/config';
import { DatabaseModule } from './nmd_core/database';

import { RAKSULModule } from './raksul_modules/raksul.module';

@Module({
  imports: [
    ConfigModule,
    EventEmitterModule.forRoot(),
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(`${__dirname}api/`, '..', 'files'),
      serveRoot: '/api/files',
      exclude: ['/api*'],
    }),

    RAKSULModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {}
}
