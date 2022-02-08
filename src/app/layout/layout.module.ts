import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    ToolbarComponent,
    MainLayoutComponent
  ]
})
export class LayoutModule { }
