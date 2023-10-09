// money-transfer.component.ts

import { Component } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router'; // Import the Router


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

  constructor(private eventService: EventService, private router: Router // Inject the Router
  ) {}

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
        this.router.navigate(['/customer']);
        
      },
      error => {
        // Handle error, e.g., show an error message
        alert('Error occurred during the transaction.');
      }
    );
  }

}
