import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PrimengModule } from './primeng/primeng.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { SideComponent } from './components/side/side.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { NgxModule } from './ngx/ngx.module';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutheaderComponent } from './components/layoutheader/layoutheader.component';
import { HeaderonlyComponent } from './components/headeronly/headeronly.component';
import { DataviewComponent } from './components/dataview/dataview.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AuthlayoutComponent } from './components/authlayout/authlayout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SideComponent,
    HeaderComponent,
    NotificationComponent,
    ChartComponent,
    LayoutheaderComponent,
    HeaderonlyComponent,
    DataviewComponent,
    DialogComponent,
    AuthlayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    PrimengModule,
    NgxModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    PrimengModule,
    ChartComponent,
    NgxModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    DataviewComponent,
    DialogComponent,
  ],
})
export class SharedModule {}
 