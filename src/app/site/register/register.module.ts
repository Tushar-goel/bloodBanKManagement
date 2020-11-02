import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiService } from 'src/app/shared/services/api.service';
export const BOOT_ROUTES: Routes = [
  {
    path: "",
    component: RegisterComponent
  }
]


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild(BOOT_ROUTES),
    SharedModule,
  ],
  providers:[ApiService]
})
export class RegisterModule { }
