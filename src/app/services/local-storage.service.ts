import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public get name() {
    return localStorage.getItem('name');
  }
  public set name(value: any) {
    localStorage.setItem('name', value);
  }
}
