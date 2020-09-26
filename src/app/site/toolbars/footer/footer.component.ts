import { Component, OnInit, EventEmitter, Input, Output, OnDestroy } from '@angular/core';


declare var window;
@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.css' ]
})
export class FooterComponent implements OnInit {
	
	constructor() {
	}

	ngOnInit() {}

	scrollTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	
}
