// money-transfer.component.ts

import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})
export class MoneyTransferComponent {
  bankData: any[] = [];
  selectedSender: any;
  selectedReceiver: any;
  transactionAmount: number = 0;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    // Call the API service to fetch data when the component initializes
    this.eventService.getBank().subscribe(data => {
      this.bankData = data;
    });
  }

  transferMoney() {
    if (!this.selectedSender || !this.selectedReceiver || this.transactionAmount <= 0) {
      alert('Please select sender, receiver, and enter a valid amount.');
      return;
    }

    // Call your API service to perform the transaction
    this.eventService.transaction(this.selectedSender._id, this.selectedReceiver._id, { amount: this.transactionAmount }).subscribe(
      response => {
        // Handle success, e.g., show a success message
        alert('Transaction completed successfully.');
      },
      error => {
        // Handle error, e.g., show an error message
        alert('Error occurred during the transaction.');
      }
    );
  }
}
