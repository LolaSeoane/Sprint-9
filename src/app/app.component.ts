import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sprint-9';
  constructor(public translate:TranslateService){}
  ngOnInit(): void {
    this.translate.setDefaultLang('ca');
    this.translate.use(this.translate.getBrowserLang()!)
  }
}
