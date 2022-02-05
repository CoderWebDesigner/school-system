import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {DropdownModule} from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';
import {BadgeModule} from 'primeng/badge';
import {PaginatorModule} from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';
import {ProgressBarModule} from 'primeng/progressbar';
import {SkeletonModule} from 'primeng/skeleton';
import {CalendarModule} from 'primeng/calendar';

import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';
import {ImageModule} from 'primeng/image';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);
const primengModules= [
  OverlayPanelModule,
  AvatarModule,
  AvatarGroupModule,
  DropdownModule,
  ChartModule,
  BadgeModule,
  PaginatorModule,
  DataViewModule,
  ProgressBarModule,
  SkeletonModule,
  CalendarModule,
  FullCalendarModule,
  ScrollPanelModule,
  DialogModule,
  InputTextModule,
  FileUploadModule,
  TableModule,
  ImageModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primengModules
  ],
  exports:[
    primengModules
  ]
})
export class PrimengModule { }
