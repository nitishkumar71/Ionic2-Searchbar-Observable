import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {SearchGithub} from '../../services/SearchGithub';
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [SearchGithub]
})
export class HomePage {
  private value = new Subject<string>();
  items: Observable<string[]> = this.value
    .debounceTime(400)
    .distinctUntilChanged()
    .switchMap((value: string) => this.searchGithub.getItems(value));

  constructor(public navCtrl: NavController, private searchGithub: SearchGithub) { }

  getItems(ev) {
    if (ev.target.value != "") { this.value.next(ev.target.value); }
  }

  browse(item) {
    console.log(item);
  }

}
