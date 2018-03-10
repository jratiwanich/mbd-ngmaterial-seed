import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { NgMaterialModule } from '../ng-meterial.module';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialModule
  ],
  declarations: [    
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
