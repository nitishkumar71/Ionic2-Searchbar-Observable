import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';


@Injectable()
export class SearchGithub {
  constructor(private http: Http) { }

  getItems(term:string) {
    var search = new URLSearchParams()
    search.set('q', term);
    return this.http.get('https://api.github.com/search/repositories', {search})
    .map((response) => {
      console.log(response.json().items);
      return response.json().items;
    });
  }
}
