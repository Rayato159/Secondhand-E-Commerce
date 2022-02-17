import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T
}

@Injectable()
export class ProductPhotosInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => {
        let results: any = []
        for(let i=0; i<data.length; i++) {
            results.push({ 
                product_photo_id: data[i].product_photo_id, 
                path: data[i].path, 
                name: data[i].name 
            })
        }
        return results
    }))
  }
}