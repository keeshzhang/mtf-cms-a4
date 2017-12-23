import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { ArticleEntity, RestResponse } from '../_entities/_index';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) {

  }

  get(createdAt: string, articleName: string): Observable<RestResponse> {

    debugger;
    return this.http.get('/articles/' + createdAt + '/' + articleName + '.json')
      .map((response: RestResponse) => {

        if (response.error) {
          return response.message[0];
        }

        return response;
      });

  }


  post(createdAt: string, articleName: string, data: any): Observable<RestResponse> {

    return this.http.post('/articles/' + createdAt + '/' + articleName + '.json', data)
      .map((response: RestResponse) => {

        if (response.error) {
          return response.message[0];
        }

        return response;
      });

  }

}
