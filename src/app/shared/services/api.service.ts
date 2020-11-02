import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable()
export class ApiService {
	protected _url = environment.API;
	protected headers: any;
	protected options: any;

	constructor(private _http: HttpClient) {}

	register(data: any) {
		return this._http.get('http://localhost:4000/donar').toPromise();
		
		// return this._http
		// 	.post(this._url + '/register', data)
		// 	.pipe(map((res)=>this.extractData), catchError(this.handleAuthError));
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

	extractData(res: Response) {
		let body = res.json();
		return body['data'] || {};
	}

	handleAuthError(error: Response) {
		let body = error.json();
		if (body['error']) body = body['error'];
		return throwError(body);
	}
}
