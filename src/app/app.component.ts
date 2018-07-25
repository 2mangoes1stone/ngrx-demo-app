import { Component } from '@angular/core';
import { Store } from '../../node_modules/@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as CatActions from '../store/catState/catData.action';
import * as AppStore from '../store/app.reducers';

const catNames = require('cat-names');
declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  catName: string;

  constructor(
    private store: Store<AppState>
  ) { }

  getCatName(): void {
    this.store.dispatch(new CatActions.SetCatData({
      name: catNames.random(),
      dob: '1/1/2000'
    }));

    this.catName = AppStore.getCatState(this.store).name;
  }

}
