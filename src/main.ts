import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as nocache from 'nocache';
import helmet from 'helmet';

function checkEnvironment(configService: ConfigService) {
  const requiredEnvVars = [
    'PORT',
    'ISSUER_BASE_URL',
    'AUDIENCE',
    'CLIENT_ORIGIN_URL',
    'POSTGRESQL_HOST',
    'POSTGRESQL_PORT',
    'POSTGRESQL_USERNAME',
    'POSTGRESQL_PASSWORD',
    'POSTGRESQL_NAME',
  ];

  requiredEnvVars.forEach((envVar) => {
    if (!configService.get<string>(envVar)) {
      throw Error(`Undefined environment variable: ${envVar}`);
    }
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  checkEnvironment(configService);

  app.setGlobalPrefix('api');

  app.use(nocache());

  app.enableCors({
    origin: configService.get<string>('CLIENT_ORIGIN_URL'),
    allowedHeaders: ['Authorization', 'Content-Type'],
    maxAge: 86400,
  });

  app.use(
    helmet({
      hsts: { maxAge: 31536000 },
      frameguard: { action: 'deny' },
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'"],
          'frame-ancestors': ["'none'"],
        },
      },
    }),
  );
  await app.listen(configService.get<string>('PORT'));
}
bootstrap();
