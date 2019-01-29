import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {

  path_json = 'assets/data/';

  constructor(
    private http: Http
  ) { }

  getJSON(route: string) {
    return this.http.get(this.path_json + route)
      .map((res: any) => {
        return res.json();
      }
    );
  }

}
