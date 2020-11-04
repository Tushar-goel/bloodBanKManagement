import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { GlobalValidator } from 'src/app/shared/validators/global.validator';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	errorMessage = '';
	filterObj = {
		States:['Tauranga','Hamilton','Coromandel','Rotorua','Taupo','Auckland','Christchurch','Katikati','Wellington'],
		bloodGroup:['O+','O-','A+','A-','B+','B-','AB+','AB-']
	  };
	constructor(private _fb: FormBuilder, public api: ApiService) {}

	ngOnInit() {
		this.initRegisterForm();
	}

	// initializing register form
	initRegisterForm() {
		this.registerForm = this._fb.group({
			fullname: [ '', Validators.required ],
			gender: [ '', Validators.compose([ Validators.required ]) ],
			username: [ '', Validators.compose([ Validators.required, GlobalValidator.emailFormat ]) ],
			dateofbirth: [ '', Validators.compose([ Validators.required ]) ],
			address: [ '', Validators.required ],
			bloodgroup: [ '', Validators.required ],
			phone: [ '', Validators.compose([ Validators.required, GlobalValidator.phoneFormat ]) ],
			city: [ '', Validators.required ],
			state: [ '', Validators.required ]
		});
	}

	async submit() {
		try {
			if (!this.registerForm.valid) return true;

			let req = await this.api.register(this.registerForm.value);
			console.log(this.registerForm.value, '**',);
			this.registerForm.reset();
			alert("User Registered Successfully !!");
		} catch (err) {
			if (err.error.code == 11000) {
				this.errorMessage = 'Email Already Registered !!';
			}
			console.log(err);
		}
	}
}
