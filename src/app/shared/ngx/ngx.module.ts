import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const ngxModules = [
  BsDropdownModule.forRoot()
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngxModules
  ],
  exports:[
    ngxModules
  ]
})
export class NgxModule { }
