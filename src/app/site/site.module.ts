import { NgModule } from '@angular/core';
import { SiteComponent } from './site.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './toolbars/navbar/navbar.component';
import { FooterComponent } from './toolbars/footer/footer.component';
import { CommonModule } from '@angular/common';

export const BOOT_ROUTES: Routes = [
	{
		path: '',
		component: SiteComponent,
		children: [
			{
				path: '',
				loadChildren:() => import('src/app/site/home/home.module').then((m) => m.HomeModule)
			},
			{
				path: 'about',
				loadChildren:() => import('src/app/site/about/about.module').then((m) => m.AboutModule)
			},
			{
				path: 'contact',
				loadChildren:() => import('src/app/site/contact/contact.module').then((m) => m.ContactModule)
			},
			{
				path: 'register',
				loadChildren:() => import('src/app/site/register/register.module').then((m) => m.RegisterModule)
			},
		]
	}
];

@NgModule({
	declarations: [ SiteComponent,NavbarComponent,FooterComponent ],
	imports: [ RouterModule, RouterModule.forChild(BOOT_ROUTES),CommonModule ]
})
export class SiteModule {}
