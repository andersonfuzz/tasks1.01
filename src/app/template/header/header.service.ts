import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderModel } from './header.model.data';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderModel>({
    title: 'Home',
    icon: 'home',
    routeUrl: '',
  });
  constructor() {}

  get headerData(): HeaderModel {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderModel) {
    this._headerData.next(headerData);
  }
}
