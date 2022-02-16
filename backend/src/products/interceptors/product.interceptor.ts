import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T
}

@Injectable()
export class ProductInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => {
        const newUser = data.user
        const { user, ...product } = data
        const { password, role, created, updated, ...userDetails } = newUser
        return { ...product, ...{userDetails} }
    }))
  }
}