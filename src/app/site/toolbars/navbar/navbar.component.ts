import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
	activeRoute = '';

	constructor(private routeActivate: ActivatedRoute,private router:Router) {
		this.activeRoute = routeActivate['_routerState'].snapshot.url;

		// for updating active class on navbar
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
		.subscribe(res=>{
			this.activeRoute = res['url'];
		});
	
	}

	ngOnInit() {
	}

}
