import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {DropdownModule} from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';
import {BadgeModule} from 'primeng/badge';
const primengModules= [
  OverlayPanelModule,
  AvatarModule,
  AvatarGroupModule,
  DropdownModule,
  ChartModule,
  BadgeModule
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
