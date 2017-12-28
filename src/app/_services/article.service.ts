import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { ArticleEntity, RestResponse } from '../_entities/_index';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {

  }

  get(createDate: string, createdAt: string, articleName: string): Observable<RestResponse> {

    return this.http.get('/articles/' + createDate + '/' + createdAt + '/' + articleName + '.json')
      .map((response: RestResponse) => {

        if (response.error) {
          return response.message[0];
        }

        return response;
      });

  }


  post(createDate: string, createdAt: string, articleName: string, data: any): Observable<RestResponse> {

    return this.http.post('/articles/' + createDate + '/' + + createdAt + '/' + articleName + '.json', data)
      .map((response: RestResponse) => {

        if (response.error) {
          return response.message[0];
        }

        return response;
      });

  }


  list(skip: number): Observable<RestResponse> {

    return this.http.get('/index.json?skip=' + skip)
      .map((response: RestResponse) => {

      debugger;
        if (response.error) {
          return response.message[0];
        }

        return response;
      });

  }

}
