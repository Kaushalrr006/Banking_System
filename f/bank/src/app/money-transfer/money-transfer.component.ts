import { Component } from '@angular/core';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})
export class MoneyTransferComponent {
  bankData: any[] = []; 
  
  selectedSender: any; // Selected sender
  selectedReceiver: any;
  selectSender: any; // Selected sender
  selectReceiver: any; // This will store the data from the API

  constructor(private eventService: EventService) { }

  ngOnInit() {
    // Call the API service to fetch data when the component initializes
    this.eventService.getBank().subscribe(data => {
      this.bankData = data;
    });
  }
 

}
