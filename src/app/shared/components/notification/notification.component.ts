import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang/lang.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  direction!:any;
  constructor(private langService:LangService) { }

  ngOnInit(): void {
    this.langService.currentLang.subscribe((result:string)=>{
      this.direction = result;
    })
  }

}
