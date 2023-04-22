import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxReportDesignerModule } from 'devexpress-reporting-angular';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule } from './layouts';

import { AuthService, ScreenService, AppInfoService } from './shared/services';

import { AppRoutingModule } from './app-routing.module';

import { ReportDesignerComponent } from './pages/report-designer/report-designer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportDesignerComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    AppRoutingModule,
    DxReportDesignerModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
