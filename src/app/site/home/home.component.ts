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

  constructor(private _fb: FormBuilder, public api: ApiService) {}

  ngOnInit() {
    this.getAllDonors();
  }

  // gettting all donors 
  async getAllDonors(){
    this.allDonors = await this.api.getAllDonors();
    console.log("get all donors")
  }

}
