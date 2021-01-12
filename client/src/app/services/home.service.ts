import { Injectable } from '@angular/core';

import { RestService } from './rest.service';

@Injectable()
export class HomeService {
  authToken: string;
  resourcePath: string;
  constructor(
    public api: RestService,
  ) {
    this.resourcePath = 'news';
  }

  /*get = (title) => {
    const url = this.resourcePath + title;
    return this.api.get(url);
  }*/

  getAll = () => {
    const url = this.resourcePath;
    return this.api.get(url);
  }
}
