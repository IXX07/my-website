import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  get default(): boolean {
    return screen.width >= 1000;
  }

  constructor() { }
}