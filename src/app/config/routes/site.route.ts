import { Routes } from '@angular/router';
import { SiteComponent } from 'src/app/site/site.component';

export const SITE_ROUTES: Routes = [
	{
		path: '',
		loadChildren: () => import('src/app/site/site.module').then((m) => m.SiteModule)
	}
];
