import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.default.scss', './app.mobile.scss']
})
export class AppComponent {

  get mainClassName(): string {
    return screen.width > screen.height ? 'landscape' : '';
  }

  constructor(public ls: LayoutService) {}

  open(url): void {
    open('https://' + url, '_blank');
  }
}