import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  mobileQuery!: MediaQueryList;
  isExpanded!: boolean;
  display!: boolean;
  private _mobileQueryListener: () => void;
  routes = [
    { path: '/dashboard', text: 'الرئيسية', icon: 'fas fa-home' },
    { path: '/finance', text: 'الماليات', icon: 'far fa-credit-card' },
    { path: '/profile', text: 'الملف الشخصي', icon: 'far fa-user' },
    { path: '/setting', text: 'الاعدادت', icon: 'fas fa-cog' },
  ];
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onToggleSideNav(value:boolean){
    this.isExpanded = value
  }
}
