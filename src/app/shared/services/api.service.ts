import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable()
export class ApiService {
	protected _url = environment.API;
	protected headers: any;
	protected options: any;

	constructor(private _http: HttpClient) {}

	register(data: any) {
		return this._http
			.post(this._url + '/register', data, this.post_options())
			.pipe(map((res) => this.extractData(res)), catchError(this.handleAuthError))
			.toPromise();
	}

	getAllDonors(){
		return this._http.get(this._url + '/alldonors',this.get_options())
		.pipe(map((res) => this.extractData(res)), catchError(this.handleAuthError))
		.toPromise();	
	}

	filterDonors(data: any) {
		return this._http
			.post(this._url + '/filterdonors', data, this.post_options())
			.pipe(map((res) => this.extractData(res)), catchError(this.handleAuthError))
			.toPromise();
	}

	setHeaders() {
		this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	}

	get_options(type = null) {
		this.headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return Object.assign({ headers: this.headers });
	}

	post_options(type = null) {
		this.headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return Object.assign({ headers: this.headers, method: 'post' });
	}

	extractData(res: any) {
		let body = res;
		return body['data'] || {};
	}

	handleAuthError(error: any) {
		let body = error.error;
		if (body['error']) body = body['error'];
		return throwError(body);
	}
}
