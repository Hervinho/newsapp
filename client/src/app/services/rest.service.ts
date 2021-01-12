import { Injectable, Injector } from '@angular/core';

import { Router } from '@angular/router';

import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class RestService {
  baseUrl: string;
  headers: any;

  constructor(
    private http: Http,
    injector: Injector
  ) {
    this.baseUrl = environment.apiBaseUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

  }

  get = (apiResource) => {
    const url = this.baseUrl + apiResource;

    const options = { headers: this.headers };
    const requestData = this.http.get(url, options);
    return this.request(requestData);
  }

  request = (requestData) => {
    return new Promise<any>((resolve, reject) => {
      requestData.subscribe(
        res => {
          const result = res.json();
          resolve(result);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}
