import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../../services/lang/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedLang: any;
  direction!:any;
  @Output() toggleSideNav = new EventEmitter<boolean>()
  langs = [
    {langName:'en',langIcon:'../../../../assets/images/icons/en.png'},
    {langName:'ar',langIcon:'../../../../assets/images/icons/ar.jpg'},
  ]
  isExpanded:boolean = true;
  constructor(private translate:TranslateService,private langService:LangService) { }

  ngOnInit(): void {
    this.direction = 'ltr' || localStorage.getItem('direction');
    this.langService.changeLang(this.direction)
  }
  changeLang(){
    this.translate.use(this.selectedLang.langName)
    this.direction = (this.selectedLang.langName == "ar")?'rtl':'ltr';
    this.langService.changeLang(this.direction)
    localStorage.setItem('direction',this.direction)
  }
  collapseSideNav(){
    this.isExpanded = ! this.isExpanded
    this.toggleSideNav.emit(this.isExpanded)
  }
}
