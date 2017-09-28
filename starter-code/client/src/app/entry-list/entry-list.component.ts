import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import {Observable} from 'rxjs/Observable'


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: any
  constructor(public entriesservice: EntriesService) { }

    ngOnInit() {
      this.entriesservice.getEntries().subscribe(result => this.entries = result)
  
  }

}
