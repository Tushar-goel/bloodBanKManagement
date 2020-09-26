import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const BOOT_ROUTES: Routes = [
  {
    path: "",
    component: ContactComponent
  }
]

@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule.forChild(BOOT_ROUTES),
    SharedModule,
  ]
})
export class ContactModule { }
