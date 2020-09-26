import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const BOOT_ROUTES: Routes = [
  {
    path: "",
    component: AboutComponent
  }
]

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild(BOOT_ROUTES),
    SharedModule,
  ]
})
export class AboutModule { }
