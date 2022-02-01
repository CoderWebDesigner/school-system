import { Component, Input, OnInit } from '@angular/core';
import { LangService } from 'src/app/shared/services/lang/lang.service';

@Component({
  selector: 'app-websitecategory',
  templateUrl: './websitecategory.component.html',
  styleUrls: ['./websitecategory.component.scss']
})
export class WebsitecategoryComponent implements OnInit {
  @Input() category:any;
  lang:any;
  constructor(private langService:LangService) { }
  ngOnInit(): void {
    this.langService.currentLang.subscribe((result:any)=>{
      this.lang = result
    })
  }

}
