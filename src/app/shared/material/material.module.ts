import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatNativeDateModule } from '@angular/material/core';
const materialModules = [MatSidenavModule, MatNativeDateModule];
@NgModule({
  declarations: [],
  imports: [CommonModule, materialModules],
  providers: [],
  exports: [materialModules],
})
export class MaterialModule {}
