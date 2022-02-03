import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T
}

@Injectable()
export class ProfilePhotoInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => {
        const user = data.user
        const profilePhoto = data

        const {
            email,
            password,
            created,
            updated,
            role,
            ...userDetails
        } = user

        const newData = {
            ...profilePhoto,
            user: userDetails
        }

        return newData
    }))
  }
}