import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-first',
  templateUrl: './bottom-first.component.html',
  styleUrl: './bottom-first.component.css'
})
export class BottomFirstComponent implements OnInit  {
  invoices: any[] = [
    { id: 1, invoiceNumber: 'INV-001',client:'Global Technologies ',duedate:'11 March 2024', amount: 1000, status: 'Paid' },
    { id: 2, invoiceNumber: 'INV-002',client:'Delta Infotech',duedate:'8 Feb 2024', amount: 1500, status: 'Pending' },
    { id: 3, invoiceNumber: 'INV-003',client:'Cream Inc',duedate:'18 Feb 2024', amount: 1200, status: 'Paid' },
    // Add more invoice data as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

