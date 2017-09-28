import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class EntriesService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getEntries() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json());
  }



}
