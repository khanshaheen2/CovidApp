import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../services/covidservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'covid',
  templateUrl: './covid.component.html',
  styles: []
})
export class CovidComponent implements OnInit {
  public result: any;
  constructor(public abc: CovidserviceService) { }

  ngOnInit() {
    this.abc.getCovid().subscribe((posRes) => {
      this.result = posRes;
    }, (error: HttpErrorResponse) => {
      console.log(error);

    });
  }
}
