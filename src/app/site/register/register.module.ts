import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
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
  ]
})
export class RegisterModule { }
