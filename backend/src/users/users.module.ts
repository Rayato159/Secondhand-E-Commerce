import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolesGuard } from './roles.guard';
import { ProfilePhotosModule } from 'src/profile-photos/profile-photos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository])
  ],
  providers: [UsersService, RolesGuard],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
