import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { routes } from './config/routes';
import { SharedModule } from './shared/shared.module';
import { SiteModule } from './site/site.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot(),
    routes,
    SharedModule,
    SiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
