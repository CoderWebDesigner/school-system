import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PrimengModule } from './primeng/primeng.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { SideComponent } from './components/side/side.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { NgxModule } from './ngx/ngx.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutComponent,
    SideComponent,
    HeaderComponent,
    NotificationComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PrimengModule,
    FormsModule,
    NgxModule,
    TranslateModule
  ],
  exports:[MaterialModule, PrimengModule,ChartComponent,NgxModule,TranslateModule]
})
export class SharedModule { }


