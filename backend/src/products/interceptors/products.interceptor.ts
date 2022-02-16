import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T
}

@Injectable()
export class ProductsInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => {
        let results: any = []
        for(let i=0; i<data.length; i++) {
            let newUser = data[i].user
            let { user, ...product } = data[i]
            let { password, role, created, updated, ...userDetails } = newUser
            results.push({ ...product, ...{userDetails} })
        }
        return results
    }))
  }
}