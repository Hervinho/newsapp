import { Component,  OnInit, ViewChild } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import {
  HomeService
} from '../../../services/home.service';
import * as moment from 'moment';
@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
  @ViewChild('viewModal') public viewModal;
  data: any;
  filtered: any;
  item: any; // single item
  public filterQuery: '';
  dateFormat: any;
  mydatepicker: any;

  constructor(
    private service: HomeService,
    public formBuilder: FormBuilder,
  ) { 
    this.dateFormat = 'YYYY-MM-DD';
    this.getAll(null);
  }

  ngOnInit() {
  }

  getAll(date) {
    if (!!date && date.length == 10) {
      if (!!this.data && this.data.length > 0) {
        this.data = this.data.filter((item: any) => {
          return item.publishedAt.includes(date)
        });
      } else {
        this.getData();
      }
      
    } else {
      this.getData();
    }

    
  }

  getData () {
    this.service.getAll()
      .then((result) => {
        //console.table(result.data.articles);
        if (result.success === true) {
          this.data = result.data.articles;
        } else {
          console.log(result);
        }
      })
      .catch((error) => {
        console.log(`Error : ${JSON.stringify(error)}`);
      });
  }

  onDatePicked(value: any) {
    console.log(value);
    this.getAll(value);

  }

  clear () {
    this.getAll(null);
  }

}
