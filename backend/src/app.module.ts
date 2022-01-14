import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductModule,
    AuthModule,

    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        }
      },
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
