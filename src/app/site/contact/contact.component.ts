import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalValidator } from 'src/app/shared/validators/global.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactForm: FormGroup;

	constructor(private _fb: FormBuilder) {}


  ngOnInit() {
    this.initContactForm();
  }

  // initializing Contact form
	initContactForm() {
		this.contactForm = this._fb.group({
			fullname: [ '', Validators.required ],
			email: [ '', Validators.compose([ Validators.required, GlobalValidator.emailFormat ]) ],
			phone: [ '', Validators.compose([ Validators.required, GlobalValidator.phoneFormat ]) ],
			subject: [ '', Validators.required ],
			message: [ '', Validators.required ],
		});
	}

	submit() {
		if (!this.contactForm.valid) return true;

		console.log(this.contactForm.value,"**");
		this.contactForm.reset();
	}
}
