import { NestFactory } from '@nestjs/core';
import * as requestIp from 'request-ip';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setup cors
  app.enableCors();
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  // end of config cors

  app.setGlobalPrefix('api');
  app.use(requestIp.mw());

  // setup swagger
  const config = new DocumentBuilder()
    .setTitle('Raksul API')
    .setDescription('This is the Raksul Api')
    .setVersion('1.0')
    .addTag('Auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documents', app, document);

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port, () => {
    console.log('listening on port ' + port);
  });
}
bootstrap();
