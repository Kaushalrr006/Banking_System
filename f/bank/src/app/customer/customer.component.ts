import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  bankData: any[] = []; // This will store the data from the API

  constructor(private eventService: EventService) { }

  ngOnInit() {
    // Call the API service to fetch data when the component initializes
    this.eventService.getBank().subscribe(data => {
      this.bankData = data;
    });
  }
}