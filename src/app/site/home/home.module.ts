import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/shared/services/api.service';

export const BOOT_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent
  }
]


@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(BOOT_ROUTES),
    SharedModule,
  ],
  providers:[ApiService]
})
export class HomeModule { }
