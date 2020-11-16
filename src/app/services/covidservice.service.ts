import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class CovidserviceService {

  constructor(public http: HttpClient) { }

  public getCovid(): Observable<any> {
    return this.http.get("https://api.covid19api.com/summary");
  };
};
