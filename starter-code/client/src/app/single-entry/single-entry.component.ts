import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EntriesService} from '../services/entries.service';


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry:any;
    constructor(
      private router:Router,
      private route:ActivatedRoute,
      private entriesservice: EntriesService) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(`El parametro recibido es: ${params['id']}`);
        this.getEntryDetails(params['id'])
      });
    }

    getEntryDetails(id) {
      this.entriesservice.getOneEntry(id)
        .subscribe((entry) => {
          this.entry = entry;
        });
    }
  }
