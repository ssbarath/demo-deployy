import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable()
export class GithubFollowersService {
  // tslint:disable-next-line:variable-name
  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) {  }

  // tslint:disable-next-line:typedef
  getFollowers() {
    return this.http.get(this._url)
      .pipe(
          map((response: any[]) => {
            const res = response;
            return res;
        }));
  }
}
