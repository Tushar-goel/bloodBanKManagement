import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allDonors = null;
  filterObj = {
    States:['Tauranga','Hamilton','Coromandel','Rotorua','Taupo','Auckland','Christchurch','Katikati','Wellington'],
    bloodGroup:['O+','O-','A+','A-','B+','B-','AB+','AB-']
  };
  filter= {};

  constructor(private _fb: FormBuilder, public api: ApiService) {}

  ngOnInit() {
    this.getAllDonors();
  }

  // gettting all donors 
  async getAllDonors(){
    this.allDonors = await this.api.getAllDonors();
    console.log("get all donors",this.allDonors);
    this.filter = {};
  }

  fetchingValue(key,value){
    console.log(key,value);
    this.filter[key]=value;
  }

  // func call on submit button
  async applyFilter(){
    try {
      console.log(this.filter )
      if(Object.keys(this.filter).length == 2){
        let req = await this.api.filterDonors(this.filter);
        console.log('**', req);
        this.allDonors = req;
      }
		} catch (err) {
			console.log(err);
		}
  }

}
